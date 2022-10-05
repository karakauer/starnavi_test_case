import { createContext } from "react";
// Local
import { Data, Mode } from "./types";

const defaultValue = {
  count: 0,
  data: [] as Data[],
  modes: [] as Mode[],
  selectedMode: {} as Mode | null,
  setData: (val: Data[]): void => {},
  setModes: (val: Mode[]): void => {},
  setSelectedMode: (val: Mode): void => {},
  toggleSquare: (val: number): void => {},
};

export const Context = createContext(defaultValue);
