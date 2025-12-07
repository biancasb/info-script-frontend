import styled from "styled-components";
import { Colors, Layout } from "@/constants";

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

export const PostCard = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  padding: ${Layout.infoScriptNormalize(24)}px;
  margin-bottom: ${Layout.infoScriptNormalize(16)}px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.1);
  position: relative;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
  }
`;

export const PostDeleteButton = styled.button`
  position: absolute;
  top: ${Layout.infoScriptNormalize(8)}px;
  right: ${Layout.infoScriptNormalize(8)}px;
  width: ${Layout.infoScriptNormalize(34)}px;
  height: ${Layout.infoScriptNormalize(34)}px;
  border-radius: 999px;
  border: none;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(15,23,42,0.08);
  padding: 0;

  svg {
    display: block;
  }
  &:hover {
    box-shadow: 0 8px 18px rgba(15,23,42,0.12);
    transform: translateY(-1px);
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(12)}px;
  margin-bottom: ${Layout.infoScriptNormalize(16)}px;
`;

export const PostAvatarSmall = styled.div`
  flex-shrink: 0;
`;

export const PostHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0;
`;

export const PostHeaderName = styled.div`
  font-size: ${Layout.infoScriptNormalize(16)}px;
  font-weight: 600;
  color: ${Colors.infoScriptTextPrimary};
  margin-bottom: ${Layout.infoScriptNormalize(4)}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostHeaderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(6)}px;
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const GraduationIcon = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const PostTitle = styled.h3`
  font-size: ${Layout.infoScriptNormalize(18)}px;
  font-weight: 600;
  color: ${Colors.infoScriptTextPrimary};
  margin: 0 0 ${Layout.infoScriptNormalize(8)}px 0;
`;

export const PostText = styled.p`
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextSecondary};
  margin: 0 0 ${Layout.infoScriptNormalize(12)}px 0;
  line-height: 1.5;
`;

export const PostTagRow = styled.div`
  display: flex;
  gap: ${Layout.infoScriptNormalize(8)}px;
  margin-bottom: ${Layout.infoScriptNormalize(16)}px;
`;

export const PostTag = styled.span`
  display: inline-block;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  padding: ${Layout.infoScriptNormalize(4)}px ${Layout.infoScriptNormalize(12)}px;
  border-radius: ${Layout.infoScriptNormalize(16)}px;
  font-size: ${Layout.infoScriptNormalize(12)}px;
  font-weight: 500;
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(12)}px;
  flex-wrap: wrap;
`;

export const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${Colors.infoScriptPrimary};
  text-decoration: none;
  font-size: ${Layout.infoScriptNormalize(14)}px;
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  border: 1px solid ${Colors.infoScriptPrimarySoft};
  border-radius: ${Layout.infoScriptNormalize(6)}px;
  transition: all 0.2s;

  &:hover {
    background: ${Colors.infoScriptPrimarySoft};
  }
`;

export const PdfBadge = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${Colors.infoScriptTextSecondary};
  text-decoration: none;
  font-size: ${Layout.infoScriptNormalize(14)}px;
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  border: 1px solid ${Colors.infoScriptBorderLight};
  border-radius: ${Layout.infoScriptNormalize(6)}px;
  transition: all 0.2s;

  &:hover {
    background: ${Colors.infoScriptBackgroundLight};
  }
`;

export const PdfBadgeText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;
