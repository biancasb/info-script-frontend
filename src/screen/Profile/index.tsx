import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GraduationIconImg from "../../assets/icons/graduation.svg";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";

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
} from "./styles";

const Profile: React.FC = () => {
  const [likedById, setLikedById] = useState<Record<number, boolean>>({});
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
      image: null,
      author: "Bianca Siega",
    },
    {
      id: 2,
      title: "Artigo do IC",
      description: "Minha primeira publicação científica! Detalhes sobre a aplicação de Machine Learning em Planos assistenciais de saúde. Confira o pôster apresentado no congresso UFCSPA! 🧠📊",
      image: null,
      author: "Bianca Siega",
    },
    {
      id: 3,
      title: "Um código muito massa do workshop de Python!",
      description: "Aprendi um Script em Python que transforma dados de exames em visualizações interativas. Compartilho com vcs a melhor forma de usar Matplot no contexto da saúde <3 📊",
      image: null,
      author: "Bianca Siega",
    },
  ];

  return (
    <ProfileWrapper>
      <Header />

      <PageContainer>
        <ProfileBanner />
        
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
            {!isOwnProfile && (
              <FollowButton>+ Seguir</FollowButton>
            )}
        </ProfileHeaderSection>

        <AboutSection>
          <AboutTitle>Sobre mim:</AboutTitle>
          <AboutText>
            Codificando o futuro da saúde! <AboutHighlight>🩺❤️</AboutHighlight> Sou a Bibs e estou imersa na InfoBio!
          </AboutText>
          <AboutText>
            <AboutHighlight>Bem vindo a minha página:</AboutHighlight> Notas, resumos e flashcards bem estruturados. <em>Quer um material? Manda DM!</em>
          </AboutText>
        </AboutSection>

        <TagsSection>
          <TagsRow>
            <TagLabel>Diagnóstico por Imagem</TagLabel>
            <TagLabel>Cálculo II</TagLabel>
            <TagLabel>Cálculo I</TagLabel>
            <TagLabel>Imunologia</TagLabel>
            <TagLabel>Bioinformática</TagLabel>
            <TagLabel>Genética</TagLabel>
            <TagLabel>Biotecnologia</TagLabel>
          </TagsRow>
          <TagsRow>
            <TagLabel>Tópicos Avançados em Informática Biomédica</TagLabel>
            <TagLabel>Modelagem Molecular</TagLabel>
            <TagLabel>Banco de Dados</TagLabel>
            <TagLabel>Redação Acadêmica</TagLabel>
          </TagsRow>
        </TagsSection>

        <PublicationsSection>
          {publications.map((pub) => (
            <PublicationCard key={pub.id}>
              {pub.image && <PublicationImage src={pub.image} alt={pub.title} />}
              <PublicationContent>
                <PublicationTitle>{pub.title}</PublicationTitle>
                <PublicationDescription>{pub.description}</PublicationDescription>
              </PublicationContent>
              <PublicationFooter>
                <LikeButton
                  type="button"
                  aria-label={likedById[pub.id] ? "Descurtir" : "Curtir"}
                  data-liked={likedById[pub.id] ? "true" : "false"}
                  onClick={() => toggleLike(pub.id)}
                >
                  {likedById[pub.id] ? (
                    <FavoriteIcon fontSize="small" />
                  ) : (
                    <FavoriteBorderIcon fontSize="small" />
                  )}
                </LikeButton>
                <AuthorTag>- {pub.author}</AuthorTag>
              </PublicationFooter>
            </PublicationCard>
          ))}
        </PublicationsSection>
      </PageContainer>
    </ProfileWrapper>
  );
};

export default Profile;
