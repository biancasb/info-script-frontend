import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Header from "../../components/Header";
import Colors from "../../constants/Colors";
import GithubIcon from "../../assets/images/github-mark.png";
import PdfIcon from "../../assets/images/pdf.png";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";
import NewsList from "../../components/NewsList";
import GraduationIconImg from "../../assets/icons/graduation.svg";

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
  LinkBadge,
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
  GithubLink,
  PdfBadge,
  PdfBadgeText,
  NewsCard,
  NewsTitle,
} from "./styles";


const Feed: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [links, setLinks] = useState<string[]>([]);
    const [linkInput, setLinkInput] = useState("");


    const handleTagKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.key === "Enter" || event.key === ",") && tagInput.trim()) {
        event.preventDefault();
        const newTag = tagInput.trim();

        if (!tags.includes(newTag)) {
        setTags((prev) => [...prev, newTag]);
        }
        setTagInput("");
    }

    if (event.key === "Backspace" && !tagInput && tags.length) {
        setTags((prev) => prev.slice(0, prev.length - 1));
    }
    };

    const handleRemoveTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
    };

    const handleLinkKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && linkInput.trim()) {
        event.preventDefault();
        const url = linkInput.trim();
        setLinks((prev) => (prev.includes(url) ? prev : [...prev, url]));
        setLinkInput("");
      }
    };

    const removeLink = (url: string) => {
      setLinks((prev) => prev.filter((l) => l !== url));
    };

    const renderLinkBadge = (url: string) => {
      const isGithub = url.includes("github.com");
      return (
        <LinkBadge href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={isGithub ? GithubIcon : PdfIcon}
            alt={isGithub ? "GitHub" : "PDF"}
            style={{ width: 20, height: 20, marginRight: 8, objectFit: 'contain' }}
          />
          {url.replace('https://', '')}
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); removeLink(url); }}
            style={{
              border: 'none',
              background: 'transparent',
              color: Colors.infoScriptPrimary,
              marginLeft: 8,
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </LinkBadge>
      );
    };

/* AQUI TERÁ QUE SER AJUSTADO PARA COLOCAR OS ATRIBUTOS DA API DE POSTS */
  const posts = [
    {
      id: 1,
      author: "Laura Ribeiro",
      title: "Diagnóstico por Imagem - Dataset Câncer Bucal",
      text: "Neste trabalho, explorei o uso de técnicas de visão computacional aplicadas ao diagnóstico de câncer bucal, utilizando um dataset composto por imagens clínicas reais...",
      tag: "Diagnóstico por Imagem",
      github: "https://github.com/RafaelaLaura",
      pdf: null,
    },
    {
      id: 2,
      author: "Bianca Siega",
      title:
        "Análise de Imagens de Ultrassom Dermatológico Usando DenseNet121 e Transfer Learning",
      text: "Abstract—Artificial intelligence has revolutionized medicine, particularly in the automated analysis of medical images...",
      tag: "Diagnóstico por Imagem",
      github: "https://github.com/biancasb",
      pdf: "DenseNet121BiancaSiega.pdf",
    },
  ];

  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});
  const togglePostLike = (id: number) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // ---- Render helpers ----
  const renderHeader = () => <Header />;

  const renderUser = () => (
    <UserCard>
      <UserCardHeader>
        <UserAvatarBig>
          <AppAvatar name="Bianca Siega" size={56} />
        </UserAvatarBig>
        <UserInfo>
          <UserName>Bianca Siega</UserName>
          <UserSubtitleRow>
            <GraduationIcon>
              <img src={GraduationIconImg} alt="Graduação" />
            </GraduationIcon>
            <UserSubtitle>Ingresso em 2019</UserSubtitle>
          </UserSubtitleRow>
        </UserInfo>
      </UserCardHeader>
    </UserCard>
  );

  const renderComposer = () => (
    <ComposerCard>
      <ComposerInputTitle placeholder="Título da publicação" />
      <ComposerInputBody placeholder="Comece uma publicação" />
      <ComposerLinksRow>
        <ComposerLinkInput
          type="url"
          placeholder="Adicione um link"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
          onKeyDown={handleLinkKeyDown}
        />
        {links.map((url) => (
          <React.Fragment key={url}>{renderLinkBadge(url)}</React.Fragment>
        ))}
      </ComposerLinksRow>
      <ComposerTagsRow>
        <ComposerTagFake>
          <ComposerTagInput
            type="text"
            placeholder={tags.length ? "Adicionar outra tag" : "Escolha suas tags"}
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
          />
        </ComposerTagFake>
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
        <ComposerPublishButton>Publicar</ComposerPublishButton>
      </ComposerActions>
    </ComposerCard>
  );

  const renderPosts = () => (
    <>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <PostHeader>
            <PostAvatarSmall>
              <AppAvatar name={post.author} size={36} />
            </PostAvatarSmall>
            <PostHeaderInfo>
              <PostHeaderName>{post.author}</PostHeaderName>
              <PostHeaderMeta>{post.meta}</PostHeaderMeta>
            </PostHeaderInfo>
          </PostHeader>
          <PostTitle>{post.title}</PostTitle>
          <PostText>{post.text}</PostText>
          <PostTagRow>
            <PostTag>{post.tag}</PostTag>
          </PostTagRow>
          <PostFooter>
            <button
              type="button"
              aria-label={likedPosts[post.id] ? "Descurtir" : "Curtir"}
              data-liked={likedPosts[post.id] ? "true" : "false"}
              onClick={() => togglePostLike(post.id)}
              style={{
                background: 'transparent',
                border: '1px solid #e5e7eb',
                borderRadius: 6,
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginRight: 12,
                color: likedPosts[post.id] ? '#305a93' : '#5FA5CE',
                transition: 'all 0.2s'
              }}
            >
              {likedPosts[post.id] ? (
                <FavoriteIcon fontSize="small" />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
            </button>
            <GithubLink
              href={post.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubIcon}
                alt="GitHub"
                style={{ width: 20, height: 20, marginRight: 8, objectFit: 'contain' }}
              />
              {post.github.replace('https://', '')}
            </GithubLink>
            {post.pdf && (
              <PdfBadge>
                <img
                  src={PdfIcon}
                  alt="PDF Icon"
                  style={{ width: 20, height: 20, marginRight: 8, objectFit: 'contain' }}
                />
                <PdfBadgeText>{post.pdf}</PdfBadgeText>
              </PdfBadge>
            )}
          </PostFooter>
        </PostCard>
      ))}
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
      <PageContainer>{renderLayout()}</PageContainer>
    </FeedWrapper>
  );
};

export default Feed;
