import React from "react";
import B2win from "../context/B2win";
import ColorContext from "../context/color";

function ColorBox() {
  return (
    <>
      <ColorContext.Consumer>
        {(b2win) => (
          <>
            <div
              style={{
                width: "200px",
                height: "200px",
                background: b2win.color,
              }}
            />
            <div
              style={{
                fontSize: b2win.fontSize,
                color: b2win.아무거나,
                background: "darkblue",
              }}
            >
              가나다라마바사아자차카타파하
            </div>
          </>
        )}
      </ColorContext.Consumer>
      <B2win.Consumer>
        {(abc) => (
          <>
            <div
              style={{
                width: "200px",
                height: "200px",
                background: abc.color,
              }}
            />
            <div
              style={{
                fontSize: abc.fontSize,
                color: abc.아무거나,
                background: "darkblue",
              }}
            >
              가나다라마바사아자차카타파하
            </div>
          </>
        )}
      </B2win.Consumer>
    </>
  );
}

export default ColorBox;
