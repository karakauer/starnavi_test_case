import React, { useContext, useState } from "react";
import styled from "styled-components";
// Local
import { Context } from "../context";
import { Mode } from "../types";
import { ModeSelect } from "./";

export const Header: React.FC = () => {
  const { modes, setSelectedMode } = useContext(Context);

  const [selectedOption, setSelectedOption] = useState<Mode | null>(null);

  const _handleStart = () => {
    selectedOption && setSelectedMode(selectedOption);
  };

  return (
    <Container>
      <ModeSelect
        options={modes}
        selectedOption={selectedOption}
        handleChange={(val: Mode | null) => setSelectedOption(val)}
      />
      <Button onClick={_handleStart}>Start</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  background-color: #009dff;
  text-transform: uppercase;
  width: 100px;
  height: 48px;
  font-size: 24px;
  border: none;
  border-radius: 5px;

  margin-left: 10px;
`;
