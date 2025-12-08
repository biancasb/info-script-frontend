import React, { useEffect, useMemo, useState } from "react";
import Icon from "@mdi/react";
import { mdiLink } from "@mdi/js";
import FavoriteIcon from '@mui/icons-material/Favorite';

import { getCurrentUserName } from "../../utils/auth";
import api from "@/services/api";

import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import Footer from "../../components/Footer";
import AppAvatar from "../../components/Avatar";
import GraduationIconImg from "../../assets/icons/graduation.svg";

import {
  WishlistWrapper,
  WishlistHeader,
  WishlistTitle,
  WishlistDescription,
  CardsGrid,
  SavedCard,
  CardHeader,
  CardTitle,
  CardMeta,
  CardPostTitle,
  CardPostText,
  CardFooter,
  CardTag,
  CardActions,
  GhostIconButton,
  EmptyState,
  EmptyTitle,
  EmptyText,
  GithubLinkStyled,
  PdfBadge,
  PdfBadgeText,
} from "./styles";

import GithubIcon from "../../assets/images/github-mark.png";
import IconLink from "../../assets/images/icon-link.png";

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

const getStorageKey = (userId?: string) => {
  if (!userId) return "wishlist_posts_anonymous";
  return `wishlist_posts_${userId}`;
};

const loadSavedPosts = (userId?: string): SavedPost[] => {
  try {
    const key = getStorageKey(userId);
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const savePosts = (posts: SavedPost[], userId?: string) => {
  const key = getStorageKey(userId);
  localStorage.setItem(key, JSON.stringify(posts));
};

const WishlistPost: React.FC = () => {
  const currentUserName = getCurrentUserName();
  const currentUserId = localStorage.getItem("userId");
  const [saved, setSaved] = useState<SavedPost[]>([]);
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());

  useEffect(() => {
    const validateAndLoadPosts = async () => {
      const savedPosts = loadSavedPosts(currentUserId || undefined);
      
      const validPosts: SavedPost[] = [];
      
      for (const post of savedPosts) {
        try {
          await api.get(`/postagens/${post.id}`);
          validPosts.push(post);
        } catch (error: any) {
          console.log(`Postagem ${post.id} não existe mais, removendo do wishlist`);
        }
      }
      
      if (validPosts.length !== savedPosts.length) {
        savePosts(validPosts, currentUserId || undefined);
      }
      
      setSaved(validPosts);
    };
    
    validateAndLoadPosts();
  }, [currentUserId]);

  const handleRemove = (id: string) => {
    const next = saved.filter((p) => p.id !== id);
    setSaved(next);
    savePosts(next, currentUserId || undefined);
  };

  const toggleExpanded = (id: string) => {
    setExpandedPosts(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isEmpty = useMemo(() => saved.length === 0, [saved]);

  const renderLink = (post: SavedPost) => {
    const href = post.github || post.link;
    if (!href) return null;

    const isGithub = href.includes("github.com");
    const label = href.replace(/^https?:\/\//, "");

    return (
      <GithubLinkStyled href={href} target="_blank" rel="noopener noreferrer">
        {isGithub ? (
          <img src={GithubIcon} alt="GitHub" style={{ width: 18, height: 18, objectFit: "contain", marginRight: 8 }} />
        ) : (
          <Icon path={mdiLink} size={0.75} style={{ marginRight: 8 }} />
        )}
        <span>{label}</span>
      </GithubLinkStyled>
    );
  };

  const renderPdf = (post: SavedPost) => {
    if (!post.pdf) return null;
    return (
      <PdfBadge href={post.pdf} target="_blank" rel="noopener noreferrer">
        <img src={IconLink} alt="PDF" style={{ width: 18, height: 18, objectFit: "contain", marginRight: 8 }} />
        <PdfBadgeText>{post.pdf}</PdfBadgeText>
      </PdfBadge>
    );
  };

  const renderCard = (post: SavedPost) => {
    const isExpanded = expandedPosts.has(post.id);
    const textLength = post.text?.length || 0;
    const shouldTruncate = textLength > 150;
    const displayText = shouldTruncate && !isExpanded 
      ? post.text.slice(0, 150) + '...' 
      : post.text;

    return (
    <SavedCard key={post.id}>
      <div>
        <CardHeader>
          <AppAvatar name={post.author || "Usuário"} size={36} />
          <div>
            <CardTitle>{post.author}</CardTitle>
            <CardMeta>
              <img src={GraduationIconImg} alt="Graduação" style={{ width: 14, height: 14, marginRight: 4 }} />
              {post.year ? ` Ingresso em ${post.year}` : null}
            </CardMeta>
          </div>
        </CardHeader>

        <CardPostTitle>{post.title}</CardPostTitle>
        <CardPostText>
          {displayText}
          {shouldTruncate && (
            <span 
              onClick={() => toggleExpanded(post.id)}
              style={{ 
                color: '#5FA5CE', 
                cursor: 'pointer', 
                marginLeft: 4,
                fontWeight: 600
              }}
            >
              {isExpanded ? 'ver menos' : 'ver mais'}
            </span>
          )}
        </CardPostText>
      </div>

      <div>
        {post.tag && <CardTag>{post.tag}</CardTag>}

        <CardFooter>
          <CardActions>
            {renderLink(post)}
            {renderPdf(post)}
          </CardActions>
          <GhostIconButton aria-label="Remover dos salvos" onClick={() => handleRemove(post.id)}>
            <FavoriteIcon fontSize="small" />
          </GhostIconButton>
        </CardFooter>
      </div>
    </SavedCard>
    );
  };

  const renderHeader = () => (
    <Header
      currentUser={{
        name: currentUserName || "Usuário",
        initial: (currentUserName?.charAt(0) || "U").toUpperCase(),
      }}
    />
  );

  const renderWishlistHeader = () => (
    <WishlistHeader>
      <WishlistTitle>Salvos</WishlistTitle>
      <WishlistDescription>
        Uma coleção limpa dos posts que você curtiu. Inspire-se e volte quando quiser.
      </WishlistDescription>
    </WishlistHeader>
  );

  const renderEmptyMessage = () => (
    <EmptyState>
      <EmptyTitle>Nada salvo ainda</EmptyTitle>
      <EmptyText>Curta publicações no feed para vê-las aqui, em um espaço organizado e sem distrações.</EmptyText>
    </EmptyState>
  );

  const renderCardsList = () => (
    <CardsGrid>{saved.map(renderCard)}</CardsGrid>
  );

  const renderContent = () => (
    <>
      {renderWishlistHeader()}
      {isEmpty ? renderEmptyMessage() : renderCardsList()}
    </>
  );

  return (
    <WishlistWrapper>
      {renderHeader()}
      <PageContainer>
        {renderContent()}
        <Footer />
      </PageContainer>
    </WishlistWrapper>
  );
};

export default WishlistPost;
