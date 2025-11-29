import styled from "styled-components";
import { Layout } from "@/constants";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: ${Layout.normalize(24)}px auto 0;
  padding: 0 ${Layout.normalize(24)}px;
`;
