import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const Loading = styled.div`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
`;

export const ErrorBox = styled.div`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptErrorText};
  background: ${Colors.infoScriptErrorBackground};
  border: 1px solid ${Colors.infoScriptErrorBorder};
  padding: ${Layout.infoScriptNormalize(8)}px ${Layout.infoScriptNormalize(12)}px;
  border-radius: ${Layout.infoScriptNormalize(8)}px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${Layout.infoScriptNormalize(12)}px;
`;

export const Item = styled.li`
  display: block;
  display: flex;
  flex-direction: column;
  gap: ${Layout.infoScriptNormalize(12)}px;
`;

export const ItemLink = styled.a`
  text-decoration: none;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  line-height: 1.35;
  color: ${Colors.infoScriptPrimary};

  overflow-wrap: anywhere;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`;

export const ItemMeta = styled.span`
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  object-fit: cover;
  background: ${Colors.infoScriptBackgroundSecondary};
  margin: 0;
  display: block;

  @media (min-width: 900px) {
    width: 100%;
    max-height: ${Layout.infoScriptNormalize(260)}px;
    object-position: center;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Layout.infoScriptNormalize(8)}px;
  flex: 1;
  min-width: 0;
  width: 100%;
`;

export const ItemExcerpt = styled.p`
  margin: ${Layout.infoScriptNormalize(6)}px 0 0;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(13)}px;
  color: ${Colors.infoScriptTextPrimary};
`;
