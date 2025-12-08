import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Icon from "@mdi/react";
import { mdiLink } from "@mdi/js";

import { getCurrentUserName, getCurrentUserYear } from "../../utils/auth";
import api from "@/services/api";

import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";
import NewsList from "../../components/NewsList";
import Footer from "../../components/Footer";

import {
  FeedWrapper,
  LayoutWrapper,
  LeftColumn,
  CenterColumn,
  RightColumn,
  UserCard,
  UserCardHeader,
  UserAvatarBig,
  UserName,
  UserSubtitleRow,
  UserSubtitle,
  GraduationIcon,
  UserInfo,
  ComposerCard,
  ComposerInputTitle,
  ComposerInputBody,
  ComposerTagsRow,
  ComposerLinksRow,
  ComposerTagFake,
  ComposerTagInput,
  ComposerTagPill,
  RemoveTagButton,
  ComposerActions,
  ComposerPublishButton,
  ComposerLinkInput,
  SuggestionsList,
  SuggestionItem,
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
  PostActions,
  PostDeleteButton,
  PostLikeButton,
  GithubLink,
  PdfBadge,
  PdfBadgeText,
  NewsCard,
  NewsTitle,
} from "./styles";

import GithubIcon from "../../assets/images/github-mark.png";
import IconLink from "../../assets/images/icon-link.png";
import GraduationIconImg from "../../assets/icons/graduation.svg";

type SavedPost = {
  id: string;
  title: string;
  text: string;
  tag?: string;
  author?: string;
  github?: string | null;
  link?: string | null;
  pdf?: string | null;
  year?: number | string;
};

const getWishlistKey = (userId?: string) => {
  if (!userId) return "wishlist_posts_anonymous";
  return `wishlist_posts_${userId}`;
};

const loadWishlist = (userId?: string): SavedPost[] => {
  try {
    const key = getWishlistKey(userId);
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const persistWishlist = (posts: SavedPost[], userId?: string) => {
  const key = getWishlistKey(userId);
  localStorage.setItem(key, JSON.stringify(posts));
};

const normalizePost = (post: any): SavedPost => {
  return {
    id: String(post._id || post.id),
    title: post.titulo || post.title || "",
    text: post.texto || post.text || "",
    tag: post.tag,
    author: post.autorNome || post.autor?.nome || post.autorId?.nome || "Usuário",
    github: post.github || null,
    link: post.link || null,
    pdf: post.pdf || null,
    year: post.anoIngresso || post.autorId?.anoIngresso || post.autor?.anoIngresso,
  };
};

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

const Feed: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [link, setLink] = useState("");

  const [materias, setMaterias] = useState<string[]>([]);
  const [filteredMaterias, setFilteredMaterias] = useState<string[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const currentUserName = getCurrentUserName();
  const currentUserId = localStorage.getItem("userId");
  const userYear = getCurrentUserYear() || new Date().getFullYear();

  useEffect(() => {
    const loadMaterias = async () => {
      try {
        const response = await api.get("/materias");
        const payload = response.data;
        const arr = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
            ? payload.data
            : [];
        const names: string[] = arr
          .map((m: any) => m?.nome)
          .filter((v: any) => typeof v === "string" && v.trim().length > 0);
        const list = names.filter(Boolean);
        setMaterias(list);
        const next = list.filter((m) => !tags.includes(m));
        setFilteredMaterias(next);
      } catch (e) {
        console.warn("Falha ao carregar matérias", e);
      }
    };
    loadMaterias();
  }, [tags]);

  useEffect(() => {
    const loadPostagens = async () => {
      try {
        setIsLoadingPosts(true);
        let response;

        if (searchQuery) {
          response = await api.get(`/postagens/search/geral?q=${encodeURIComponent(searchQuery)}`);
        } else {
          response = await api.get("/postagens?feedType=geral");
        }

        const payload = response.data;
        const arr = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
            ? payload.data
            : [];
        setPosts(arr);
      } catch (e) {
        console.error("Falha ao carregar postagens", e);
      } finally {
        setIsLoadingPosts(false);
      }
    };
    loadPostagens();
  }, [searchQuery]);

  useEffect(() => {
    const saved = loadWishlist(currentUserId || undefined);
    if (!saved.length) return;
    const ids = new Set(saved.map((p) => p.id));
    setLikedPosts((prev) => {
      const next: Record<string, boolean> = { ...prev };
      posts.forEach((p) => {
        const id = String(p._id || p.id);
        if (ids.has(id)) next[id] = true;
      });
      return next;
    });
  }, [posts, currentUserId]);

  const onTagFocus = () => {
    const next = materias.filter((m) => !tags.includes(m));
    setFilteredMaterias(next);
    setShowSuggestions(next.length > 0);
  };

  const onTagBlur = () => {
    setTimeout(() => setShowSuggestions(false), 120);
  };

  const addTag = (tag: string) => {
    const normalized = tag.trim();
    if (!normalized) return;
    setTags([normalized]);
    setShowSuggestions(false);
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  const handlePublicar = async () => {
    if (!titulo.trim() || !texto.trim() || !tags[0]) {
      alert("Por favor, preencha título, texto e selecione uma tag.");
      return;
    }

    try {
      const autorId = localStorage.getItem("userId") || "";
      const payload: any = {
        titulo: titulo.trim(),
        texto: texto.trim(),
        tag: tags[0],
        autorId,
        link: link.trim() || null,
      };

      await api.post("/postagens", payload);
      
      alert("Publicação criada com sucesso!");

      setTitulo("");
      setTexto("");
      setTags([]);
      setLink("");

      const res = await api.get("/postagens?feedType=geral");
      const data = res.data;
      const arr = Array.isArray(data) 
        ? data 
        : Array.isArray(data?.data) 
          ? data.data 
          : [];
      setPosts(arr);
    } catch (error: any) {
      console.error("Erro ao publicar:", error);
      alert(error.response?.data?.message || "Erro ao criar publicação.");
    }
  };

  const handleDeletePost = async (id: string) => {
    const ok = window.confirm("Tem certeza que deseja excluir este post?");
    if (!ok) return;
    
    try {
      await api.delete(`/postagens/${id}`, {
        data: { autorId: currentUserId }
      });
      setPosts((prev) => prev.filter((p) => (p._id || p.id) !== id));
    } catch (error: any) {
      console.error("Erro ao deletar post:", error);
      alert("Erro ao deletar publicação");
    }
  };

  const togglePostLike = (id: string) => {
    setLikedPosts((prev) => {
      const nextState = { ...prev, [id]: !prev[id] };

      const wishlist = loadWishlist(currentUserId || undefined);
      const isNowLiked = nextState[id];

      if (isNowLiked) {
        const target = posts.find((p) => String(p._id || p.id) === id);
        if (target) {
          const normalized = normalizePost(target);
          const exists = wishlist.some((p) => p.id === normalized.id);
          const updated = exists ? wishlist : [...wishlist, normalized];
          persistWishlist(updated, currentUserId || undefined);
        }
      } else {
        const updated = wishlist.filter((p) => p.id !== id);
        persistWishlist(updated, currentUserId || undefined);
      }

      return nextState;
    });
  };

  const renderHeader = () => (
    <Header
      currentUser={{
        name: currentUserName || "Usuário",
        initial: (currentUserName?.charAt(0) || "U").toUpperCase(),
      }}
    />
  );

  const renderUser = () => (
    <UserCard>
      <UserCardHeader>
        <UserAvatarBig>
          <AppAvatar name={currentUserName || "Usuário"} size={56} />
        </UserAvatarBig>
        <UserInfo>
          <UserName>{currentUserName || "Usuário"}</UserName>
          <UserSubtitleRow>
            <GraduationIcon>
              <img src={GraduationIconImg} alt="Graduação" />
            </GraduationIcon>
            <UserSubtitle>Ingresso em {userYear}</UserSubtitle>
          </UserSubtitleRow>
        </UserInfo>
      </UserCardHeader>
    </UserCard>
  );

  const renderComposer = () => {
    const isFormValid = titulo.trim() !== "" && texto.trim() !== "" && tags.length > 0;
    
    return (
      <ComposerCard>
        <ComposerInputTitle 
          placeholder="Título da publicação" 
          maxLength={120}
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <ComposerInputBody 
          placeholder="Comece uma publicação" 
          maxLength={500}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <ComposerLinksRow>
          <ComposerLinkInput
            type="url"
            placeholder="Link (opcional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </ComposerLinksRow>
        <ComposerTagsRow>
          <ComposerTagFake>
            <ComposerTagInput
              type="text"
              placeholder={tags.length ? "Tag selecionada" : "Escolha sua tag"}
              value={tags[0] || ""}
              readOnly
              onClick={onTagFocus}
              onFocus={onTagFocus}
              onBlur={onTagBlur}
            />
          </ComposerTagFake>
          {showSuggestions && (
            <SuggestionsList>
              {filteredMaterias.map((m) => (
                <SuggestionItem key={m} onClick={() => addTag(m)}>
                  {m}
                </SuggestionItem>
              ))}
            </SuggestionsList>
          )}
          {tags.map((tag) => (
            <ComposerTagPill key={tag}>
              {tag}
              <RemoveTagButton
                type="button"
                onClick={() => handleRemoveTag(tag)}
              >
                ×
              </RemoveTagButton>
            </ComposerTagPill>
          ))}
        </ComposerTagsRow>
        <ComposerActions>
          <div />
          <ComposerPublishButton 
            onClick={handlePublicar}
            disabled={!isFormValid}
            style={{ opacity: isFormValid ? 1 : 0.5, cursor: isFormValid ? 'pointer' : 'not-allowed' }}
          >
            Publicar
          </ComposerPublishButton>
        </ComposerActions>
      </ComposerCard>
    );
  };

  const renderPosts = () => (
    <>
      {isLoadingPosts && <div style={{ padding: 20, textAlign: 'center' }}>Carregando postagens...</div>}
      {posts.length === 0 && !isLoadingPosts && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '40px 40px 20px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '12px',
            lineHeight: '1.3'
          }}>
            Nenhuma publicação encontrada
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            maxWidth: '480px',
            lineHeight: '1.6',
            fontWeight: '400'
          }}>
            Seja o primeiro a compartilhar algo interessante!
          </p>
        </div>
      )}
      {posts.map((post) => {
        const postId = post._id || post.id;
        const authorName = post.autorNome;
        const authorYear = post.anoIngresso || new Date().getFullYear();
        
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
                  {(post.github || post.link).includes('github.com') ? (
                    <img
                      src={GithubIcon}
                      alt="GitHub"
                      style={{ width: 20, height: 20, marginRight: 8, objectFit: 'contain' }}
                    />
                  ) : (
                    <Icon path={mdiLink} size={1} style={{ marginRight: 8 }} />
                  )}
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
              <PostActions>
                <PostLikeButton
                  type="button"
                  aria-label={likedPosts[postId] ? "Descurtir" : "Curtir"}
                  data-liked={likedPosts[postId] ? "true" : "false"}
                  onClick={() => togglePostLike(postId)}
                >
                  {likedPosts[postId] ? (
                    <FavoriteIcon fontSize="small" />
                  ) : (
                    <FavoriteBorderIcon fontSize="small" />
                  )}
                </PostLikeButton>
                {post.autorId === currentUserId && (
                  <PostDeleteButton
                    type="button"
                    aria-label={`Excluir post ${postId}`}
                    title="Excluir publicação"
                    onClick={() => handleDeletePost(postId)}
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </PostDeleteButton>
                )}
              </PostActions>
            </PostFooter>
          </PostCard>
        );
      })}
    </>
  );

  const renderNews = () => (
    <NewsCard>
      <NewsTitle>Notícias</NewsTitle>
      <NewsList />
    </NewsCard>
  );

  const renderLayout = () => (
    <LayoutWrapper>
      <LeftColumn>{renderUser()}</LeftColumn>
      <CenterColumn>
        {renderComposer()}
        {renderPosts()}
      </CenterColumn>
      <RightColumn>{renderNews()}</RightColumn>
    </LayoutWrapper>
  );

  return (
    <FeedWrapper>
      {renderHeader()}
      <PageContainer>
        {renderLayout()}
        <Footer />
      </PageContainer>
    </FeedWrapper>
  );
};

export default Feed;
