import React, { useContext, useMemo } from "react";
import styled from "styled-components";
// Local
import { Context } from "../context";
import { Data } from "../types";
import { HoverSquare } from "./HoverSquare";

export const HoverSquaresList: React.FC = () => {
  const { data } = useContext(Context);

  const filteredList: Data[] = useMemo(
    () => data.filter((item) => item.isHovered),
    [data]
  );

  return (
    <Container>
      {filteredList.map((item) => {
        // An index is used as a key used because the order of items will not change.
        // https://reactjs.org/docs/lists-and-keys.html#:~:text=We%20don%E2%80%99t%20recommend,indexes%20as%20keys.
        return <HoverSquare key={item.idx} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10px;
  margin-left: 24px;
  height: 80vh;
  overflow-y: auto;
  width: 200px;
`;
