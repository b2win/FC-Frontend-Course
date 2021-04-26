import React, { useState, useReducer } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import KioskTemplate from "./KioskTemplete";
import "./App.css";
import Burger from "./Burger";
import Dessert from "./Dessert";
import Drink from "./Drink";
import Lunch from "./Lunch";
import Morning from "./Morning";
import Total from "./Total";
import styled from "styled-components";

function App() {
  const ListBlock = styled.div`
    display: flex;
    div {
      font-size: 1.2rem;
    }
    div:first-child {
      width: 250px;
    }
    div:nth-child(2) {
      width: 50px;
    }
    button {
      font-weight: bold;
      outline: none;
      border: none;
      border-radius: 4px;
      margin: 0.2rem;
      cursor: pointer;
      height: 1.4rem;
      font-size: 1rem;
      background: #ced4da;
    }
  `;

  const [basket, setBasket] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [display, setDisplay] = useState("");
  const [total, setTotal] = useState("");
  const [visible, setVisible] = useState(false);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREASE":
        return { value: state.value + 1 };
      case "DECREASE":
        return { value: state.value - 1 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { value: 1 });

  const onClickMenu = (detail) => {
    const addMenu = {
      id: nextId,
      korean: detail.nameKor,
      menuPrice: detail.price,
    };
    setBasket(basket.concat(addMenu));
    console.log(addMenu);
    console.log(basket.menuPrice);
    setNextId(nextId + 1);
    setTotal((total + addMenu.menuPrice) * 1);
  };

  const category = [
    {
      id: 1,
      name: "버거",
      value: <Burger onClickMenu={onClickMenu} setVisible={setVisible} />,
    },
    {
      id: 2,
      name: "맥카페 & 음료",
      value: <Drink onClickMenu={onClickMenu} setVisible={setVisible} />,
    },
    {
      id: 3,
      name: "사이드 & 디저트",
      value: <Dessert onClickMenu={onClickMenu} setVisible={setVisible} />,
    },
    {
      id: 4,
      name: "맥모닝",
      value: <Morning onClickMenu={onClickMenu} setVisible={setVisible} />,
    },
    {
      id: 5,
      name: "맥런치",
      value: <Lunch onClickMenu={onClickMenu} setVisible={setVisible} />,
    },
  ];

  const onClickSidebarMenu = (id) => {
    setDisplay(category.map((list) => list.id === id && list.value));
  };

  // const onClickCounterUp = () => {

  // }

  // const onClickCounterDown = () => {

  // }

  const [up, setUp] = useState(1);
  const [down, setDown] = useState(0);
  const number = up + down;

  const categoryList = category.map((list) => (
    <h3
      key={list.id}
      style={{
        cursor: "pointer",
        fontWeight: "bold",
        background: "#dee2e6",
        height: "30px",
        width: "600px",
        textAlign: "center",
        padding: 0,
        borderRadius: "16px",
      }}
      onClick={() => onClickSidebarMenu(list.id)}
    >
      {list.name}
    </h3>
  ));

  const selectedMenu = basket.map((list) => (
    <li key={list.id}>
      <ListBlock>
        <div>{list.korean}</div>
        {/* <div>{state.value}개</div>
        <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREASE" })}>-</button> */}
        <div>{up + down}개</div>
        <button onClick={() => setUp(up + 1)}>+</button>
        <button onClick={() => setDown(down - 1)}>-</button>
        <div>{list.menuPrice * number}원</div>
        <button onClick={() => onRemove(list.id)}>
          <MdRemoveCircleOutline
            style={{
              color: "red",
              position: "absolute",
            }}
          />
          &nbsp;&nbsp;&nbsp; Cancel
        </button>
      </ListBlock>
    </li>
  ));

  const onRemove = (id) => {
    const removeList = basket.filter((list) => list.id !== id);
    const subtractPrice = basket.filter((list) => list.id === id);
    setBasket(removeList);
    setTotal(total - subtractPrice[0].menuPrice);
    console.log(subtractPrice[0].menuPrice);
  };

  return (
    <KioskTemplate>
      <h1>Welcome to McDonald's</h1>
      <h1>카테고리</h1>
      <div className="sideBar">
        <ul>{categoryList}</ul>
      </div>
      <div>{display}</div>
      {visible && <Total selectedMenu={selectedMenu} total={total} />}
    </KioskTemplate>
  );
}

export default App;
