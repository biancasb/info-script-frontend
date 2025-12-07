import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const WishlistWrapper = styled.div`
  min-height: 100vh;
  background: ${Colors.infoScriptCommonWhite};
  display: flex;
  flex-direction: column;
`;

export const WishlistHeader = styled.header`
  margin: ${Layout.infoScriptNormalize(32)}px 0 ${Layout.infoScriptNormalize(16)}px;
  display: flex;
  flex-direction: column;
  gap: ${Layout.infoScriptNormalize(8)}px;
`;

export const WishlistTitle = styled.h1`
  margin: 0;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(28)}px;
  color: ${Colors.infoScriptTextPrimary};
`;

export const WishlistDescription = styled.p`
  margin: 0;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(15)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${Layout.infoScriptNormalize(16)}px;
  padding-bottom: ${Layout.infoScriptNormalize(40)}px;
`;

export const SavedCard = styled.article`
  background: ${Colors.infoScriptCommonWhite};
  border: 1px solid ${Colors.infoScriptBorderLight};
  border-radius: ${Layout.infoScriptNormalize(14)}px;
  padding: ${Layout.infoScriptNormalize(16)}px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  gap: ${Layout.infoScriptNormalize(10)}px;
`;

export const CardHeader = styled.div`
  display: flex;
  gap: ${Layout.infoScriptNormalize(12)}px;
  align-items: center;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(16)}px;
  color: ${Colors.infoScriptPrimaryDark};
`;

export const CardMeta = styled.div`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const CardTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${Layout.infoScriptNormalize(4)}px ${Layout.infoScriptNormalize(10)}px;
  border-radius: ${Layout.infoScriptNormalize(999)}px;
  background: ${Colors.infoScriptPrimarySoft};
  color: ${Colors.infoScriptPrimary};
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(11)}px;
  width: fit-content;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${Layout.infoScriptNormalize(10)}px;
  flex-wrap: wrap;
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(8)}px;
  flex-wrap: wrap;
`;

export const GhostIconButton = styled.button`
  background: transparent;
  border: 1px solid ${Colors.infoScriptBorderLight};
  border-radius: ${Layout.infoScriptNormalize(10)}px;
  padding: ${Layout.infoScriptNormalize(8)}px ${Layout.infoScriptNormalize(12)}px;
  color: ${Colors.infoScriptTextSecondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${Colors.infoScriptPrimary};
    color: ${Colors.infoScriptPrimary};
  }
`;

export const EmptyState = styled.div`
  border: 1px dashed ${Colors.infoScriptBorderMedium};
  border-radius: ${Layout.infoScriptNormalize(14)}px;
  padding: ${Layout.infoScriptNormalize(32)}px ${Layout.infoScriptNormalize(24)}px;
  text-align: center;
  background: ${Colors.infoScriptBackgroundOffWhite};
`;

export const EmptyTitle = styled.h2`
  margin: 0 0 ${Layout.infoScriptNormalize(8)}px;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(20)}px;
  color: ${Colors.infoScriptTextPrimary};
`;

export const EmptyText = styled.p`
  margin: 0;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const GithubLinkStyled = styled.a`
  border-radius: 999px;
  padding: ${Layout.infoScriptNormalize(6)}px ${Layout.infoScriptNormalize(12)}px;
  border: 1px solid ${Colors.infoScriptBorderLight};
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  text-decoration: none;
  color: ${Colors.infoScriptTextPrimary};
  display: inline-flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(6)}px;
  max-width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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
  display: inline-flex;
  align-items: center;

  &:hover {
    background: ${Colors.infoScriptBackgroundLight};
  }
`;

export const PdfBadgeText = styled.span`
  color: ${Colors.infoScriptTextPrimary};
  font-weight: 500;
`;
