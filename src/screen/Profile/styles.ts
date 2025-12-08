import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const ProfileWrapper = styled.div`
  min-height: 100vh;
  background: ${Colors.infoScriptCommonWhite};
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.header`
  width: 100%;
  padding: ${Layout.infoScriptNormalize(8)}px 0;
  display: flex;
  justify-content: center;
`;

export const TopBarContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: ${Colors.infoScriptPrimarySoft};
  border-radius: ${Layout.infoScriptNormalize(24)}px;
  padding: 0 ${Layout.infoScriptNormalize(24)}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.2);
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(16)}px;
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(20)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.infoScriptNormalize(150)}px;
  height: ${Layout.infoScriptNormalize(75)}px;
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
  height: ${Layout.infoScriptNormalize(44)}px;
  background: ${Colors.infoScriptCommonWhite};
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 0 ${Layout.infoScriptNormalize(16)}px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
`;

export const SearchIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.infoScriptNormalize(18)}px;
  height: ${Layout.infoScriptNormalize(18)}px;
  color: ${Colors.infoScriptTextInverse};
  margin-right: ${Layout.infoScriptNormalize(10)}px;
  
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
  font-size: ${Layout.infoScriptNormalize(14)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  color: ${Colors.infoScriptTextPrimary};

  &::placeholder {
    color: ${Colors.infoScriptTextInverse};
  }
`;

export const ContentWrapper = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: ${Layout.infoScriptNormalize(24)}px auto;
  padding: 0 ${Layout.infoScriptNormalize(24)}px;
`;

export const ProfileBanner = styled.div`
  display: none;
`;

export const ProfileHeaderSection = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  padding: ${Layout.infoScriptNormalize(24)}px ${Layout.infoScriptNormalize(32)}px;
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(20)}px;
  border-radius: ${Layout.infoScriptNormalize(16)}px ${Layout.infoScriptNormalize(16)}px 0 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const ProfileAvatar = styled.div`
  width: ${Layout.infoScriptNormalize(120)}px;
  height: ${Layout.infoScriptNormalize(120)}px;
  border-radius: 50%;
  background: ${Colors.infoScriptCommonWhite};
  border: 4px solid ${Colors.infoScriptCommonWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(48)}px;
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
  padding-bottom: ${Layout.infoScriptNormalize(8)}px;
`;

export const ProfileName = styled.h1`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(32)}px;
  color: ${Colors.infoScriptPrimaryDark};
  margin: 0 0 ${Layout.infoScriptNormalize(4)}px 0;
`;

export const ProfileSubtitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(6)}px;
`;

export const GraduationIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.infoScriptNormalize(16)}px;
  height: ${Layout.infoScriptNormalize(16)}px;
  opacity: 0.7;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProfileSubtitle = styled.span`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptPrimary};
`;

export const FollowButton = styled.button`
  background: ${Colors.infoScriptPrimaryHover};
  color: ${Colors.infoScriptCommonWhite};
  border: none;
  border-radius: ${Layout.infoScriptNormalize(8)}px;
  padding: ${Layout.infoScriptNormalize(10)}px ${Layout.infoScriptNormalize(20)}px;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  cursor: pointer;
  margin-bottom: ${Layout.infoScriptNormalize(8)}px;
  transition: background 0.2s;

  &:hover {
    background: ${Colors.infoScriptAccentSecondary};
  }
`;

export const AboutSection = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  padding: ${Layout.infoScriptNormalize(24)}px ${Layout.infoScriptNormalize(32)}px;
  margin-top: ${Layout.infoScriptNormalize(2)}px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const AboutTitle = styled.h2`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(16)}px;
  color: ${Colors.infoScriptTextPrimary};
  margin: 0 0 ${Layout.infoScriptNormalize(12)}px 0;
`;

export const AboutText = styled.p`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
  line-height: 1.6;
  margin: 0 0 ${Layout.infoScriptNormalize(8)}px 0;

  &:last-child {
    margin-bottom: 0;
  }

  em {
    font-style: italic;
  }
`;

export const AboutHighlight = styled.strong`
  font-family: ${Typography.infoScriptFontFamilyBold};
  color: ${Colors.infoScriptTextPrimary};
`;

export const TagsSection = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  padding: ${Layout.infoScriptNormalize(20)}px ${Layout.infoScriptNormalize(32)}px;
  margin-top: ${Layout.infoScriptNormalize(2)}px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Layout.infoScriptNormalize(8)}px;
  margin-bottom: ${Layout.infoScriptNormalize(8)}px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TagLabel = styled.span`
  display: inline-block;
  background: ${Colors.infoScriptBackgroundTag};
  color: ${Colors.infoScriptPrimaryHover};
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(14)}px;
  border-radius: ${Layout.infoScriptNormalize(6)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(13)}px;
  border: 1px solid ${Colors.infoScriptBorderDashed};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${Colors.infoScriptBackgroundTagHover};
    border-color: ${Colors.infoScriptBorderAccent};
    transform: translateY(-2px);
  }

  &[data-selected="true"] {
    background: ${Colors.infoScriptBackgroundTagHover};
    border-color: ${Colors.infoScriptBorderAccent};
  }
`;

export const TagPill = styled.span`
  display: inline-block;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  border-radius: ${Layout.infoScriptNormalize(16)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export const PublicationsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Layout.infoScriptNormalize(16)}px;
  margin-top: ${Layout.infoScriptNormalize(16)}px;
  padding-bottom: ${Layout.infoScriptNormalize(32)}px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PublicationCard = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;
  margin-bottom: ${Layout.infoScriptNormalize(16)}px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
`;

export const PublicationImage = styled.img`
  width: 100%;
  height: ${Layout.infoScriptNormalize(140)}px;
  object-fit: cover;
  background: ${Colors.infoScriptBackgroundGray};
`;

export const PublicationContent = styled.div`
  padding: ${Layout.infoScriptNormalize(16)}px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${Layout.infoScriptNormalize(8)}px;
`;

export const PublicationTitle = styled.h3`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(16)}px;
  color: ${Colors.infoScriptPrimaryDark};
  margin: 0 0 ${Layout.infoScriptNormalize(10)}px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PublicationDescription = styled.p`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(13)}px;
  color: ${Colors.infoScriptTextSecondary};
  line-height: 1.5;
  margin: 0;
  flex: 1 1 auto;
`;

export const PublicationFooter = styled.div`
  padding: ${Layout.infoScriptNormalize(12)}px ${Layout.infoScriptNormalize(16)}px;
  border-top: 1px solid ${Colors.infoScriptBorderLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${Layout.infoScriptNormalize(12)}px;
`;

export const LikeButton = styled.button`
  background: transparent;
  border: none;
  width: ${Layout.infoScriptNormalize(32)}px;
  height: ${Layout.infoScriptNormalize(32)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
  color: ${Colors.infoScriptIconGray};

  &[data-liked="true"] {
    color: ${Colors.infoScriptPrimaryDark};
  }

  &:hover {
    color: ${Colors.infoScriptPrimaryDark};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const AuthorTag = styled.span`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  color: ${Colors.infoScriptTextInverse};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const GithubLink = styled.a`
  border-radius: 999px;
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  border: 1px solid ${Colors.infoScriptBorderLight};
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  text-decoration: none;
  color: ${Colors.infoScriptTextPrimary};
  display: flex;
  align-items: center;

  &:hover {
    background: ${Colors.infoScriptBackgroundLight};
  }
`;

export const PdfBadge = styled.a`
  border-radius: 999px;
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  border: 1px solid ${Colors.infoScriptBorderLight};
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  text-decoration: none;
  color: ${Colors.infoScriptTextPrimary};
  display: flex;
  align-items: center;

  &:hover {
    background: ${Colors.infoScriptBackgroundLight};
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
  gap: ${Layout.infoScriptNormalize(12)}px;
  justify-content: ${(p) => (p.align === 'center' ? 'center' : 'flex-start')};
  align-items: center;
  margin-top: ${Layout.infoScriptNormalize(12)}px;
  flex-wrap: wrap;
  max-width: 100%;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    max-width: 240px;
    transition: opacity 0.2s ease;
    text-decoration: none;
    
    &:hover {
      opacity: 0.7;
    }
  }

  a span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    flex: 1;
  }
`;
