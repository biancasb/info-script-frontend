import React from "react";
import { useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiClose, mdiHome, mdiAccount, mdiLogout, mdiBookmarkOutline } from "@mdi/js";

import {
  DrawerOverlay as WrapperDrawerOverlay,
  DrawerContainer as WrapperDrawerContainer,
  DrawerHeader as WrapperDrawerHeader,
  DrawerCloseButton,
  DrawerMenu as WrapperDrawerMenu,
  DrawerMenuItem,
  DrawerMenuIcon,
  DrawerMenuLabel,
} from "./styles";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onLogout,
}) => {
  const location = useLocation();

  const isFeed = location.pathname === "/feed";
  const isProfile = location.pathname === "/profile" || location.pathname.startsWith("/profile/");
  const isWishlist = location.pathname === "/wishlist";

  const handleFeedClick = () => {
    onNavigate("/feed");
  };

  const handleProfileClick = () => {
    onNavigate("/profile");
  };

  const handleWishlistClick = () => {
    onNavigate("/wishlist");
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  const renderHeaderMenu = () => (
    <WrapperDrawerHeader>
      <DrawerCloseButton onClick={onClose}>
        <Icon path={mdiClose} size={1} />
      </DrawerCloseButton>
    </WrapperDrawerHeader>
  );

  const renderMenuItems = () => (
    <>
      {!isFeed && (
        <DrawerMenuItem onClick={handleFeedClick}>
          <DrawerMenuIcon>
            <Icon path={mdiHome} size={0.9} />
          </DrawerMenuIcon>
          <DrawerMenuLabel>Feed</DrawerMenuLabel>
        </DrawerMenuItem>
      )}

      {!isProfile && (
        <DrawerMenuItem onClick={handleProfileClick}>
          <DrawerMenuIcon>
            <Icon path={mdiAccount} size={0.9} />
          </DrawerMenuIcon>
          <DrawerMenuLabel>Perfil</DrawerMenuLabel>
        </DrawerMenuItem>
      )}

      {!isWishlist && (
        <DrawerMenuItem onClick={handleWishlistClick}>
          <DrawerMenuIcon>
            <Icon path={mdiBookmarkOutline} size={0.9} />
          </DrawerMenuIcon>
          <DrawerMenuLabel>Salvos</DrawerMenuLabel>
        </DrawerMenuItem>
      )}

      <DrawerMenuItem onClick={handleLogoutClick} isLogout>
        <DrawerMenuIcon>
          <Icon path={mdiLogout} size={0.9} />
        </DrawerMenuIcon>
        <DrawerMenuLabel>Logout</DrawerMenuLabel>
      </DrawerMenuItem>
    </>
  );

  const renderDrawerMenu = () => (
    <WrapperDrawerMenu>{renderMenuItems()}</WrapperDrawerMenu>
  );

  const renderDrawerContent = () => (
    <>
      {renderHeaderMenu()}
      {renderDrawerMenu()}
    </>
  );

  if (!isOpen) return null;

  return (
    <>
      <WrapperDrawerOverlay onClick={onClose} />
      <WrapperDrawerContainer>{renderDrawerContent()}</WrapperDrawerContainer>
    </>
  );
};

export default Drawer;
