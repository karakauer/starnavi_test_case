import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../context";
// Local
import { HoverSquaresList, SquareContainer } from "./";

const View: React.FC = () => {
  const { count, setData } = useContext(Context);

  useEffect(() => {
    const preparedArray = Array.from(
      { length: Math.pow(count, 2) },
      (_, idx) => ({
        idx,
        row: 0,
        column: 0,
        isHovered: false,
      })
    );
    let inc = 0;
    for (let i = 1; i <= count; i++) {
      for (let j = 1; j <= count; j++) {
        preparedArray[inc].column = j;
        preparedArray[inc].row = i;
        inc = inc + 1;
      }
    }

    setData(preparedArray);
  }, [count, setData]);

  return (
    <Container>
      <SquareContainer />
      <HoverSquaresList />
    </Container>
  );
};

export default View;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
