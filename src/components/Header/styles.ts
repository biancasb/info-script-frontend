import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const TopBar = styled.header`
  width: 100%;
  padding: ${Layout.infoScriptNormalize(8)}px 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
`;

export const TopBarContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: ${Colors.infoScriptPrimary};
  border-radius: ${Layout.infoScriptNormalize(24)}px;
  padding: 0 ${Layout.infoScriptNormalize(24)}px;
  height: ${Layout.infoScriptNormalize(75)}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.2);
  gap: ${Layout.infoScriptNormalize(16)}px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(12)}px;
  min-width: fit-content;
`;

export const HeaderCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 200px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(16)}px;
  min-width: fit-content;
`;

export const LogoWrapper = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(16)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.infoScriptNormalize(60)}px;
  height: ${Layout.infoScriptNormalize(60)}px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const LogoImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: contain;
  display: block;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.span`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptCommonWhite};
  white-space: nowrap;
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 420px;
  height: ${Layout.infoScriptNormalize(44)}px;
  background: ${Colors.infoScriptCommonWhite};
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 0 ${Layout.infoScriptNormalize(16)}px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  position: relative;
`;

export const SearchIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.infoScriptNormalize(18)}px;
  height: ${Layout.infoScriptNormalize(18)}px;
  color: ${Colors.infoScriptTextInverse};
  margin-right: ${Layout.infoScriptNormalize(10)}px;
  
  img, svg {
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

export const SearchHistoryContainer = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  border: 1px solid ${Colors.infoScriptBorderLight};
`;

export const SearchHistoryItem = styled.div`
  padding: ${Layout.infoScriptNormalize(14)}px ${Layout.infoScriptNormalize(20)}px;
  cursor: pointer;
  font-size: ${Layout.infoScriptNormalize(14)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  color: ${Colors.infoScriptTextPrimary};
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: ${Layout.infoScriptNormalize(12)}px;

  svg {
    color: ${Colors.infoScriptIconGray};
    flex-shrink: 0;
  }

  span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: ${Colors.infoScriptBackgroundLight};
    
    svg {
      color: ${Colors.infoScriptPrimary};
    }
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${Colors.infoScriptCommonWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Layout.infoScriptNormalize(8)}px;
  transition: background 0.2s;
  border-radius: ${Layout.infoScriptNormalize(8)}px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    display: block;
  }
`;

export const AvatarButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${Layout.infoScriptNormalize(48)}px;
  height: ${Layout.infoScriptNormalize(48)}px;
  border-radius: 999px;
  transition: background 0.2s;
  padding: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;


