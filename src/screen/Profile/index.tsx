import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GraduationIconImg from "../../assets/icons/graduation.svg";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import GithubIcon from "../../assets/images/github-mark.png";
import PdfIcon from "../../assets/images/pdf.png";
import { getCurrentUsername, getCurrentUserName, getCurrentUserYear } from "../../utils/auth";

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
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [publications, setPublications] = useState<any[]>([]);
  const { username } = useParams();
  
  // Pega dados do usuário logado do JWT
  const currentUserUsername = getCurrentUsername();
  const currentUserName = getCurrentUserName();
  const currentUserYear = getCurrentUserYear();
  const isOwnProfile = !username || username?.toLowerCase() === currentUserUsername?.toLowerCase();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const u = username || currentUserUsername;
        if (!u) {
          console.warn("Usuário não identificado");
          return;
        }
        const response = await api.get(`/profiles/${u}`);
        setUserProfile(response.data);
      } catch (e) {
        console.warn("Falha ao carregar perfil", e);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [username, currentUserUsername]);

  // Carrega publicações do usuário
  useEffect(() => {
    const loadUserPublications = async () => {
      try {
        const u = username || currentUserUsername;
        if (!u) return;
        const response = await api.get(`/postagens?autor=${u}`);
        const payload = response.data;
        const arr = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
            ? payload.data
            : [];
        // Mapeia para o formato esperado
        const mapped = arr.map((post: any) => ({
          id: post._id || post.id,
          title: post.titulo || post.title,
          description: post.texto || post.text,
          tag: post.tag,
          tags: [post.tag],
          image: post.image || null,
          author: userProfile?.nome || currentUserName || "Usuário",
          github: post.github || null,
          pdf: post.pdf || null,
        }));
        setPublications(mapped);
      } catch (e) {
        console.warn("Falha ao carregar publicações do usuário", e);
      }
    };
    loadUserPublications();
  }, [username, currentUserUsername, userProfile?.nome]);

  const toggleLike = (id: number) => {
    setLikedById((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  const renderProfileHeader = () => (
    <ProfileHeaderSection>
      <ProfileAvatar>
        <AppAvatar name={userProfile?.nome || currentUserName || "Usuário"} size={120} />
      </ProfileAvatar>
      <ProfileInfo>
        <ProfileName>{userProfile?.nome || currentUserName || "Usuário"}</ProfileName>
        <ProfileSubtitleRow>
          <GraduationIcon>
            <img src={GraduationIconImg} alt="Graduação" />
          </GraduationIcon>
          <ProfileSubtitle>Ingresso em {userProfile?.anoIngresso || currentUserYear || "N/A"}, UFCSPA.</ProfileSubtitle>
        </ProfileSubtitleRow>
      </ProfileInfo>
      {!isOwnProfile && <FollowButton>+ Seguir</FollowButton>}
    </ProfileHeaderSection>
  );

  const renderTagsSection = () => {
    // Extrai tags únicas das publicações do usuário
    const uniqueTags = Array.from(
      new Set(publications.map((pub) => pub.tag).filter(Boolean))
    );

    // Se não há publicações, não mostra tags
    if (uniqueTags.length === 0) return null;

    return (
      <TagsSection>
        <TagsRow>
          {uniqueTags.map((tag) => (
            <TagLabel
              key={tag}
              onClick={() => handleTagClick(tag)}
              data-selected={selectedTag === tag}
            >
              {tag}
            </TagLabel>
          ))}
        </TagsRow>
      </TagsSection>
    );
  };

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
      <Header
        currentUser={{
          name: userProfile?.nome || currentUserName || "Usuário",
          initial: (userProfile?.nome || currentUserName || "U")?.charAt(0).toUpperCase(),
        }}
      />

      <PageContainer>
        <ProfileBanner />
        {renderProfileHeader()}
        {renderTagsSection()}
        {renderPublicationsSection()}
        <Footer />
      </PageContainer>
    </ProfileWrapper>
  );
};

export default Profile;
