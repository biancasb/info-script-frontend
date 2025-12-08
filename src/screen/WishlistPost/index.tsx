import React, { useEffect, useMemo, useState } from "react";
import Icon from "@mdi/react";
import { mdiLink } from "@mdi/js";

import { getCurrentUserName } from "../../utils/auth";

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

const STORAGE_KEY = "wishlist_posts";

const loadSavedPosts = (): SavedPost[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const savePosts = (posts: SavedPost[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

const WishlistPost: React.FC = () => {
  const currentUserName = getCurrentUserName();
  const [saved, setSaved] = useState<SavedPost[]>([]);

  useEffect(() => {
    setSaved(loadSavedPosts());
  }, []);

  const handleRemove = (id: string) => {
    const next = saved.filter((p) => p.id !== id);
    setSaved(next);
    savePosts(next);
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

  const renderCard = (post: SavedPost) => (
    <SavedCard key={post.id}>
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

      <p style={{ margin: "8px 0 12px", color: "#4b5563", lineHeight: 1.5 }}>{post.text}</p>

      {post.tag && <CardTag>{post.tag}</CardTag>}

      <CardFooter>
        <CardActions>
          {renderLink(post)}
          {renderPdf(post)}
        </CardActions>
        <GhostIconButton aria-label="Remover dos salvos" onClick={() => handleRemove(post.id)}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Remover</span>
        </GhostIconButton>
      </CardFooter>
    </SavedCard>
  );

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
