import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "", subcolor: "" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

function ColorProvider({ children }) {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("green");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
