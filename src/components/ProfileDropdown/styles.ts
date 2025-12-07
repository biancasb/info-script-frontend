import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const ProfileButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${Colors.infoScriptCommonWhite};
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ProfileAvatar = styled.div`
  width: ${Layout.infoScriptNormalize(44)}px;
  height: ${Layout.infoScriptNormalize(44)}px;
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

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.span`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(14)}px;
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  font-size: ${Layout.infoScriptNormalize(10)}px;
  margin-left: 4px;
  transition: transform 0.2s;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: ${Colors.infoScriptCommonWhite};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 160px;
  overflow: hidden;
  z-index: 1000;
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
  transition: background 0.2s;

  &:hover {
    background: ${Colors.infoScriptPrimarySoft};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${Colors.infoScriptBorderLight};
  }
`;
