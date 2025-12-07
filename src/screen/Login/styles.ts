import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(135deg, ${Colors.infoScriptPrimarySoft} 0%, ${Colors.infoScriptPrimaryDark} 100%);
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Layout.infoScriptNormalize(20)}px;
`;

export const LoginCard = styled.div`
  background: ${Colors.infoScriptCommonWhite};
  border-radius: ${Layout.infoScriptNormalize(20)}px;
  padding: ${Layout.infoScriptNormalize(36)}px ${Layout.infoScriptNormalize(36)}px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
  max-width: 460px;
  width: 100%;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${Layout.infoScriptNormalize(32)}px;
`;

export const LogoImage = styled.img`
  width: ${Layout.infoScriptNormalize(100)}px;
  height: auto;
  margin-bottom: ${Layout.infoScriptNormalize(16)}px;
`;

export const AppTitle = styled.h1`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(32)}px;
  color: ${Colors.infoScriptPrimary};
  margin: 0;
`;

export const FormSection = styled.div``;

export const FormTitle = styled.h2`
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(24)}px;
  color: ${Colors.infoScriptTextPrimary};
  margin: 0 0 ${Layout.infoScriptNormalize(24)}px 0;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: ${Layout.infoScriptNormalize(20)}px;
`;

export const Label = styled.label`
  display: block;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
  margin-bottom: ${Layout.infoScriptNormalize(8)}px;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${Layout.infoScriptNormalize(12)}px ${Layout.infoScriptNormalize(16)}px;
  border: 2px solid ${Colors.infoScriptBorderLight};
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${Colors.infoScriptPrimary};
  }

  &::placeholder {
    color: ${Colors.infoScriptTextInverse};
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: ${Layout.infoScriptNormalize(14)}px;
  background: ${Colors.infoScriptPrimary};
  color: ${Colors.infoScriptCommonWhite};
  border: none;
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(16)}px;
  cursor: pointer;
  margin-top: ${Layout.infoScriptNormalize(8)}px;
  transition: background 0.2s;

  &:hover {
    background: ${Colors.infoScriptPrimaryDark};
  }
`;

export const ErrorMessage = styled.div`
  background: ${Colors.infoScriptErrorBackground};
  color: ${Colors.infoScriptErrorText};
  padding: ${Layout.infoScriptNormalize(12)}px;
  border-radius: ${Layout.infoScriptNormalize(8)}px;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  margin-top: ${Layout.infoScriptNormalize(8)}px;
  margin-bottom: ${Layout.infoScriptNormalize(16)}px;
`;

export const GoogleButton = styled.button`
  width: 100%;
  padding: ${Layout.infoScriptNormalize(12)}px ${Layout.infoScriptNormalize(16)}px;
  background: ${Colors.infoScriptCommonWhite};
  color: ${Colors.infoScriptTextPrimary};
  border: 2px solid ${Colors.infoScriptBorderLight};
  border-radius: ${Layout.infoScriptNormalize(12)}px;
  font-family: ${Typography.infoScriptFontFamilyBold};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${Layout.infoScriptNormalize(8)}px;
  margin-bottom: ${Layout.infoScriptNormalize(16)}px;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: ${Colors.infoScriptBackgroundSecondary};
    border-color: ${Colors.infoScriptBorderMedium};
  }

  img {
    width: ${Layout.infoScriptNormalize(18)}px;
    height: ${Layout.infoScriptNormalize(18)}px;
    display: block;
  }
`;

export const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${Colors.infoScriptTextInverse};
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(12)}px;
  margin: ${Layout.infoScriptNormalize(8)}px 0 ${Layout.infoScriptNormalize(16)}px 0;

  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${Colors.infoScriptBorderLight};
  }

  span {
    padding: 0 ${Layout.infoScriptNormalize(8)}px;
  }
`;

export const HelperText = styled.div`
  margin-top: ${Layout.infoScriptNormalize(16)}px;
  text-align: center;
  font-family: ${Typography.infoScriptFontFamilyRegular};
  font-size: ${Layout.infoScriptNormalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};

  a {
    color: ${Colors.infoScriptPrimary};
    font-family: ${Typography.infoScriptFontFamilyBold};
    text-decoration: none;
    margin-left: ${Layout.infoScriptNormalize(4)}px;
    cursor: pointer;
  }
`;
