
import React from "react";
import Avatar from "boring-avatars";
import Colors from "@/constants/Colors";

export interface AppAvatarProps {
  name: string;
  size: number | string;
  square?: boolean;
  variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus";
}

const AppAvatar: React.FC<AppAvatarProps> = ({ name, size, square = false, variant = "beam" }) => {
  const numericSize = typeof size === 'string' ? parseInt(size, 10) || 40 : size;

  const colors = [
    Colors.infoScriptPrimary,        // #5FA5CE
    Colors.infoScriptPrimarySoft,    // #e0f5fd
    Colors.infoScriptAccentBlue,     // #1787c
    Colors.infoScriptPrimaryDark,    // #305a93
    Colors.infoScriptAccentSecondary // #3d6689
  ];

  return (
    <div
      style={{
        width: `${numericSize}px`,
        height: `${numericSize}px`,
        borderRadius: square ? '12%' : '50%',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        size={numericSize}
        name={name || "User"}
        variant={variant}
        colors={colors}
        square={square}
      />
    </div>
  );
};

export default AppAvatar;
