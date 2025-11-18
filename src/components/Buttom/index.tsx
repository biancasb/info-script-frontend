import React from "react";
import { ButtonWrapper } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "large",
  disabled = false,
  fullWidth = true,
  type = "button",
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      type={type}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
