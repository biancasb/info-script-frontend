import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const TopBar = styled.header`
  width: 100%;
  padding: ${Layout.normalize(8)}px 0;
  display: flex;
  justify-content: center;
`;

export const TopBarContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: #5FA5CE;
  border-radius: ${Layout.normalize(24)}px;
  padding: 0 ${Layout.normalize(24)}px 0 0;
  height: ${Layout.normalize(75)}px;
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

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: 0;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const LogoImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;
  display: block;
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
  position: relative;

  &::placeholder {
    color: ${Colors.infoScriptTextInverse};
  }
`;

export const SearchHistoryContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${Colors.commonWhite};
  border-radius: 0 0 999px 999px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  z-index: 10;
  max-width: 520px;
  overflow: hidden;
`;

export const SearchHistoryItem = styled.div`
  padding: ${Layout.normalize(12)}px ${Layout.normalize(16)}px;
  cursor: pointer;
  font-size: ${Layout.normalize(14)}px;
  color: ${Colors.infoScriptTextSecondary};
  transition: background 0.2s;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${Colors.infoScriptPrimarySoft};
    color: ${Colors.infoScriptPrimary};
  }
`;

