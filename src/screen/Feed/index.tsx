import React, { useState } from "react";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";
import NewsList from "../../components/NewsList";
import GithubIcon from "../../assets/images/github-mark.png";
import PdfIcon from "../../assets/images/pdf.png";
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
  UserMeta,
  TagsWrapper,
  TagPill,
  ComposerCard,
  ComposerInputTitle,
  ComposerInputBody,
  ComposerTagsRow,
  ComposerTagFake,
  ComposerTagInput,  
  ComposerTagPill,     
  RemoveTagButton,    
  ComposerActions,
  ComposerPublishButton,
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


  const posts = [
    {
      id: 1,
      author: "Laura Ribeiro",
      meta: "Ingresso em 2021 · Desenvolvedora de Software - Grupo Panvel",
      title: "Diagnóstico por Imagem - Dataset Câncer Bucal",
      text: "Neste trabalho, explorei o uso de técnicas de visão computacional aplicadas ao diagnóstico de câncer bucal, utilizando um dataset composto por imagens clínicas reais...",
      tag: "Diagnóstico por Imagem",
      github: "https://github.com/RafaelaLaura",
      pdf: null,
    },
    {
      id: 2,
      author: "Bianca Siega",
      meta: "Ingresso em 2019 · Quality Assurance Engineer - Grupo Panvel",
      title:
        "Análise de Imagens de Ultrassom Dermatológico Usando DenseNet121 e Transfer Learning",
      text: "Abstract—Artificial intelligence has revolutionized medicine, particularly in the automated analysis of medical images...",
      tag: "Diagnóstico por Imagem",
      github: "https://github.com/biancasb",
      pdf: "DenseNet121BiancaSiega.pdf",
    },
  ];

  return (
    <FeedWrapper>
      <Header />
      <PageContainer>
      <LayoutWrapper>
        <LeftColumn>
          <UserCard>
            <UserCardHeader>
              <UserAvatarBig>
                <AppAvatar name="Bianca Siega" size={56} />
              </UserAvatarBig>
              <div>
                <UserName>Bianca Siega</UserName>
                <UserSubtitleRow>
                  <GraduationIcon>
                    <img src={GraduationIconImg} alt="Graduação" />
                  </GraduationIcon>
                  <UserSubtitle>Ingresso em 2019</UserSubtitle>
                </UserSubtitleRow>
                <UserMeta>Quality Assurance Engineer - Grupo Panvel</UserMeta>
              </div>
            </UserCardHeader>

            <UserMeta style={{ marginTop: 16, marginBottom: 8 }}>
              Disciplinas
            </UserMeta>

            <TagsWrapper>
              <TagPill>Diagnóstico por Imagem</TagPill>
              <TagPill>Cálculo II</TagPill>
              <TagPill>Bioinformática</TagPill>
              <TagPill>Genética</TagPill>
              <TagPill>Modelagem Molecular</TagPill>
            </TagsWrapper>
          </UserCard>
        </LeftColumn>

        <CenterColumn>
          <ComposerCard>
            <ComposerInputTitle placeholder="Título da publicação" />
            <ComposerInputBody placeholder="Comece uma publicação" />

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
                <GithubLink
                  href={post.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={GithubIcon}
                    alt="GitHub"
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 8,
                      objectFit: "contain",
                    }}
                  />
                  {post.github.replace("https://", "")}
                </GithubLink>

                {post.pdf && (
                <PdfBadge>
                    <img
                    src={PdfIcon}
                    alt="PDF Icon"
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: 8,
                        objectFit: "contain",
                    }}
                    />
                    <PdfBadgeText>{post.pdf}</PdfBadgeText>
                </PdfBadge>

                )}
              </PostFooter>
            </PostCard>
          ))}
        </CenterColumn>

        <RightColumn>
          <NewsCard>
            <NewsTitle>Notícias</NewsTitle>
            <NewsList />
          </NewsCard>
        </RightColumn>
      </LayoutWrapper>
      </PageContainer>
    </FeedWrapper>
  );
};

export default Feed;
