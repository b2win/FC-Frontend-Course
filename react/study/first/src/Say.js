import React, { useState } from "react";

function Say() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");

  const enter = () => setText("안녕하세요!");
  const leave = () => setText("안녕히가세요!");

  return (
    <>
      <div>
        <button onClick={enter}>입장</button>
        <button onClick={leave}>퇴장</button>
      </div>
      <h1 style={{ color: color }}>{text}</h1>
      <div>
        <button style={{ color: "red" }} onClick={() => setColor("red")}>
          빨간색
        </button>
        <button style={{ color: "green" }} onClick={() => setColor("green")}>
          초록색
        </button>
        <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
          파란색
        </button>
      </div>
    </>
  );
}

export default Say;
