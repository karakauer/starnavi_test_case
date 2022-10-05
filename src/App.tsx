import React, { useEffect, useState, lazy, Suspense } from "react";
// Local
import { Header } from "./components";
import { Data, Mode } from "./types";
import { Context } from "./context";

const View = lazy(() => import("./components/View"));

function App() {
  const [modes, setModes] = useState<Mode[]>([]);
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  const [data, setData] = useState<Data[]>([]);

  const count: number = selectedMode?.field ?? 0;

  const toggleSquare = (index: number) =>
    setData((prevState: Data[]) =>
      prevState.map((item) => {
        if (item.idx === index) {
          return { ...item, isHovered: !item.isHovered };
        } else {
          return item;
        }
      })
    );

  useEffect(() => {
    fetch("http://demo7919674.mockable.io/")
      .then((res) => res.json())
      .then((value: Mode[]) => {
        setModes(value);
        setSelectedMode(value[0]);
      })
      .catch((e) => {
        alert("Something went wrong!");
        console.log(e);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        count,
        data,
        modes,
        selectedMode,
        setData,
        toggleSquare,
        setModes,
        setSelectedMode,
      }}
    >
      <div className="App">
        <Header />
        {selectedMode ? (
          <Suspense fallback={<div>Loading...</div>}>
            <View />
          </Suspense>
        ) : (
          <h2>Please, select mode.</h2>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
