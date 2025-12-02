import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GraduationIconImg from "../../assets/icons/graduation.svg";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import GithubIcon from "../../assets/images/github-mark.png";
import PdfIcon from "../../assets/images/pdf.png";

import {
  ProfileWrapper,
  
  ProfileBanner,
  ProfileHeaderSection,
  ProfileAvatar,
  ProfileInfo,
  ProfileName,
  ProfileSubtitleRow,
  GraduationIcon,
  ProfileSubtitle,
  FollowButton,
  AboutSection,
  AboutTitle,
  AboutText,
  AboutHighlight,
  TagsSection,
  TagsRow,
  TagLabel,
  PublicationsSection,
  PublicationCard,
  PublicationImage,
  PublicationContent,
  PublicationTitle,
  PublicationDescription,
  PublicationFooter,
  LikeButton,
  AuthorTag,
  TagPill,
  GithubLink,
  PdfBadge,
  PdfBadgeText,
  PublicationLinksRow,
} from "./styles";

const Profile: React.FC = () => {
  const [likedById, setLikedById] = useState<Record<number, boolean>>({});
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { username } = useParams();
  const currentUserUsername = "bianca";
  const isOwnProfile = !username || username?.toLowerCase() === currentUserUsername;

  const toggleLike = (id: number) => {
    setLikedById((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const publications = [
    {
      id: 1,
      title: "Caderno de Imunologia",
      description: "Todos meus resumos, esquemas e mapas mentais para dominar os sistemas de defesa do corpo! Foco nas células e mecanismos essenciais. 🔥🧬",
      tag: "Imunologia",
      tags: ["Imunologia"],
      image: null,
      author: "Bianca Siega",
      github: null,
      pdf: null,
    },
    {
      id: 2,
      title: "Artigo do IC",
      description: "Minha primeira publicação científica! Detalhes sobre a aplicação de Machine Learning em Planos assistenciais de saúde. Confira o pôster apresentado no congresso UFCSPA! 🧠📊",
      tag: "Diagnóstico por Imagem",
      tags: ["Diagnóstico por Imagem"],
      image: null,
      author: "Bianca Siega",
      github: "https://github.com/biancasb/ic-paper",
      pdf: "Artigo_IC_Poster.pdf",
    },
    {
      id: 3,
      title: "Um código muito massa do workshop de Python!",
      description: "Aprendi um Script em Python que transforma dados de exames em visualizações interativas. Compartilho com vcs a melhor forma de usar Matplot no contexto da saúde <3 📊",
      tag: "Programação",
      tags: ["Programação", "Python"],
      image: null,
      author: "Bianca Siega",
      github: "https://github.com/biancasb/python-workshop",
      pdf: null,
    },
  ];

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  const renderProfileHeader = () => (
    <ProfileHeaderSection>
      <ProfileAvatar>
        <AppAvatar name="Bianca Siega" size={120} />
      </ProfileAvatar>
      <ProfileInfo>
        <ProfileName>Bianca Siega</ProfileName>
        <ProfileSubtitleRow>
          <GraduationIcon>
            <img src={GraduationIconImg} alt="Graduação" />
          </GraduationIcon>
          <ProfileSubtitle>Ingresso em 2020, UFCSPA.</ProfileSubtitle>
        </ProfileSubtitleRow>
      </ProfileInfo>
      {!isOwnProfile && <FollowButton>+ Seguir</FollowButton>}
    </ProfileHeaderSection>
  );

  const renderAboutSection = () => (
    <AboutSection>
      <AboutTitle>Sobre mim:</AboutTitle>
      <AboutText>
        Codificando o futuro da saúde! <AboutHighlight>🩺❤️</AboutHighlight> Sou a Bibs e estou imersa na InfoBio!
      </AboutText>
      <AboutText>
        <AboutHighlight>Bem vindo a minha página:</AboutHighlight> Notas, resumos e flashcards bem estruturados. <em>Quer um material? Manda DM!</em>
      </AboutText>
    </AboutSection>
  );
/* MUDAR AQUI PARA ATRIBUTO DO ENDPOINT E FUNÇÃO UNICA */
  const renderTagsSection = () => (
    <TagsSection>
      <TagsRow>
        <TagLabel onClick={() => handleTagClick("Diagnóstico por Imagem")} data-selected={selectedTag === "Diagnóstico por Imagem"}>{"Diagnóstico por Imagem"}</TagLabel>
        <TagLabel onClick={() => handleTagClick("Cálculo II")} data-selected={selectedTag === "Cálculo II"}>Cálculo II</TagLabel>
        <TagLabel onClick={() => handleTagClick("Cálculo I")} data-selected={selectedTag === "Cálculo I"}>Cálculo I</TagLabel>
        <TagLabel onClick={() => handleTagClick("Imunologia")} data-selected={selectedTag === "Imunologia"}>Imunologia</TagLabel>
        <TagLabel onClick={() => handleTagClick("Bioinformática")} data-selected={selectedTag === "Bioinformática"}>Bioinformática</TagLabel>
        <TagLabel onClick={() => handleTagClick("Genética")} data-selected={selectedTag === "Genética"}>Genética</TagLabel>
        <TagLabel onClick={() => handleTagClick("Biotecnologia")} data-selected={selectedTag === "Biotecnologia"}>Biotecnologia</TagLabel>
      </TagsRow>
      <TagsRow>
        <TagLabel onClick={() => handleTagClick("Tópicos Avançados em Informática Biomédica")} data-selected={selectedTag === "Tópicos Avançados em Informática Biomédica"}>Tópicos Avançados em Informática Biomédica</TagLabel>
        <TagLabel onClick={() => handleTagClick("Modelagem Molecular")} data-selected={selectedTag === "Modelagem Molecular"}>Modelagem Molecular</TagLabel>
        <TagLabel onClick={() => handleTagClick("Banco de Dados")} data-selected={selectedTag === "Banco de Dados"}>Banco de Dados</TagLabel>
        <TagLabel onClick={() => handleTagClick("Redação Acadêmica")} data-selected={selectedTag === "Redação Acadêmica"}>Redação Acadêmica</TagLabel>
      </TagsRow>
    </TagsSection>
  );

  const renderPublicationsSection = () => (
    <PublicationsSection>
        {publications
          .filter((pub) => {
            if (!selectedTag) return true;
            if (pub.tag && pub.tag === selectedTag) return true;
            return (pub.tags || []).includes(selectedTag);
          })
          .map((pub) => (
            <PublicationCard key={pub.id}>
              {pub.image && <PublicationImage src={pub.image} alt={pub.title} />}
              <PublicationContent>
                <PublicationTitle>{pub.title}</PublicationTitle>
                  <PublicationDescription>{pub.description}</PublicationDescription>
                {(pub.github || pub.pdf) && (
                  <PublicationLinksRow align={pub.github && pub.pdf ? 'center' : 'left'}>
                    {pub.github && (
                      <GithubLink href={pub.github} target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} alt="GitHub" style={{ width: 18, height: 18, objectFit: 'contain', marginRight: 8 }} />
                        {pub.github.replace('https://', '')}
                      </GithubLink>
                    )}
                    {pub.pdf && (
                      <PdfBadge href={pub.pdf} target="_blank" rel="noopener noreferrer">
                        <img src={PdfIcon} alt="PDF" style={{ width: 18, height: 18, objectFit: 'contain', marginRight: 8 }} />
                        <PdfBadgeText>{pub.pdf}</PdfBadgeText>
                      </PdfBadge>
                    )}
                  </PublicationLinksRow>
                )}
              </PublicationContent>
              <PublicationFooter>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {(pub.tag || (pub.tags && pub.tags[0])) && (
                    <TagPill>{pub.tag || pub.tags[0]}</TagPill>
                  )}
                  {renderLikeButton(pub.id)}
                </div>
                <AuthorTag>- {pub.author}</AuthorTag>
              </PublicationFooter>
            </PublicationCard>
          ))}
      </PublicationsSection>
  );

  const renderLikeButton = (id: number) => (
    <LikeButton
      type="button"
      aria-label={likedById[id] ? "Descurtir" : "Curtir"}
      data-liked={likedById[id] ? "true" : "false"}
      onClick={() => toggleLike(id)}
    >
      {likedById[id] ? (
        <FavoriteIcon fontSize="small" />
      ) : (
        <FavoriteBorderIcon fontSize="small" />
      )}
    </LikeButton>
  );

  return (
    <ProfileWrapper>
      <Header />

      <PageContainer>
        <ProfileBanner />
        {renderProfileHeader()}
        {renderAboutSection()}
        {renderTagsSection()}
        {renderPublicationsSection()}
        <Footer />
      </PageContainer>
    </ProfileWrapper>
  );
};

export default Profile;
