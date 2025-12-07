import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "../ProfileDropdown";
import LogoInfo from "../../assets/images/icone-InfoScript.png";
import SearchIconImg from "../../assets/icons/search.svg";

import {
  TopBar,
  TopBarContent,
  TopBarLeft,
  TopBarRight,
  LogoWrapper,
  LogoImage,
  SearchBar,
  SearchIcon,
  SearchInput,
  SearchHistoryContainer,
  SearchHistoryItem,
} from "./styles";

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

  // Carrega histórico de pesquisas do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("searchHistory");
    if (saved) {
      setSearchHistory(JSON.parse(saved));
    }
  }, []);

  const handleLogoClick = () => {
    navigate("/feed");
  };

  // Realiza busca ao pressionar Enter
  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      performSearch(searchTerm.trim());
    }
  };

  // Realiza a busca e salva no histórico
  const performSearch = (term: string) => {
    // Adiciona ao histórico (máximo 3 pesquisas)
    const updated = [term, ...searchHistory.filter(h => h !== term)].slice(0, 3);
    setSearchHistory(updated);
    localStorage.setItem("searchHistory", JSON.stringify(updated));

    // Navega para página de resultados
    navigate(`/search?search=${encodeURIComponent(term)}`);
    setSearchTerm("");
    setShowHistory(false);
  };

  // Clica em uma pesquisa anterior
  const handleHistoryClick = (term: string) => {
    performSearch(term);
  };

  // Usar dados passados como prop, com fallback seguro
  const user = currentUser || {
    name: "Usuário",
    initial: "U",
  };

  return (
    <TopBar>
      <TopBarContent>
        <TopBarLeft>
          <LogoWrapper onClick={handleLogoClick}>
            <LogoImage src={LogoInfo} alt="InfoScript Logo" />
          </LogoWrapper>

          <SearchBar>
            <SearchIcon>
              <img
                src={SearchIconImg}
                alt="Buscar"
                style={{ width: 18, height: 18, display: "block" }}
              />
            </SearchIcon>
            <SearchInput
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearchKeyPress}
              onFocus={() => setShowHistory(true)}
              onBlur={() => setTimeout(() => setShowHistory(false), 150)}
            />
            {showHistory && searchHistory.length > 0 && (
              <SearchHistoryContainer>
                {searchHistory.map((term, index) => (
                  <SearchHistoryItem
                    key={index}
                    onClick={() => handleHistoryClick(term)}
                  >
                    🔍 {term}
                  </SearchHistoryItem>
                ))}
              </SearchHistoryContainer>
            )}
          </SearchBar>
        </TopBarLeft>

        <TopBarRight>
          <ProfileDropdown userName={user.name} />
        </TopBarRight>
      </TopBarContent>
    </TopBar>
  );
};

export default Header;
