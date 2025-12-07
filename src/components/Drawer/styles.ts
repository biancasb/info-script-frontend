import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 200;
  animation: fadeIn 0.2s ease-in-out;
  backdrop-filter: blur(2px);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DrawerContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 264px;
  height: 100vh;
  background: ${Colors.infoScriptCommonWhite};
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.1);
  z-index: 300;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const DrawerHeader = styled.div`
  padding: ${Layout.infoScriptNormalize(16)}px;
  border-bottom: 1px solid ${Colors.infoScriptBorderLight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${Layout.infoScriptNormalize(75)}px;
  flex-shrink: 0;
`;

export const DrawerCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.infoScriptTextPrimary};
  padding: ${Layout.infoScriptNormalize(8)}px;
  transition: all 0.2s;
  border-radius: ${Layout.infoScriptNormalize(8)}px;

  &:hover {
    background: ${Colors.infoScriptBackgroundDrawer};
    color: ${Colors.infoScriptPrimary};
  }

  svg {
    display: block;
  }
`;

export const DrawerMenu = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${Layout.infoScriptNormalize(8)}px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.infoScriptBorderMedium};
    border-radius: 3px;

    &:hover {
      background: ${Colors.infoScriptIconMedium};
    }
  }
`;

interface DrawerMenuItemProps {
  isLogout?: boolean;
}

export const DrawerMenuItem = styled.button<DrawerMenuItemProps>`
  width: 100%;
  padding: ${Layout.infoScriptNormalize(12)}px ${Layout.infoScriptNormalize(16)}px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(12)}px;
  cursor: pointer;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${(props) => (props.isLogout ? Colors.infoScriptErrorHover : Colors.infoScriptTextPrimary)};
  transition: all 0.2s;

  &:hover {
    background: ${(props) =>
      props.isLogout ? Colors.infoScriptErrorBackground : Colors.infoScriptPrimarySoft};
    color: ${(props) => (props.isLogout ? Colors.infoScriptErrorText : Colors.infoScriptPrimary)};
  }

  &:active {
    background: ${(props) =>
      props.isLogout ? Colors.infoScriptErrorBackground : Colors.infoScriptPrimarySoft};
  }
`;

export const DrawerMenuIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.infoScriptNormalize(20)}px;
  height: ${Layout.infoScriptNormalize(20)}px;
  flex-shrink: 0;

  svg {
    display: block;
  }
`;

export const DrawerMenuLabel = styled.span`
  flex: 1;
  text-align: left;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
`;
