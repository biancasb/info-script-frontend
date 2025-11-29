import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const Loading = styled.div`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
`;

export const ErrorBox = styled.div`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
  color: #b91c1c;
  background: #fee2e2;
  border: 1px solid #fecaca;
  padding: ${Layout.normalize(8)}px ${Layout.normalize(12)}px;
  border-radius: ${Layout.normalize(8)}px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${Layout.normalize(12)}px;
`;

export const Item = styled.li`
  display: block;
`;

export const ItemLink = styled.a`
  text-decoration: none;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(14)}px;
  line-height: 1.35;
  color: ${Colors.infoScriptPrimary};

  &:hover {
    text-decoration: underline;
  }
`;

export const ItemMeta = styled.span`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(12)}px;
  color: ${Colors.infoScriptTextSecondary};
`;

export const Thumb = styled.img`
  width: 100%;
  height: ${Layout.normalize(120)}px;
  border-radius: ${Layout.normalize(8)}px;
  object-fit: cover;
  background: #f3f4f6;
  margin-bottom: ${Layout.normalize(8)}px;
`;
