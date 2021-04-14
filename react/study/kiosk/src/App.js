import React, { useState } from "react";
import "./App.css";

function App() {
  const category = [
    "버거",
    "맥카페 & 음료",
    "사이드 & 디저트",
    "맥모닝",
    "맥런치",
  ];
  const categoryList = category.map((list) => <li>{list}</li>);

  return (
    <div>
      <h1>메뉴</h1>
      <div className="sideBar">
        <ul style={{ listStyle: "none" }}>{categoryList}</ul>
      </div>
      <div></div>
    </div>
  );
}

export default App;
