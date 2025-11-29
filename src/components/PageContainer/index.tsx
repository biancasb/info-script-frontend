import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

export type PageContainerProps = PropsWithChildren<{
  className?: string;
}>;

const PageContainer: React.FC<PageContainerProps> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default PageContainer;
