import React, { memo } from "react";
import styled from "styled-components";
// Local
import { Mode } from "../types";

interface Props {
  options: Mode[];
  selectedOption: Mode | null;
  handleChange: (val: Mode | null) => void;
}

export const ModeSelect: React.FC<Props> = memo(
  ({ selectedOption, handleChange, options }: Props) => {
    return (
      <Select
        value={selectedOption?.field}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          handleChange(
            options.find((item) => item.field === Number(e.target.value)) ??
              null
          );
        }}
      >
        {options.map((item) => (
          <Option key={item.name} value={item.field} label={item.name} />
        ))}
      </Select>
    );
  }
);

const Select = styled.select`
  width: 200px;
  height: 48px;
  padding: 0px;
  margin: 0px;
  border-radius: 5px;
  font-size: 18px;
`;

const Option = styled.option`
  font-size: 18px;
`;
