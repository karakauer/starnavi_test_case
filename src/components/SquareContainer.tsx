import React, { memo, useContext } from "react";
import styled from "styled-components";
// Local
import { Context } from "../context";
import { Square } from "./Square";

interface PropsContainer {
  count: number;
}

export const SquareContainer: React.FC = () => {
  const { data, count, toggleSquare } = useContext(Context);
  return (
    <Container count={count}>
      {data.map((item) => (
        <div key={item.idx} onMouseLeave={() => toggleSquare(item.idx)}>
          <Square
            // An index is used as a key used because the order of items will not change.
            // https://reactjs.org/docs/lists-and-keys.html#:~:text=We%20don%E2%80%99t%20recommend,indexes%20as%20keys.
            isHovered={item.isHovered}
          />
        </div>
      ))}
    </Container>
  );
};

const Container = memo(styled.div<PropsContainer>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.count}, 32px);
  grid-template-rows: repeat(${(p) => p.count}, 32px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 20px;
`);
