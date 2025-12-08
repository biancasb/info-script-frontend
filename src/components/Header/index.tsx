import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify, mdiMenu } from "@mdi/js";

import AppAvatar from "../Avatar";
import Drawer from "../Drawer";

import {
  TopBar as WrapperTopBar,
  TopBarContent as WrapperTopBarContent,
  HeaderLeft as WrapperHeaderLeft,
  HeaderCenter as WrapperHeaderCenter,
  HeaderRight as WrapperHeaderRight,
  LogoWrapper,
  LogoImage,
  UserInfo,
  UserName,
  SearchBar,
  SearchIcon,
  SearchInput,
  SearchHistoryContainer,
  SearchHistoryItem,
  MenuButton,
  AvatarButton,
} from "./styles";

import LogoInfo from "../../assets/images/icone-InfoScript.png";

interface HeaderProps {
  currentUser?: {
    name: string;
    initial: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("Usuário");

  useEffect(() => {
    const saved = localStorage.getItem("searchHistory");
    if (saved) {
      setSearchHistory(JSON.parse(saved));
    }

    if (currentUser?.name) {
      setUserName(currentUser.name);
    } else {
      const storedUser = localStorage.getItem("userName");
      if (storedUser) {
        setUserName(storedUser);
      }
    }
  }, [currentUser]);

  const handleLogoClick = () => {
    navigate("/feed");
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      performSearch(searchTerm.trim());
    }
  };

  const performSearch = (term: string) => {
    const updated = [term, ...searchHistory.filter(h => h !== term)].slice(0, 3);
    setSearchHistory(updated);
    localStorage.setItem("searchHistory", JSON.stringify(updated));
    navigate(`/search?search=${encodeURIComponent(term)}`);
    setSearchTerm("");
    setShowHistory(false);
  };

  const handleHistoryClick = (term: string) => {
    performSearch(term);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/login");
    setMenuOpen(false);
  };

  const renderHeaderLeft = () => (
    <WrapperHeaderLeft>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <Icon path={mdiMenu} size={1.2} />
      </MenuButton>
      <LogoWrapper onClick={handleLogoClick}>
        <LogoImage src={LogoInfo} alt="InfoScript Logo" />
      </LogoWrapper>
      <UserInfo>
        <UserName>{userName}</UserName>
      </UserInfo>
    </WrapperHeaderLeft>
  );

  const renderSearchHistory = () => (
    showHistory && searchHistory.length > 0 && (
      <SearchHistoryContainer>
        {searchHistory.map((term, index) => (
          <SearchHistoryItem
            key={index}
            onClick={() => handleHistoryClick(term)}
          >
            <Icon path={mdiMagnify} size={0.7} />
            <span>{term}</span>
          </SearchHistoryItem>
        ))}
      </SearchHistoryContainer>
    )
  );

  const renderSearchBar = () => (
    <SearchBar>
      <SearchIcon>
        <Icon path={mdiMagnify} size={0.75} />
      </SearchIcon>
      <SearchInput
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearchKeyPress}
        onFocus={() => setShowHistory(true)}
        onBlur={() => setTimeout(() => setShowHistory(false), 150)}
      />
      {renderSearchHistory()}
    </SearchBar>
  );

  const renderHeaderCenter = () => (
    <WrapperHeaderCenter>{renderSearchBar()}</WrapperHeaderCenter>
  );

  const renderHeaderRight = () => (
    <WrapperHeaderRight>
      <AvatarButton onClick={() => handleNavigate("/profile")}>
        <AppAvatar name={userName} size={44} />
      </AvatarButton>
    </WrapperHeaderRight>
  );

  const renderTopBarContent = () => (
    <WrapperTopBarContent>
      {renderHeaderLeft()}
      {renderHeaderCenter()}
      {renderHeaderRight()}
    </WrapperTopBarContent>
  );

  const renderDrawer = () => (
    <Drawer
      isOpen={menuOpen}
      onClose={() => setMenuOpen(false)}
      onNavigate={handleNavigate}
      onLogout={handleLogout}
    />
  );

  return (
    <>
      <WrapperTopBar>{renderTopBarContent()}</WrapperTopBar>
      {renderDrawer()}
    </>
  );
};

export default Header;
