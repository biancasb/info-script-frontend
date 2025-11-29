import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const FeedWrapper = styled.div`
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
  padding: 0 ${Layout.normalize(24)}px; /* sem padding vertical → barra mais fina */
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

export const TopBarCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 ${Layout.normalize(16)}px;
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

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.normalize(12)}px;
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

export const LogoTitle = styled.span`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(22)}px;
  color: ${Colors.commonWhite};
`;

export const ProfileButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${Colors.commonWhite};
`;

export const ProfileAvatar = styled.div`
  width: ${Layout.normalize(44)}px;
  height: ${Layout.normalize(44)}px;
  border-radius: 999px;
  background: ${Colors.commonWhite};
  color: #305a93;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(18)}px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.span`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(14)}px;
`;

export const LayoutWrapper = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: ${Layout.normalize(24)}px auto;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr) 260px;
  gap: ${Layout.normalize(20)}px;

  @media (max-width: 1024px) {
    grid-template-columns: 260px minmax(0, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const LeftColumn = styled.section``;
export const CenterColumn = styled.section``;
export const RightColumn = styled.section``;

export const UserCard = styled.div`
  background: ${Colors.commonWhite};
  border-radius: ${Layout.normalize(16)}px;
  padding: ${Layout.normalize(20)}px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
`;

export const UserCardHeader = styled.div`
  display: flex;
  gap: ${Layout.normalize(12)}px;
`;

export const UserAvatarBig = styled.div`
  width: ${Layout.normalize(56)}px;
  height: ${Layout.normalize(56)}px;
  border-radius: 999px;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(22)}px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserName = styled.div`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(16)}px;
  color: ${Colors.infoScriptPrimary};
`;

export const UserSubtitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.normalize(6)}px;
`;

export const UserSubtitle = styled.div`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(13)}px;
  color: ${Colors.infoScriptPrimary};
`;

export const GraduationIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.normalize(16)}px;
  height: ${Layout.normalize(16)}px;
  
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const UserMeta = styled.div`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(12)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Layout.normalize(6)}px;
  margin-top: ${Layout.normalize(8)}px;
`;

export const TagPill = styled.span`
  border-radius: 999px;
  padding: ${Layout.normalize(4)}px ${Layout.normalize(10)}px;
  background: ${Colors.infoScriptPrimarySoft};
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(11)}px;
  color: ${Colors.infoScriptPrimary};
`;

export const ComposerCard = styled.div`
  background: ${Colors.commonWhite};
  border-radius: ${Layout.normalize(16)}px;
  padding: ${Layout.normalize(20)}px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
  margin-bottom: ${Layout.normalize(16)}px;
`;

export const ComposerInputTitle = styled.input`
  width: 100%;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  padding: ${Layout.normalize(10)}px ${Layout.normalize(16)}px;
  margin-bottom: ${Layout.normalize(8)}px;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
`;

export const ComposerInputBody = styled.textarea`
  width: 100%;
  border-radius: ${Layout.normalize(16)}px;
  border: 1px solid #e5e7eb;
  padding: ${Layout.normalize(10)}px ${Layout.normalize(16)}px;
  resize: none;
  min-height: 80px;
  margin-bottom: ${Layout.normalize(8)}px;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
`;

export const ComposerTagsRow = styled.div`
  display: flex;
  gap: ${Layout.normalize(8)}px;
  margin-bottom: ${Layout.normalize(12)}px;
  flex-wrap: wrap;
`;

interface ComposerTagFakeProps {
  selected?: boolean;
}

export const ComposerTagFake = styled.div<ComposerTagFakeProps>`
  border-radius: 999px;
  padding: ${Layout.normalize(6)}px ${Layout.normalize(12)}px;
  border: 1px solid #e5e7eb;
  font-size: ${Layout.normalize(12)}px;
  font-family: ${Typography.fontFamilyRegular};
  background: ${Colors.commonWhite};
  color: ${Colors.infoScriptTextSecondary};
  display: flex;
  align-items: center;
`;

export const ComposerTagInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: ${Layout.normalize(12)}px;
  font-family: ${Typography.fontFamilyRegular};
  color: ${Colors.infoScriptTextPrimary};
  width: 140px;

  &::placeholder {
    color: ${Colors.infoScriptTextSecondary};
  }
`;

export const ComposerTagPill = styled.div`
  border-radius: 999px;
  padding: ${Layout.normalize(6)}px ${Layout.normalize(12)}px;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(12)}px;
  display: flex;
  align-items: center;
  gap: ${Layout.normalize(6)}px;
`;

export const RemoveTagButton = styled.button`
  border: none;
  background: transparent;
  color: ${Colors.infoScriptPrimary};
  font-size: ${Layout.normalize(12)}px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

export const ComposerActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ComposerPublishButton = styled.button`
  border-radius: 999px;
  border: none;
  padding: ${Layout.normalize(8)}px ${Layout.normalize(20)}px;
  background: ${Colors.infoScriptPrimary};
  color: ${Colors.commonWhite};
  font-family: ${Typography.fontFamilyBold};
  cursor: pointer;
`;


export const PostCard = styled.article`
  background: ${Colors.commonWhite};
  border-radius: ${Layout.normalize(16)}px;
  padding: ${Layout.normalize(20)}px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
  margin-bottom: ${Layout.normalize(16)}px;
`;

export const PostHeader = styled.div`
  display: flex;
  gap: ${Layout.normalize(10)}px;
  margin-bottom: ${Layout.normalize(8)}px;
`;

export const PostAvatarSmall = styled.div`
  width: ${Layout.normalize(40)}px;
  height: ${Layout.normalize(40)}px;
  border-radius: 999px;
  background: ${Colors.infoScriptPrimarySoft};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${Typography.fontFamilyBold};
`;

export const PostHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostHeaderName = styled.div`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(15)}px;
`;

export const PostHeaderMeta = styled.div`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(12)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const PostTitle = styled.h2`
  margin: ${Layout.normalize(8)}px 0;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(16)}px;
  color: ${Colors.infoScriptTextPrimary};
`;

export const PostText = styled.p`
  margin: 0;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(13)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const PostTagRow = styled.div`
  margin-top: ${Layout.normalize(12)}px;
  margin-bottom: ${Layout.normalize(12)}px;
`;

export const PostTag = styled.span`
  border-radius: 999px;
  padding: ${Layout.normalize(4)}px ${Layout.normalize(10)}px;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(11)}px;
`;

export const PostFooter = styled.div`
  display: flex;
  gap: ${Layout.normalize(8)}px;
  flex-wrap: wrap;
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


export const NewsCard = styled.div`
  background: ${Colors.commonWhite};
  border-radius: ${Layout.normalize(16)}px;
  padding: ${Layout.normalize(20)}px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
  min-height: 120px;
`;

export const NewsTitle = styled.h2`
  margin: 0;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(16)}px;
  color: ${Colors.infoScriptPrimary};
`;
