import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Icon from "@mdi/react";
import { mdiLink } from "@mdi/js";

import { getCurrentUsername, getCurrentUserName, getCurrentUserYear } from "../../utils/auth";
import api from "../../services/api";

import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import AppAvatar from "../../components/Avatar";
import Footer from "../../components/Footer";

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

import GraduationIconImg from "../../assets/icons/graduation.svg";
import GithubIcon from "../../assets/images/github-mark.png";
import PdfIcon from "../../assets/images/pdf.png";

const Profile: React.FC = () => {
  const [likedById, setLikedById] = useState<Record<number, boolean>>({});
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [publications, setPublications] = useState<any[]>([]);
  const { username } = useParams();
  const navigate = useNavigate();

  const currentUserUsername = getCurrentUsername();
  const currentUserName = getCurrentUserName();
  const currentUserYear = getCurrentUserYear();
  const isOwnProfile = !username || username?.toLowerCase() === currentUserUsername?.toLowerCase();

  console.log("Profile Debug:", {
    usernameFromURL: username,
    currentUserUsername,
    isOwnProfile
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const u = username || currentUserUsername;
        if (!u) {
          console.warn("Usuário não identificado");
          return;
        }
        console.log("Carregando perfil para:", u);
        const response = await api.get(`/profiles/${u}`);
        console.log("Perfil carregado:", response.data);
        setUserProfile(response.data);
      } catch (e) {
        console.warn("Falha ao carregar perfil", e);
      }
    };
    loadProfile();
    }, [username, currentUserUsername]);

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
          link: post.link || null,
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
    const uniqueTags = Array.from(
      new Set(publications.map((pub) => pub.tag).filter(Boolean))
    );

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

  const renderPublicationsSection = () => {
    const filteredPubs = publications.filter((pub) => {
      if (!selectedTag) return true;
      if (pub.tag && pub.tag === selectedTag) return true;
      return (pub.tags || []).includes(selectedTag);
    });

    if (filteredPubs.length === 0) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 20px',
          textAlign: 'center',
          flex: 1
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Compartilhe seus projetos e conhecimentos
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            maxWidth: '500px',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}>
            Publique seus projetos acadêmicos, trabalhos, pesquisas e conteúdos que desenvolveu durante sua trajetória na faculdade. Compartilhe conhecimentos, experiências e inspire outros alunos!
          </p>
          {isOwnProfile && (
            <button
              onClick={() => navigate('/feed')}
              style={{
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#5FA5CE',
                background: 'transparent',
                border: '2px solid #5FA5CE',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#5FA5CE';
                (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.color = '#5FA5CE';
              }}
            >
              Começar
            </button>
          )}
        </div>
      );
    }

    return (
      <PublicationsSection>
        {filteredPubs.map((pub) => (
          <PublicationCard key={pub.id}>
              {pub.image && <PublicationImage src={pub.image} alt={pub.title} />}
              <PublicationContent>
                <PublicationTitle>{pub.title}</PublicationTitle>
                <PublicationDescription>{pub.description}</PublicationDescription>
                {(pub.link || pub.github || pub.pdf) && (
                  <PublicationLinksRow align={(pub.link && pub.github && pub.pdf) ? 'center' : 'left'}>
                    {pub.link && (
                      <GithubLink href={pub.link} target="_blank" rel="noopener noreferrer">
                        {pub.link.includes('github.com') ? (
                          <img src={GithubIcon} alt="GitHub" style={{ width: 18, height: 18, objectFit: 'contain', marginRight: 8 }} />
                        ) : (
                          <Icon path={mdiLink} size={0.75} style={{ marginRight: 8 }} />
                        )}
                        <span>{pub.link.replace(/^https?:\/\//, '')}</span>
                      </GithubLink>
                    )}
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
                <AuthorTag>{pub.author}</AuthorTag>
              </PublicationFooter>
            </PublicationCard>
          ))}
        </PublicationsSection>
    );
  };

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
