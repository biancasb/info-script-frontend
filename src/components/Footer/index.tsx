import React from "react";
import { FooterWrapper, FooterContent, FooterLinks, FooterLink, FooterText, FooterIcon } from "./styles";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  const renderCopyright = () => (
    <FooterText>© {new Date().getFullYear()} InfoScript — Todos os direitos reservados</FooterText>
  );

  const renderLinks = () => (
    <FooterLinks>
      <FooterLink href="/about">
        <FooterIcon>
          <InfoOutlinedIcon fontSize="small" />
        </FooterIcon>
        Sobre
      </FooterLink>

      <FooterLink href="https://ufcspa.edu.br/" target="_blank" rel="noopener noreferrer" aria-label="UFCSPA">
        <FooterIcon>
          <LanguageIcon fontSize="small" />
        </FooterIcon>
        UFCSPA
      </FooterLink>

      <FooterLink href="https://www.instagram.com/ufcspaoficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram UFCSPA">
        <FooterIcon>
          <InstagramIcon fontSize="small" />
        </FooterIcon>
        Instagram
      </FooterLink>
    </FooterLinks>
  );

  const renderContent = () => (
    <FooterContent>
      {renderCopyright()}
      {renderLinks()}
    </FooterContent>
  );

  return <FooterWrapper>{renderContent()}</FooterWrapper>;
};

export default Footer;
