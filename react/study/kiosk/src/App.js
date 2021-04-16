import React, { useState } from "react";
import KioskTemplate from "./KioskTemplete";
import "./App.css";
import Burger from "./Burger";
import Dessert from "./Dessert";
import Drink from "./Drink";
import Lunch from "./Lunch";
import Morning from "./Morning";
import Total from "./Total";

function App() {
  const [basket, setBasket] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [display, setDisplay] = useState("");

  const onClickMenu = (detail) => {
    const addMenu = {
      id: nextId,
      a: detail.nameKor,
      b: detail.price,
    };
    setBasket(basket.concat(addMenu));
    console.log(addMenu);
    console.log(basket.b);
    setNextId(nextId + 1);
  };

  const category = [
    {
      id: 1,
      name: "버거",
      value: <Burger onClickMenu={onClickMenu} />,
    },
    {
      id: 2,
      name: "맥카페 & 음료",
      value: <Drink onClickMenu={onClickMenu} />,
    },
    {
      id: 3,
      name: "사이드 & 디저트",
      value: <Dessert onClickMenu={onClickMenu} />,
    },
    { id: 4, name: "맥모닝", value: <Morning onClickMenu={onClickMenu} /> },
    { id: 5, name: "맥런치", value: <Lunch onClickMenu={onClickMenu} /> },
  ];

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

  const selectedMenu = basket.map((list) => (
    <li key={list.id}>
      {list.a} 1개 {list.b}원
    </li>
  ));

  return (
    <KioskTemplate>
      <h1>카테고리</h1>
      <div className="sideBar">
        <ul>{categoryList}</ul>
      </div>
      <div>{display}</div>

      <Total selectedMenu={selectedMenu} />
    </KioskTemplate>
  );
}

export default App;
