import React, { memo } from "react";
import styled from "styled-components";
// Local

type Props = {
  isHovered: boolean;
};

export const Square: React.FC<Props> = memo(({ isHovered }: Props) => {
  return isHovered ? <HoveredSquare isHovered /> : <BasicSquare isHovered />;
});

const BasicSquare = styled.div<Props>`
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  border: 1px solid black;
  transition: 0.5s;

  &:hover {
    background-color: ${(p) => (p.isHovered ? "#00a6ff" : "#ffffff")};
  }
`;

const HoveredSquare = styled(BasicSquare)<Props>`
  background-color: #00a6ff;
  border: 1px solid black;

  &:hover {
    background-color: ${(p) => (p.isHovered ? "#ffffff" : "#00a6ff")};
  }
`;
