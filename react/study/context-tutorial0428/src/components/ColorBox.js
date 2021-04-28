import React from "react";
import ColorContext from "../context/color";

function ColorBox() {
  return (
    <ColorContext.Consumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "150px",
              height: "150px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorContext.Consumer>
  );
}

export default ColorBox;
