import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const FooterWrapper = styled.footer`
  background: ${Colors.commonWhite};
  border-top: 1px solid #e6eef4;
  padding: ${Layout.normalize(20)}px 0;
  margin-top: ${Layout.normalize(24)}px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${Layout.normalize(24)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${Layout.normalize(8)}px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;


export const FooterLinks = styled.nav`
  display: flex;
  gap: ${Layout.normalize(12)}px;
  align-items: center;
  justify-content: flex-end;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${Colors.infoScriptPrimary};
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(13)}px;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  vertical-align: middle;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterIcon = styled.span`
  display: inline-flex;
  width: ${Layout.normalize(20)}px;
  height: ${Layout.normalize(20)}px;
  margin-right: ${Layout.normalize(8)}px;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const FooterText = styled.span`
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(13)}px;
  color: ${Colors.infoScriptTextSecondary};
  text-align: left;
  margin-bottom: 0;
`;
