import styled, { css } from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

interface ButtonWrapperProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

/* ===========================
   FUNÇÃO PARA TAMANHO DO BUTTON
   =========================== */
const getButtonSize = (size?: string) => {
  switch (size) {
    case "small":
      return css`
        padding: ${Layout.infoScriptNormalize(8)}px ${Layout.infoScriptNormalize(16)}px;
        font-size: ${Layout.infoScriptNormalize(13)}px;
      `;
    case "medium":
      return css`
        padding: ${Layout.infoScriptNormalize(12)}px ${Layout.infoScriptNormalize(20)}px;
        font-size: ${Layout.infoScriptNormalize(14)}px;
      `;
    case "large":
    default:
      return css`
        padding: ${Layout.infoScriptNormalize(16)}px ${Layout.infoScriptNormalize(24)}px;
        font-size: ${Layout.infoScriptNormalize(16)}px;
      `;
  }
};

/* ===========================
   FUNÇÃO PARA VARIANT DO BUTTON
   =========================== */
const getButtonVariant = (variant?: string) => {
  switch (variant) {
    case "secondary":
      return css`
        background: ${Colors.infoScriptCommonWhite};
        color: ${Colors.infoScriptPrimary};
        border: ${Layout.infoScriptNormalize(2)}px solid ${Colors.infoScriptPrimary};

        &:hover {
          background: ${Colors.infoScriptPrimarySoft};
        }
      `;
    case "primary":
    default:
      return css`
        background: ${Colors.infoScriptPrimary};
        color: ${Colors.infoScriptCommonWhite};

        &:hover {
          opacity: 0.9;
        }
      `;
  }
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  border: none;
  cursor: pointer;
  border-radius: ${Layout.infoScriptNormalize(50)}px;
  font-family: ${Typography.infoScriptFontFamilyBold};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, transform 0.1s ease-in-out;

  /* FULL WIDTH */
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  /* SIZE (USANDO SWITCH) */
  ${({ size }) => getButtonSize(size)}

  /* VARIANTE (USANDO SWITCH) */
  ${({ variant }) => getButtonVariant(variant)}

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: ${Colors.infoScriptDisabled};
    color: ${Colors.infoScriptCommonWhite};
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
  }
`;
