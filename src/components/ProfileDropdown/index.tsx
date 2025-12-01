import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ProfileButton,
  ProfileAvatar,
  ProfileInfo,
  ProfileName,
  ArrowIcon,
  DropdownMenu,
  DropdownItem,
} from "./styles";
import AppAvatar from "../Avatar";

interface ProfileDropdownProps {
  userName: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleProfile = () => {
    setIsOpen(false);
    navigate("/profile");
  };

  const handleFeed = () => {
    setIsOpen(false);
    navigate("/feed");
  };

  const handleLogout = () => {
    setIsOpen(false);
    navigate("/login");
  };
  const renderToggleButton = () => (
    <ProfileButton onClick={handleToggle}>
      <ProfileAvatar>
        <AppAvatar name={userName} size={44} />
      </ProfileAvatar>
      <ProfileInfo>
        <ProfileName>{userName}</ProfileName>
      </ProfileInfo>
      <ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
    </ProfileButton>
  );

  const renderMenu = () => (
    <DropdownMenu>
      {location.pathname !== "/feed" && (
        <DropdownItem onClick={handleFeed}>Feed</DropdownItem>
      )}
      {location.pathname !== "/profile" && (
        <DropdownItem onClick={handleProfile}>Perfil</DropdownItem>
      )}
      <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
    </DropdownMenu>
  );

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      {renderToggleButton()}
      {isOpen && renderMenu()}
    </div>
  );
};

export default ProfileDropdown;
