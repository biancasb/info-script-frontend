import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const SearchResultsWrapper = styled.div`
  min-height: 100vh;
  background: ${Colors.infoScriptCommonWhite};
  display: flex;
  flex-direction: column;
`;

export const ResultsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${Layout.infoScriptNormalize(32)}px ${Layout.infoScriptNormalize(16)}px;
`;

export const ResultsHeader = styled.div`
  margin-bottom: ${Layout.infoScriptNormalize(32)}px;
`;

export const ResultsTitle = styled.h1`
  font-size: ${Layout.infoScriptNormalize(32)}px;
  font-weight: 600;
  color: ${Colors.infoScriptTextPrimary};
  margin: 0 0 ${Layout.infoScriptNormalize(8)}px 0;
`;

export const ResultsCount = styled.p`
  font-size: ${Layout.infoScriptNormalize(16)}px;
  color: ${Colors.infoScriptTextSecondary};
  margin: 0;
`;

export const PostCard = styled.article`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(16)}px;
  padding: ${Layout.infoScriptNormalize(20)}px;
  position: relative;
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

export const GraduationIcon = styled.span`
  display: inline-flex;
  align-items: center;
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
