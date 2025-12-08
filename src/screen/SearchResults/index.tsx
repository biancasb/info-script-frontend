import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { getCurrentUserName } from "../../utils/auth";
import api from "@/services/api";

import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";
import Footer from "../../components/Footer";

import {
  SearchResultsWrapper,
  ResultsContainer,
  ResultsHeader,
  ResultsTitle,
  ResultsCount,
  PostCard,
  PostHeader,
  PostAvatarSmall,
  PostHeaderInfo,
  PostHeaderName,
  PostHeaderMeta,
  PostTitle,
  PostText,
  PostTagRow,
  PostTag,
  PostFooter,
  PostDeleteButton,
  GithubLink,
  PdfBadge,
  PdfBadgeText,
  GraduationIcon,
} from "./styles";

import GithubIcon from "../../assets/images/github-mark.png";
import IconLink from "../../assets/images/icon-link.png";
import GraduationIconImg from "../../assets/icons/graduation.svg";

const formatLinkLabel = (url: string) => {
  try {
    const u = new URL(url);
    const host = u.host;
    let path = u.pathname + (u.search || "");
    const full = `${host}${path}`.replace(/\/$/, "");
    if (full.length > 60) {
      return full.slice(0, 57) + "...";
    }
    return full || host;
  } catch {
    const clean = url.replace(/^https?:\/\//, "");
    return clean.length > 60 ? clean.slice(0, 57) + "..." : clean;
  }
};

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [results, setResults] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});

  const currentUserName = getCurrentUserName();

  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      try {
        setIsLoading(true);
        const response = await api.get(`/postagens/search/geral?q=${encodeURIComponent(searchQuery)}`);
        const payload = response.data;
        const arr = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
            ? payload.data
            : [];
        setResults(arr);
      } catch (e) {
        console.error("Erro ao buscar", e);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [searchQuery]);

  const togglePostLike = (id: number) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDeletePost = (id: number) => {
    const ok = window.confirm("Tem certeza que deseja excluir este post?");
    if (!ok) return;
    setResults((prev) => prev.filter((p) => p.id !== id));
  };

  const renderHeader = () => (
    <Header
      currentUser={{
        name: currentUserName || "Usuário",
        initial: (currentUserName?.charAt(0) || "U").toUpperCase(),
      }}
    />
  );

  const renderResultsHeader = () => (
    <ResultsHeader>
      <ResultsTitle>Resultados da busca</ResultsTitle>
      <ResultsCount>
        {isLoading
          ? "Carregando..."
          : `${results.length} resultado${results.length !== 1 ? "s" : ""} para "${searchQuery}"`}
      </ResultsCount>
    </ResultsHeader>
  );

  const renderLoadingState = () => (
    <div style={{ padding: 20, textAlign: 'center' }}>
      Carregando resultados...
    </div>
  );

  const renderEmptyState = () => (
    <div style={{ padding: 20, textAlign: 'center', color: '#6b7280' }}>
      Nenhum resultado encontrado para "{searchQuery}"
    </div>
  );

  const renderPost = (post: any) => {
    const postId = post._id || post.id;
    const authorName = post.autorNome || post.autorId?.nome || post.autor?.nome || post.author || "Usuário Anônimo";
    const authorYear = post.anoIngresso || post.autorId?.anoIngresso || post.autor?.anoIngresso || post.year || new Date().getFullYear();

    return (
      <PostCard key={postId}>
        <PostHeader>
          <PostAvatarSmall>
            <AppAvatar name={authorName} size={36} />
          </PostAvatarSmall>
          <PostHeaderInfo>
            <PostHeaderName>{authorName}</PostHeaderName>
            <PostHeaderMeta>
              <GraduationIcon>
                <img src={GraduationIconImg} alt="Graduação" />
              </GraduationIcon>
              Ingresso em {authorYear}
            </PostHeaderMeta>
          </PostHeaderInfo>
        </PostHeader>
        <PostTitle>{post.titulo || post.title}</PostTitle>
        <PostText>{post.texto || post.text}</PostText>
        <PostTagRow>
          <PostTag>{post.tag}</PostTag>
        </PostTagRow>
        <PostFooter>
          {(post.github || post.link) && (
            <GithubLink
              href={post.github || post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubIcon}
                alt="GitHub"
                style={{ width: 20, height: 20, marginRight: 8, objectFit: 'contain' }}
              />
              {formatLinkLabel(post.github || post.link)}
            </GithubLink>
          )}
          {post.pdf && (
            <PdfBadge>
              <img
                src={IconLink}
                alt="PDF Icon"
                style={{ width: 20, height: 20, marginRight: 8, objectFit: 'contain' }}
              />
              <PdfBadgeText>{post.pdf}</PdfBadgeText>
            </PdfBadge>
          )}
          <button
            type="button"
            aria-label={likedPosts[postId] ? "Descurtir" : "Curtir"}
            data-liked={likedPosts[postId] ? "true" : "false"}
            onClick={() => togglePostLike(postId)}
            style={{
              background: 'transparent',
              border: 'none',
              borderRadius: 6,
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginLeft: 'auto',
              color: likedPosts[postId] ? '#305a93' : '#9ca3af',
              transition: 'all 0.2s'
            }}
          >
            {likedPosts[postId] ? (
              <FavoriteIcon fontSize="small" />
            ) : (
              <FavoriteBorderIcon fontSize="small" />
            )}
          </button>
        </PostFooter>
      </PostCard>
    );
  };

  const renderPostsList = () => {
    if (isLoading) {
      return renderLoadingState();
    }

    if (results.length === 0) {
      return renderEmptyState();
    }

    return results.map((post) => renderPost(post));
  };

  const renderResultsContainer = () => (
    <ResultsContainer>
      {renderResultsHeader()}
      {renderPostsList()}
    </ResultsContainer>
  );

  return (
    <SearchResultsWrapper>
      {renderHeader()}
      <PageContainer>
        {renderResultsContainer()}
        <Footer />
      </PageContainer>
    </SearchResultsWrapper>
  );
};

export default SearchResults;
