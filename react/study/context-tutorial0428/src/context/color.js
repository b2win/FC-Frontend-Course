import { createContext } from "react";

const ColorContext = createContext({
  color: "black",
  fontSize: "30px",
  아무거나: "blue",
});

export default ColorContext;
