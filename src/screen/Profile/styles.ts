import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const ProfileWrapper = styled.div`
  min-height: 100vh;
  background: #dcdcdc;
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.header`
  width: 100%;
  padding: ${Layout.normalize(8)}px 0;
  display: flex;
  justify-content: center;
`;

export const TopBarContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: #5FA5CE;
  border-radius: ${Layout.normalize(24)}px;
  padding: 0 ${Layout.normalize(24)}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.2);
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.normalize(16)}px;
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  background: ${Colors.commonWhite};
  border-radius: ${Layout.normalize(20)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.normalize(150)}px;
  height: ${Layout.normalize(75)}px;
  overflow: hidden;
  margin-left: -30px;
`;

export const LogoImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;
  display: block;
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 520px;
  height: ${Layout.normalize(44)}px;
  background: ${Colors.commonWhite};
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 0 ${Layout.normalize(16)}px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
`;

export const SearchIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.normalize(18)}px;
  height: ${Layout.normalize(18)}px;
  color: ${Colors.infoScriptTextInverse};
  margin-right: ${Layout.normalize(10)}px;
  
  img {
    display: block;
    opacity: 0.6;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${Layout.normalize(14)}px;
  font-family: ${Typography.fontFamilyRegular};
  color: ${Colors.infoScriptTextPrimary};

  &::placeholder {
    color: ${Colors.infoScriptTextInverse};
  }
`;

export const ContentWrapper = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: ${Layout.normalize(24)}px auto;
  padding: 0 ${Layout.normalize(24)}px;
`;

export const ProfileBanner = styled.div`
  display: none;
`;

export const ProfileHeaderSection = styled.div`
  background: ${Colors.commonWhite};
  padding: ${Layout.normalize(24)}px ${Layout.normalize(32)}px;
  display: flex;
  align-items: center;
  gap: ${Layout.normalize(20)}px;
  border-radius: ${Layout.normalize(16)}px ${Layout.normalize(16)}px 0 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const ProfileAvatar = styled.div`
  width: ${Layout.normalize(120)}px;
  height: ${Layout.normalize(120)}px;
  border-radius: 50%;
  background: ${Colors.commonWhite};
  border: 4px solid ${Colors.commonWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(48)}px;
  color: ${Colors.infoScriptPrimary};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ProfileInfo = styled.div`
  flex: 1;
  padding-bottom: ${Layout.normalize(8)}px;
`;

export const ProfileName = styled.h1`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(32)}px;
  color: ${Colors.infoScriptPrimary};
  margin: 0 0 ${Layout.normalize(4)}px 0;
`;

export const ProfileSubtitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.normalize(6)}px;
`;

export const GraduationIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.normalize(16)}px;
  height: ${Layout.normalize(16)}px;
  opacity: 0.7;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProfileSubtitle = styled.span`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
`;

export const FollowButton = styled.button`
  background: #4a7ba7;
  color: ${Colors.commonWhite};
  border: none;
  border-radius: ${Layout.normalize(8)}px;
  padding: ${Layout.normalize(10)}px ${Layout.normalize(20)}px;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(14)}px;
  cursor: pointer;
  margin-bottom: ${Layout.normalize(8)}px;
  transition: background 0.2s;

  &:hover {
    background: #3d6689;
  }
`;

export const AboutSection = styled.div`
  background: ${Colors.commonWhite};
  padding: ${Layout.normalize(24)}px ${Layout.normalize(32)}px;
  margin-top: ${Layout.normalize(2)}px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const AboutTitle = styled.h2`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(16)}px;
  color: ${Colors.infoScriptTextPrimary};
  margin: 0 0 ${Layout.normalize(12)}px 0;
`;

export const AboutText = styled.p`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
  line-height: 1.6;
  margin: 0 0 ${Layout.normalize(8)}px 0;

  &:last-child {
    margin-bottom: 0;
  }

  em {
    font-style: italic;
  }
`;

export const AboutHighlight = styled.strong`
  font-family: ${Typography.fontFamilyBold};
  color: ${Colors.infoScriptTextPrimary};
`;

export const TagsSection = styled.div`
  background: ${Colors.commonWhite};
  padding: ${Layout.normalize(20)}px ${Layout.normalize(32)}px;
  margin-top: ${Layout.normalize(2)}px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Layout.normalize(8)}px;
  margin-bottom: ${Layout.normalize(8)}px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TagLabel = styled.span`
  display: inline-block;
  background: #e8f2f7;
  color: #4a7ba7;
  padding: ${Layout.normalize(6)}px ${Layout.normalize(14)}px;
  border-radius: ${Layout.normalize(6)}px;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(13)}px;
  border: 1px solid #d1e5f0;
  cursor: pointer;
  user-select: none;

  &[data-selected="true"] {
    background: #d1e5f0;
    border-color: #9fc1d6;
  }
`;

export const TagPill = styled.span`
  display: inline-block;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  padding: ${Layout.normalize(6)}px ${Layout.normalize(12)}px;
  border-radius: ${Layout.normalize(16)}px;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(12)}px;
`;

export const PublicationsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Layout.normalize(16)}px;
  margin-top: ${Layout.normalize(16)}px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PublicationCard = styled.div`
  background: ${Colors.commonWhite};
  border-radius: ${Layout.normalize(12)}px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
`;

export const PublicationImage = styled.img`
  width: 100%;
  height: ${Layout.normalize(140)}px;
  object-fit: cover;
  background: #f0f4f8;
`;

export const PublicationContent = styled.div`
  padding: ${Layout.normalize(16)}px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${Layout.normalize(8)}px;
`;

export const PublicationTitle = styled.h3`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(16)}px;
  color: ${Colors.infoScriptPrimary};
  margin: 0 0 ${Layout.normalize(10)}px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PublicationDescription = styled.p`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(13)}px;
  color: ${Colors.infoScriptTextPrimary};
  line-height: 1.5;
  margin: 0;
  flex: 1 1 auto;
`;

export const PublicationFooter = styled.div`
  padding: ${Layout.normalize(12)}px ${Layout.normalize(16)}px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${Layout.normalize(12)}px;
`;

export const LikeButton = styled.button`
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: ${Layout.normalize(6)}px;
  width: ${Layout.normalize(36)}px;
  height: ${Layout.normalize(36)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: ${Colors.infoScriptPrimary};

  &[data-liked="true"] {
    color: #305a93;
  }

  &:hover {
    background: #f0f4f8;
    border-color: #4a7ba7;
  }
`;

export const AuthorTag = styled.span`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(12)}px;
  color: ${Colors.infoScriptTextInverse};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const GithubLink = styled.a`
  border-radius: 999px;
  padding: ${Layout.normalize(6)}px ${Layout.normalize(12)}px;
  border: 1px solid #e5e7eb;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(12)}px;
  text-decoration: none;
  color: ${Colors.infoScriptTextPrimary};
  display: flex;
  align-items: center;

  &:hover {
    background: #f3f4f6;
  }
`;

export const PdfBadge = styled.a`
  border-radius: 999px;
  padding: ${Layout.normalize(6)}px ${Layout.normalize(12)}px;
  border: 1px solid #e5e7eb;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(12)}px;
  text-decoration: none;
  color: ${Colors.infoScriptTextPrimary};
  display: flex;
  align-items: center;

  &:hover {
    background: #f3f4f6;
  }
`;

export const PdfBadgeText = styled.span`
  color: ${Colors.infoScriptTextPrimary};
  font-weight: 500;
`;

interface PublicationLinksRowProps {
  align?: 'center' | 'left';
}

export const PublicationLinksRow = styled.div<PublicationLinksRowProps>`
  display: flex;
  gap: ${Layout.normalize(12)}px;
  justify-content: ${(p) => (p.align === 'center' ? 'center' : 'flex-start')};
  align-items: center;
  margin-top: ${Layout.normalize(12)}px;
`;
