import React, { useRef, useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import KioskTemplate from "./KioskTemplete";
import CategoryTemplate from "./CategoryTemplate";
import "./App.css";
import Total from "./Total";
import { v4 as uuidv4 } from "uuid";
import { MenuCategory, CategoryList } from "./MenuCategory";
import SelectedMenuBlock from "./style/SelectedMenuBlock";

function App() {
  const [basket, setBasket] = useState([]);
  const [display, setDisplay] = useState();

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
    total.current += addMenu.menuPrice;
  };

  const categoryList = CategoryList.map((categoryDetail) => (
    <CategoryTemplate>
      <h3 key={uuidv4()} onClick={() => onClickCategory(categoryDetail)}>
        {categoryDetail.categoryName}
      </h3>
    </CategoryTemplate>
  ));

  const onClickCategory = (categoryDetail) => {
    const updateCategory = CategoryList.map((updatedCategoryDetail) => {
      if (updatedCategoryDetail.categoryId !== categoryDetail.categoryId) {
        return null;
      }
      return (
        <MenuCategory
          onClickMenu={onClickMenu}
          updatedCategoryDetail={updatedCategoryDetail}
        />
      );
    });
    setDisplay(updateCategory);
  };

  const countUp = (list) => {
    const basketUpdate = basket.map((menu) =>
      menu.id === list.id ? { ...menu, number: menu.number + 1 } : menu
    );
    basket.map((menu) =>
      menu.id === list.id ? (total.current += menu.menuPrice) : menu
    );
    setBasket(basketUpdate);
  };

  const countDown = (list) => {
    const basketUpdate = basket.map((menu) =>
      menu.id === list.id && list.number > 1
        ? { ...menu, number: menu.number - 1 }
        : menu
    );
    basket.map((menu) =>
      menu.id === list.id && list.number > 1
        ? (total.current -= menu.menuPrice)
        : menu
    );
    setBasket(basketUpdate);
  };

  const selectedMenu = basket.map((list) => (
    <li key={uuidv4()}>
      <SelectedMenuBlock>
        <div>{list.korean}</div>
        <div>{list.number}개</div>
        <button onClick={() => countUp(list)}>+</button>
        <button onClick={() => countDown(list)}>-</button>
        <div>{list.menuPrice * list.number}원</div>
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
      </SelectedMenuBlock>
    </li>
  ));

  const onRemove = (id) => {
    const removeList = basket.filter((list) => list.id !== id);
    const subtractPrice = basket.filter((list) => list.id === id);
    setBasket(removeList);
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
        <div>
          <ul>{categoryList}</ul>
        </div>
        {display}
        {display && <Total selectedMenu={selectedMenu} total={total} />}
      </KioskTemplate>
    </div>
  );
}

export default App;
