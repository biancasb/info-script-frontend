import styled from "styled-components";
import { Colors, Layout, Typography } from "@/constants";

export const RegisterWrapper = styled.div`
  min-height: 100vh;
  display: block;
  width: 100%;
  background: transparent;
`;

export const Backdrop = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(135deg, #5FA5CE 0%, #305a93 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Layout.normalize(20)}px;
`;

export const RegisterCard = styled.div`
  background: ${Colors.commonWhite};
  border-radius: ${Layout.normalize(24)}px;
  padding: ${Layout.normalize(48)}px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 520px;
  width: 100%;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${Layout.normalize(32)}px;
`;

export const LogoImage = styled.img`
  width: ${Layout.normalize(120)}px;
  height: auto;
  margin-bottom: ${Layout.normalize(16)}px;
`;

export const AppTitle = styled.h1`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(32)}px;
  color: ${Colors.infoScriptPrimary};
  margin: 0;
`;

export const FormSection = styled.div``;

export const FormTitle = styled.h2`
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(24)}px;
  color: ${Colors.infoScriptTextPrimary};
  margin: 0 0 ${Layout.normalize(24)}px 0;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: ${Layout.normalize(20)}px;
`;

export const Label = styled.label`
  display: block;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};
  margin-bottom: ${Layout.normalize(8)}px;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${Layout.normalize(12)}px ${Layout.normalize(16)}px;
  border: 2px solid #e5e7eb;
  border-radius: ${Layout.normalize(12)}px;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
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

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${Layout.normalize(14)}px;
  background: ${Colors.infoScriptPrimary};
  color: ${Colors.commonWhite};
  border: none;
  border-radius: ${Layout.normalize(12)}px;
  font-family: ${Typography.fontFamilyBold};
  font-size: ${Layout.normalize(16)}px;
  cursor: pointer;
  margin-top: ${Layout.normalize(8)}px;
  transition: background 0.2s;

  &:hover {
    background: #305a93;
  }
`;

export const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #dc2626;
  padding: ${Layout.normalize(12)}px;
  border-radius: ${Layout.normalize(8)}px;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
  margin-top: ${Layout.normalize(8)}px;
  margin-bottom: ${Layout.normalize(16)}px;
`;

export const HelperText = styled.div`
  margin-top: ${Layout.normalize(16)}px;
  text-align: center;
  font-family: ${Typography.fontFamilyRegular};
  font-size: ${Layout.normalize(14)}px;
  color: ${Colors.infoScriptTextPrimary};

  a {
    color: ${Colors.infoScriptPrimary};
    font-family: ${Typography.fontFamilyBold};
    text-decoration: none;
    margin-left: ${Layout.normalize(4)}px;
    cursor: pointer;
  }
`;
