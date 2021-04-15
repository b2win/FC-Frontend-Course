import React, { useState } from "react";
import "./App.css";
import Burger from "./Burger";
import Dessert from "./Dessert";
import Drink from "./Drink";
import Lunch from "./Lunch";
import Morning from "./Morning";

function App() {
  const category = [
    { id: 1, name: "버거", value: <Burger /> },
    { id: 2, name: "맥카페 & 음료", value: <Drink /> },
    { id: 3, name: "사이드 & 디저트", value: <Dessert /> },
    { id: 4, name: "맥모닝", value: <Morning /> },
    { id: 5, name: "맥런치", value: <Lunch /> },
  ];

  const [display, setDisplay] = useState(<Burger />);

  const onClickSidebarMenu = (id) => {
    setDisplay(category.map((list) => list.id === id && list.value));
  };

  const categoryList = category.map((list) => (
    <li
      key={list.id}
      style={{ cursor: "pointer", fontWeight: "bold" }}
      onClick={() => onClickSidebarMenu(list.id)}
    >
      {list.name}
    </li>
  ));

  return (
    <div>
      <h1>메뉴</h1>
      <div className="sideBar">
        <ul>{categoryList}</ul>
      </div>
      <div>{display}</div>
    </div>
  );
}

export default App;
