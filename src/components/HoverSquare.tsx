import React, { memo } from "react";
import styled from "styled-components";
// Local
import { Data } from "../types";

interface Props extends Data {}

export const HoverSquare: React.FC<Props> = memo((props: Props) => {
  const { row, column } = props;
  return (
    <Container>
      Row: {row} Column: {column}
    </Container>
  );
});

const Container = styled.div`
  padding: 10px 10px;
  margin: 10px 0px;
  width: 140px;
  border-radius: 5px;
  background-color: #f7d16a;
  border: 2px solid #866735;
`;
