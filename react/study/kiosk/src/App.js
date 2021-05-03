import React, { useState } from "react";
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
  const [display, setDisplay] = useState(<Burger />);
  const [total, setTotal] = useState("");

  const onClickMenu = (detail) => {
    const howMany = prompt(detail.nameKor + "의 수량을 입력해 주세요!");
    const addMenu = basket.concat({
      id: nextId,
      korean: detail.nameKor,
      menuPrice: detail.price,
      number: detail.number,
      want: Math.abs(howMany) || 1,
    });
    setBasket(addMenu);
    setNextId(nextId + 1);
    console.log(nextId);
    console.log(basket);
    setTotal(
      Math.abs(total + addMenu[nextId].menuPrice * addMenu[nextId].want) * 1
    );
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
    {
      id: 4,
      name: "맥모닝",
      value: <Morning onClickMenu={onClickMenu} />,
    },
    {
      id: 5,
      name: "맥런치",
      value: <Lunch onClickMenu={onClickMenu} />,
    },
  ];

  const onClickSidebarMenu = (id) => {
    console.log(category[0].id);
    setDisplay(category.map((list) => list.id === id && list.value));
  };

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
        <div>{list.want}개</div>
        <div>{list.menuPrice * list.want}원</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

  // const selectedMenu = basket.map((list) => (
  //   <li key={list.id}>
  //     <ListBlock>
  //       <div>{list.korean}</div>
  //       <div>{up + down}개</div>
  //       <button onClick={() => setUp(up + 1)}>+</button>
  //       <button onClick={() => setDown(down - 1)}>-</button>
  //       <div>{list.menuPrice * number}원</div>
  //       <button onClick={() => onRemove(list.id)}>
  //         <MdRemoveCircleOutline
  //           style={{
  //             color: "red",
  //             position: "absolute",
  //           }}
  //         />
  //         &nbsp;&nbsp;&nbsp; Cancel
  //       </button>
  //     </ListBlock>
  //   </li>
  // ));

  const onRemove = (id) => {
    const removeList = basket.filter((list) => list.id !== id);
    const subtractPrice = basket.filter((list) => list.id === id);
    setBasket(removeList);
    setNextId(nextId - 1);
    setTotal(total - subtractPrice[0].menuPrice * subtractPrice[0].want);
  };

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        alert("마우스 오른쪽 버튼을 사용할 수 없습니다!");
      }}
    >
      <KioskTemplate>
        <h1>Welcome to McDonald's</h1>
        <h1>카테고리</h1>
        <div className="sideBar">
          <ul>{categoryList}</ul>
        </div>
        {/* <Burger onClickMenu={onClickMenu} /> */}
        {display}
        <Total selectedMenu={selectedMenu} total={total} />
      </KioskTemplate>
    </div>
  );
}

export default App;
