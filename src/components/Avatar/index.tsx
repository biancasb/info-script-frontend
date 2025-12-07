import React from "react";

export interface AppAvatarProps {
  name: string;
  size: number;
  square?: boolean;
  variant?: string;
}

const AppAvatar: React.FC<AppAvatarProps> = ({ name, size, square = false }) => {
  // Gera um seed baseado no nome para consistência
  const seed = encodeURIComponent(name);
  const avatarUrl = `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${seed}`;

  return (
    <img
      src={avatarUrl}
      alt={name}
      width={size}
      height={size}
      style={{
        borderRadius: square ? "8px" : "50%",
        objectFit: "cover",
      }}
    />
  );
};

export default AppAvatar;
