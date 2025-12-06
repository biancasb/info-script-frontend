import React, { useState, useEffect } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Header from "../../components/Header";
import Colors from "../../constants/Colors";
import GithubIcon from "../../assets/images/github-mark.png";
import IconLink from "../../assets/images/icon-link.png";
import api from "@/services/api";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";
import NewsList from "../../components/NewsList";
import Footer from "../../components/Footer";
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
  PostDeleteButton,
  GithubLink,
  PdfBadge,
  PdfBadgeText,
  NewsCard,
  NewsTitle,
} from "./styles";

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
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [links, setLinks] = useState<string[]>([]);
    const [linkInput, setLinkInput] = useState("");
    const [materias, setMaterias] = useState<string[]>([]);
    const [filteredMaterias, setFilteredMaterias] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);

    useEffect(() => {
      const loadMaterias = async () => {
        try {
          const res = await api.get("/materias");
          const payload = res.data;
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
          // ao carregar, prepara lista completa de matérias
          const next = list.filter((m) => !tags.includes(m));
          setFilteredMaterias(next);
        } catch (e) {
          // falha silenciosa; mantém sem sugestões
          console.warn("Falha ao carregar matérias", e);
        }
      };
      loadMaterias();
    }, []);

    useEffect(() => {
      const loadPostagens = async () => {
        try {
          setIsLoadingPosts(true);
          const res = await api.get("/postagens");
          const payload = res.data;
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
    }, []);


    // campo de tag não será digitável, apenas seleção

  // não há mudança por digitação, apenas abrir lista completa ao focar/clicar

  const onTagFocus = () => {
    const next = materias.filter((m) => !tags.includes(m));
    setFilteredMaterias(next);
    setShowSuggestions(next.length > 0);
  };

  const onTagBlur = () => {
    // pequeno atraso para permitir clique na sugestão
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

    const handleLinkKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && linkInput.trim()) {
        event.preventDefault();
        const url = linkInput.trim();
        setLinks([url]);
        setLinkInput("");
      }
    };

    const removeLink = (url: string) => {
      setLinks((prev) => prev.filter((l) => l !== url));
    };

    const handlePublicar = async () => {
      if (!titulo.trim() || !texto.trim() || !tags[0]) {
        alert("Por favor, preencha título, texto e selecione uma tag.");
        return;
      }

      try {
        const autorId = localStorage.getItem("userId") || "";
        const payload = {
          titulo: titulo.trim(),
          texto: texto.trim(),
          tag: tags[0],
          autorId,
        };

        await api.post("/postagens", payload);
        alert("Publicação criada com sucesso!");
        setTitulo("");
        setTexto("");
        setTags([]);
        setLinks([]);
        setLinkInput("");
        
        // Recarregar postagens
        const res = await api.get("/postagens");
        const arr = Array.isArray(res.data) ? res.data : Array.isArray(res.data?.data) ? res.data.data : [];
        setPosts(arr);
      } catch (error: any) {
        console.error("Erro ao publicar:", error);
        alert(error.response?.data?.message || "Erro ao criar publicação.");
      }
    };


    const renderLinkBadge = (url: string) => {
      const isGithub = url.includes("github.com");
      const label = formatLinkLabel(url);
      return (
        <LinkBadge href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={isGithub ? GithubIcon : IconLink}
            alt={isGithub ? "GitHub" : "Link"}
            style={{ width: 20, height: 20, marginRight: 8, objectFit: 'contain' }}
          />
          {label}
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

  const handleDeletePost = (id: number) => {
    const ok = window.confirm("Tem certeza que deseja excluir este post?");
    if (!ok) return;
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

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
          placeholder="Adicione um link"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
          onKeyDown={handleLinkKeyDown}
          disabled={Boolean(links[0])}
          title={links[0] ? "Remova o link para adicionar outro" : undefined}
        />
        {links[0] && (
          <React.Fragment key={links[0]}>{renderLinkBadge(links[0])}</React.Fragment>
        )}
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
      {posts.map((post) => {
        const postId = post._id || post.id;
        // Buscar nome do autor em diferentes estruturas possíveis
        const authorName = post.autorId?.nome || post.autor?.nome || post.author || "Usuário Anônimo";
        // Buscar ano de ingresso em diferentes estruturas possíveis
        const authorYear = post.autorId?.anoIngresso || post.autor?.anoIngresso || post.year || new Date().getFullYear();
        
        return (
        <PostCard key={postId}>
          <PostDeleteButton
            type="button"
            aria-label={`Excluir post ${postId}`}
            title="Excluir publicação"
            onClick={() => handleDeletePost(postId)}
          >
            <DeleteOutlineIcon style={{ fontSize: 18 }} />
          </PostDeleteButton>
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
            <button
              type="button"
              aria-label={likedPosts[postId] ? "Descurtir" : "Curtir"}
              data-liked={likedPosts[postId] ? "true" : "false"}
              onClick={() => togglePostLike(postId)}
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
                color: likedPosts[postId] ? '#305a93' : '#5FA5CE',
                transition: 'all 0.2s'
              }}
            >
              {likedPosts[postId] ? (
                <FavoriteIcon fontSize="small" />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
            </button>
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
