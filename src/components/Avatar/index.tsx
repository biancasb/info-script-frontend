
import React from "react";
import Colors from "@/constants/Colors";
export interface AppAvatarProps {
  name: string;
  size: number | string;
  square?: boolean;
  variant?: string;
}

const AppAvatar: React.FC<AppAvatarProps> = ({ name, size, square = false }) => {
  const numericSize = typeof size === 'string' ? parseInt(size, 10) || 40 : size;
  const initial = (name?.trim()?.charAt(0) || '?').toUpperCase();

  const dimension = `${numericSize}px`;
  const fontSize = `${Math.max(Math.round(numericSize * 0.45), 12)}px`;

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        borderRadius: square ? '12%' : '50%',
        backgroundColor: Colors.infoScriptPrimarySoft,
        color: Colors.infoScriptPrimaryDark,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize,
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      {initial}
    </div>
  );
};

export default AppAvatar;
