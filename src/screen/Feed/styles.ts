import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const FeedWrapper = styled.div`
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
  max-width: 1200px;
  margin: 0 auto;
  background: ${Colors.infoScriptPrimarySoft};
  border-radius: ${Layout.infoScriptNormalize(24)}px;
  padding: 0 ${Layout.infoScriptNormalize(24)}px;
  height: ${Layout.infoScriptNormalize(75)}px;
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

export const TopBarCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 ${Layout.infoScriptNormalize(16)}px;
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

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(12)}px;
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

export const LogoTitle = styled.span`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(22)}px;
  color: ${Colors.infoScriptCommonWhite};
`;

export const ProfileButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${Colors.infoScriptCommonWhite};
`;

export const ProfileAvatar = styled.div`
  width: ${Layout.infoScriptNormalize(44)}px;
  height: ${Layout.infoScriptNormalize(44)}px;
  border-radius: 999px;
  background: ${Colors.infoScriptCommonWhite};
  color: ${Colors.infoScriptPrimaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(18)}px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.span`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(14)}px;
`;

export const LayoutWrapper = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr) 260px;
  gap: ${Layout.infoScriptNormalize(20)}px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 260px minmax(0, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const LeftColumn = styled.section``;
export const CenterColumn = styled.section``;
export const RightColumn = styled.section`
  position: sticky;
  top: ${Layout.infoScriptNormalize(24)}px;
  align-self: flex-start;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const UserCard = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(16)}px;
  padding: ${Layout.infoScriptNormalize(20)}px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
`;

export const UserCardHeader = styled.div`
  display: flex;
  gap: ${Layout.infoScriptNormalize(12)}px;
  align-items: center; /* centraliza verticalmente avatar e bloco de infos */
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* centraliza verticalmente nome + subtítulo */
`;

export const UserAvatarBig = styled.div`
  width: ${Layout.infoScriptNormalize(56)}px;
  height: ${Layout.infoScriptNormalize(56)}px;
  border-radius: 999px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img, svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
  }
`;

export const UserName = styled.div`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(16)}px;
  color: ${Colors.infoScriptPrimaryDark};
  font-weight: bold;
`;

export const UserSubtitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(6)}px;
`;

export const UserSubtitle = styled.div`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(13)}px;
  color: ${Colors.infoScriptPrimary};
`;

export const GraduationIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.infoScriptNormalize(16)}px;
  height: ${Layout.infoScriptNormalize(16)}px;
  
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const UserMeta = styled.div`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Layout.infoScriptNormalize(6)}px;
  margin-top: ${Layout.infoScriptNormalize(8)}px;
`;

export const TagPill = styled.span`
  border-radius: 999px;
  padding: ${Layout.infoScriptNormalize(4)}px ${Layout.infoScriptNormalize(10)}px;
  background: ${Colors.infoScriptPrimarySoft};
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(11)}px;
  color: ${Colors.infoScriptPrimary};
`;

export const ComposerCard = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  padding: ${Layout.infoScriptNormalize(14)}px ${Layout.infoScriptNormalize(16)}px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
  margin-bottom: ${Layout.infoScriptNormalize(16)}px;
`;

export const ComposerInputTitle = styled.input`
  width: 100%;
  border-radius: 999px;
  border: 1px solid ${Colors.infoScriptBorderLight};
  padding: ${Layout.infoScriptNormalize(10)}px ${Layout.infoScriptNormalize(16)}px;
  margin-bottom: ${Layout.infoScriptNormalize(8)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
`;

export const ComposerInputBody = styled.textarea`
  width: 100%;
  border-radius: ${Layout.infoScriptNormalize(16)}px;
  border: 1px solid ${Colors.infoScriptBorderLight};
  padding: ${Layout.infoScriptNormalize(10)}px ${Layout.infoScriptNormalize(16)}px;
  resize: none;
  min-height: 80px;
  margin-bottom: ${Layout.infoScriptNormalize(8)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
`;

export const ComposerTagsRow = styled.div`
  display: flex;
  gap: ${Layout.infoScriptNormalize(8)}px;
  margin-bottom: ${Layout.infoScriptNormalize(12)}px;
  flex-wrap: wrap;
  position: relative; /* ancorar sugestões aqui para não quebrar o fluxo */
`;

export const ComposerLinksRow = styled.div`
  display: flex;
  gap: ${Layout.infoScriptNormalize(8)}px;
  margin-bottom: ${Layout.infoScriptNormalize(12)}px;
  flex-wrap: wrap;
  align-items: center;
`;

export const ComposerLinkInput = styled.input`
  border-radius: 999px;
  border: 1px solid ${Colors.infoScriptBorderLight};
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  font-size: ${Layout.infoScriptNormalize(12)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  color: ${Colors.infoScriptTextPrimary};
  width: 280px;

  &::placeholder {
    color: ${Colors.infoScriptTextSecondary};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: ${Colors.infoScriptBackgroundLight};
    border-color: ${Colors.infoScriptBorderInput};
  }
`;

export const LinkBadge = styled.a`
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

interface ComposerTagFakeProps {
  selected?: boolean;
}

export const ComposerTagFake = styled.div<ComposerTagFakeProps>`
  border-radius: 999px;
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  border: 1px solid ${Colors.infoScriptBorderLight};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  background: ${Colors.infoScriptCommonWhite};
  color: ${Colors.infoScriptTextSecondary};
  display: flex;
  align-items: center;
`;

export const ComposerTagInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: ${Layout.infoScriptNormalize(12)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  color: ${Colors.infoScriptTextPrimary};
  width: 140px;

  &::placeholder {
    color: ${Colors.infoScriptTextSecondary};
  }
`;

export const ComposerTagPill = styled.div`
  border-radius: 999px;
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(6)}px;
`;

export const RemoveTagButton = styled.button`
  border: none;
  background: transparent;
  color: ${Colors.infoScriptPrimary};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: ${Layout.infoScriptNormalize(36)}px;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${Colors.infoScriptCommonWhite};
  border: 1px solid ${Colors.infoScriptBorderLight};
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  box-shadow: 0 12px 24px rgba(15,23,42,0.12);
  list-style: none;
  margin: 0;
  padding: ${Layout.infoScriptNormalize(6)}px;
  display: flex;
  flex-direction: column;
  gap: ${Layout.infoScriptNormalize(4)}px;
`;

export const SuggestionItem = styled.li`
  padding: ${Layout.infoScriptNormalize(8)}px ${Layout.infoScriptNormalize(10)}px;
  border-radius: ${Layout.infoScriptNormalize(8)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  color: ${Colors.infoScriptTextPrimary};
  cursor: pointer;

  &:hover {
    background: ${Colors.infoScriptBackgroundLight};
  }
`;

export const ComposerActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ComposerPublishButton = styled.button`
  border-radius: 999px;
  border: none;
  padding: ${Layout.infoScriptNormalize(8)}px ${Layout.infoScriptNormalize(20)}px;
  background: ${Colors.infoScriptPrimary};
  color: ${Colors.infoScriptCommonWhite};
  font-family: ${Typography.infoScriptFontFamilyBold};
  cursor: pointer;
`;


export const PostCard = styled.article`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(16)}px;
  padding: ${Layout.infoScriptNormalize(20)}px;
  position: relative; /* para posicionamento do botão de delete */
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
  margin-bottom: ${Layout.infoScriptNormalize(24)}px;
  
  &:last-child {
    margin-bottom: ${Layout.infoScriptNormalize(40)}px;
  }
`;

export const PostDeleteButton = styled.button`
  background: transparent;
  border: none;
  width: ${Layout.infoScriptNormalize(32)}px;
  height: ${Layout.infoScriptNormalize(32)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  color: ${Colors.infoScriptIconGray};
  transition: color 0.2s ease, transform 0.2s ease;

  svg {
    display: block;
    width: ${Layout.infoScriptNormalize(18)}px;
    height: ${Layout.infoScriptNormalize(18)}px;
  }

  &:hover {
    color: ${Colors.infoScriptErrorText};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PostLikeButton = styled(PostDeleteButton)`
  color: ${Colors.infoScriptIconMedium};

  &[data-liked="true"] {
    color: ${Colors.infoScriptPrimaryDark};
  }

  &:hover {
    color: ${Colors.infoScriptPrimaryDark};
  }
`;

export const PostHeader = styled.div`
  display: flex;
  gap: ${Layout.infoScriptNormalize(12)}px;
  margin-bottom: ${Layout.infoScriptNormalize(10)}px;
`;

export const PostAvatarSmall = styled.div`
  width: ${Layout.infoScriptNormalize(48)}px;
  height: ${Layout.infoScriptNormalize(48)}px;
  border-radius: 999px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img, svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
  }
`;

export const PostHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostHeaderName = styled.div`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(18)}px;
  color: ${Colors.infoScriptPrimaryDark};
  font-weight: bold;
`;

export const PostHeaderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(8)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(13)}px;
  color: ${Colors.infoScriptPrimary};
`;

export const PostTitle = styled.h2`
  margin: ${Layout.infoScriptNormalize(10)}px 0;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(16)}px;
  color: ${Colors.infoScriptPrimaryDark};
`;

export const PostText = styled.p`
  margin: 0;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(13)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const PostTagRow = styled.div`
  margin-top: ${Layout.infoScriptNormalize(12)}px;
  margin-bottom: ${Layout.infoScriptNormalize(12)}px;
`;

export const PostTag = styled.span`
  border-radius: 999px;
  padding: ${Layout.infoScriptNormalize(4)}px ${Layout.infoScriptNormalize(10)}px;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(11)}px;
`;

export const PostFooter = styled.div`
  display: flex;
  gap: ${Layout.infoScriptNormalize(8)}px;
  align-items: center;
  flex-wrap: wrap;
`;

export const PostActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(8)}px;
  margin-left: auto;
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


export const NewsCard = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(16)}px;
  padding: ${Layout.infoScriptNormalize(20)}px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
  min-height: 120px;
`;

export const NewsTitle = styled.h2`
  margin: 0 0 ${Layout.infoScriptNormalize(12)}px 0;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(16)}px;
  color: ${Colors.infoScriptPrimary};
`;
