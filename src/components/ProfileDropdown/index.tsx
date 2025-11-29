import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleLogout = () => {
    setIsOpen(false);
    // Limpar dados de autenticação se necessário
    navigate("/login");
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <ProfileButton onClick={handleToggle}>
        <ProfileAvatar>
          <AppAvatar name={userName} size={44} />
        </ProfileAvatar>
        <ProfileInfo>
          <ProfileName>{userName}</ProfileName>
        </ProfileInfo>
        <ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
      </ProfileButton>

      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={handleProfile}>Perfil</DropdownItem>
          <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
        </DropdownMenu>
      )}
    </div>
  );
};

export default ProfileDropdown;
