import React from "react";
import BoringAvatar from "boring-avatars";

export interface AppAvatarProps {
  name: string;
  size: number;
  square?: boolean;
  variant?: "beam" | "marble" | "pixel" | "sunset" | "ring" | "bauhaus";
}

const AppAvatar: React.FC<AppAvatarProps> = ({ name, size, square = false, variant = "beam" }) => {
  return (
    <BoringAvatar
      name={name}
      size={size}
      square={square}
      variant={variant}
      colors={["#5FA5CE", "#89C2E0", "#D2ECFF", "#305A93", "#F4F9FF"]}
    />
  );
};

export default AppAvatar;
