import React from "react";

function Drink({ onClickMenu }) {
  const drink = [
    {
      id: 1,
      nameKor: "제주 한라봉 칠러",
      nameEng: "Jeju Hallabong Chiller",
      kcal: "236kcal",
      price: 100,
    },
    {
      id: 2,
      nameKor: "애플망고 칠러",
      nameEng: "Apple Mango Chiller",
      kcal: "251kcal",
      price: 200,
    },
    {
      id: 3,
      nameKor: "배 칠러",
      nameEng: "Pear Chiller",
      kcal: "256kcal",
      price: 300,
    },
    {
      id: 4,
      nameKor: "카페라떼",
      nameEng: "Café Latte",
      kcal: "149kcal",
      price: 400,
    },
    {
      id: 5,
      nameKor: "디카페인 카페라떼",
      nameEng: "Decaffeine Café Latte",
      kcal: "150kcal",
      price: 500,
    },
    {
      id: 6,
      nameKor: "아이스 카페라떼",
      nameEng: "Iced Café Latte",
      kcal: "108kcal",
      price: 600,
    },
  ];

  const drinkList = drink.map((list) => (
    <li
      key={list.id}
      style={{
        cursor: "pointer",
        fontWeight: "bold",
        height: 100,
      }}
      onClick={() => {
        onClickMenu(list);
      }}
    >
      <div>{list.nameKor}</div>
      <div>{list.nameEng}</div>
      <div>{list.kcal}</div>
      <div>{list.price}원</div>
    </li>
  ));

  return (
    <div>
      <h1>맥카페 &amp; 음료</h1>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {drinkList}
      </ul>
    </div>
  );
}

export default Drink;
