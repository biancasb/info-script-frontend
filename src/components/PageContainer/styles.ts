import styled from "styled-components";
import { Layout } from "@/constants";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: ${Layout.infoScriptNormalize(24)}px auto 0;
  padding: 0 ${Layout.infoScriptNormalize(24)}px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: calc(100vh - 200px);
`;
