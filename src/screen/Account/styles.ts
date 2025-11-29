import styled from "styled-components";

export const AuthCard = styled.div`
  background: #ffffff;
  width: 420px;
  max-width: 90vw;
  padding-top: 20px;
  padding-bottom: 28px;
  padding-left: 48px;
  padding-right: 48px;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6px;
`;

export const LogoImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  display: block;
  margin-bottom: 4px;
`;

export const AuthForm = styled.form`
  width: 100%;
`;

export const AuthField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

export const AuthLabel = styled.label`
  font-size: 14px;
  color: #1787c8;
`;

export const AuthInput = styled.input`
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  padding: 10px 16px;
  font-size: 14px;
  outline: none;
  background: #f4f4f4;
  transition: border-color 0.15s ease, background-color 0.15s ease,
    box-shadow 0.15s ease;

  &:focus {
    border-color: #1787c8;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(23, 135, 200, 0.1);
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  margin-top: 8px;
  border-radius: 999px;
  border: 1px solid #1787c8;
  background: #5FA5CE;
  color: #ffffff;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease,
    transform 0.05s ease;

  &:hover {
    background: #5FA5CE;
    box-shadow: 0 12px 24px rgba(23, 135, 200, 0.32);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 16px;
  width: 100%;
  font-size: 13px;
  color: #9ca3af;
`;

export const DividerLine = styled.span`
  flex: 1;
  height: 1px;
  background-color: #e5e7eb;
`;

export const GoogleButton = styled.button`
  width: 100%;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  padding: 9px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease,
    transform 0.05s ease;

  &:hover {
    background: #f9fafb;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const GoogleIcon = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 999px;
  padding: 2px; /* ring thickness */
  display: flex;
  align-items: center;
  justify-content: center;


  img {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: block;
    background: #ffffff;
  }
`;

export const SwitchText = styled.div`
  margin-top: 24px;
  font-size: 13px;
  color: #6b7280;
  text-align: center;
`;

export const LinkText = styled.span`
  color: #5FA5CE;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
