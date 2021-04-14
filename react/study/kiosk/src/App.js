import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>메뉴</h1>
      <ul style={{ listStyle: "none" }}>
        <li>버거</li>
        <li>맥카페 &amp; 음료</li>
        <li>사이드 &amp; 디저트</li>
        <li>맥모닝</li>
        <li>맥런치</li>
      </ul>
    </div>
  );
}

export default App;
