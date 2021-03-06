import React, { useRef, useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import KioskTemplate from "./KioskTemplete";
import CategoryTemplate from "./CategoryTemplate";
import "./App.css";
import Burger from "./Burger";
import Dessert from "./Dessert";
import Drink from "./Drink";
import Lunch from "./Lunch";
import Morning from "./Morning";
import Total from "./Total";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

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
  const [display, setDisplay] = useState();
  // const [onClickCategory, setOnClickCategory] = useState("burgerList");

  const nextId = useRef(0);
  const total = useRef(0);

  const onClickMenu = (detail) => {
    const addMenu = {
      id: nextId.current,
      korean: detail.nameKor,
      menuPrice: detail.price,
      number: detail.number,
    };
    setBasket((add) => add.concat(addMenu));
    nextId.current += 1;
    console.log(nextId.current);
    total.current += addMenu.menuPrice;
  };

  // const onClickMenu = (detail) => {
  //   const addMenu = basket.concat({
  //     id: nextId,
  //     korean: detail.nameKor,
  //     menuPrice: detail.price,
  //     number: detail.number,
  //   });
  //   setBasket(addMenu);
  //   setNextId(nextId + 1);
  //   setTotal(
  //     Math.abs(total + addMenu[nextId].menuPrice * addMenu[nextId].number) * 1
  //   );
  // };

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

  const categoryList = category.map((list) => (
    <CategoryTemplate>
      <h3 key={uuidv4()} onClick={() => selectCategoryList(list.id)}>
        {list.name}
      </h3>
    </CategoryTemplate>
  ));

  const selectCategoryList = (id) => {
    const updateCategory = category.map((list) => {
      if (list.id !== id) {
        return null;
      }
      return list.value;
    });
    setDisplay(updateCategory);

    // setDisplay(category.map((list) => list.id === id && list.value));
    // console.log(display);
    // console.log(category[id]);
  };

  const countUp = (list) => {
    const basketUpdate = basket.map((menu) =>
      menu.id === list.id ? { ...menu, number: menu.number + 1 } : menu
    );
    const changeTotal = basket.map((menu) =>
      menu.id === list.id ? (total.current += menu.menuPrice) : menu
    );
    setBasket(basketUpdate);
    console.log(basketUpdate);
    // console.log(basketUpdate[list.id]); //메뉴 삭제시 아이디 업데이트 안됌.
    // total.current += basketUpdate[list.id].menuPrice; //id 때문에 버그 발생
    console.log(changeTotal);
  };
  // const countUp = (list) => {
  //   const basketUpdate = basket.map((menu) => {
  //     if (menu.id === list.id) {
  //       return { ...menu, number: menu.number * 1 + 1 };
  //     }
  //     return menu;
  //   });
  //   setBasket(basketUpdate);
  //   console.log(basketUpdate);
  //   console.log(basketUpdate[list.id]); //메뉴 삭제시 아이디 업데이트 안됌.
  //   total.current += basketUpdate[list.id].menuPrice; //id 때문에 버그 발생
  // };

  const countDown = (list) => {
    const basketUpdate = basket.map((menu) =>
      menu.id === list.id && list.number > 1
        ? { ...menu, number: menu.number - 1 }
        : menu
    );
    const changeTotal = basket.map((menu) =>
      menu.id === list.id && list.number > 1
        ? (total.current -= menu.menuPrice)
        : menu
    );
    console.log(changeTotal);
    setBasket(basketUpdate);
    // if (list.number > 1) total.current -= basketUpdate[list.id].menuPrice;
  };
  // const countDown = (list) => {
  //   const basketUpdate = basket.map((menu) => {
  //     if (menu.id === list.id && menu.number > 1) {
  //       return { ...menu, number: menu.number - 1 };
  //     }
  //     return menu;
  //   });
  //   setBasket(basketUpdate);
  //   if (list.number > 1) total.current -= basketUpdate[list.id].menuPrice;
  // };

  const selectedMenu = basket.map((list) => (
    <li key={uuidv4()}>
      <ListBlock>
        <div style={{ width: "300px" }}>{list.korean}</div>
        <div style={{ width: "60px" }}>{list.number}개</div>
        <button style={{ width: "20px" }} onClick={() => countUp(list)}>
          +
        </button>
        <button style={{ width: "20px" }} onClick={() => countDown(list)}>
          -
        </button>
        <div style={{ width: "90px" }}>{list.menuPrice * list.number}원</div>
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
    console.log(removeList);
    setBasket(removeList);
    // nextId.current += 1;
    // console.log(nextId.current);
    total.current -= subtractPrice[0].menuPrice * subtractPrice[0].number;
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
        <div className="sideBar" style={{ height: "260px" }}>
          <ul>
            {categoryList}
            {/* <CategoryTemplate>
              <h3 onClick={() => onClickSidebarMenu}>햄버거</h3>
            </CategoryTemplate> */}
          </ul>
        </div>
        {/* <Burger onClickMenu={onClickMenu} /> */}
        {display}
        <Total selectedMenu={selectedMenu} total={total} />
      </KioskTemplate>
    </div>
  );
}

export default App;
