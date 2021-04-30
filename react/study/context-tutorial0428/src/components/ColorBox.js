import React, { useContext } from "react";
import ColorContext from "../context/color";

function ColorBox() {
  const { state } = useContext(ColorContext);
  return (
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
    //   <ColorContext.Consumer>
    //   {({ state }) => (
    //     <>
    //       <div
    //         style={{
    //           width: "200px",
    //           height: "200px",
    //           background: state.color,
    //         }}
    //       />
    //       <div
    //         style={{
    //           width: "150px",
    //           height: "150px",
    //           background: state.subcolor,
    //         }}
    //       />
    //     </>
    //   )}
    // </ColorContext.Consumer>
  );
}

export default ColorBox;
