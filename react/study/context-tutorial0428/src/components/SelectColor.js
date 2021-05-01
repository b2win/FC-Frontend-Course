import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../context/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function SelectColor() {
  const { 아무거나 } = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요!</h2>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={() => 아무거나.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              아무거나.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default SelectColor;
