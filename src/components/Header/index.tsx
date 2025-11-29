import React from "react";
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
} from "./styles";

interface HeaderProps {
  currentUser?: {
    name: string;
    initial: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/feed");
  };

  const defaultUser = {
    name: "Bianca Siega",
    initial: "B",
  };

  const user = currentUser || defaultUser;

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
            <SearchInput placeholder="Buscar" />
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
