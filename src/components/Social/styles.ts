import styled from "styled-components";

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  color: #1f2937;

  &:hover {
    color: #111827;
  }
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
