import React from "react";
import { LinkWrapper, IconImage } from "./styles";
import GithubLogo from "../../assets/images/github-mark.png";

interface Props {
  url: string;
}

const GithubLink: React.FC<Props> = ({ url }) => {
  return (
    <LinkWrapper href={url} target="_blank" rel="noopener noreferrer">
      <IconImage src={GithubLogo} alt="GitHub" />
      {url.replace("https://", "")}
    </LinkWrapper>
  );
};

export default GithubLink;
