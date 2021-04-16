import React from "react";

function Burger({ onClickMenu, setVisible }) {
  const burger = [
    {
      id: 1,
      nameKor: "필레 오 피쉬",
      nameEng: "Filet-O-Fish",
      kcal: "342kcal",
      price: 100,
    },
    {
      id: 2,
      nameKor: "더블 필레오피쉬",
      nameEng: "Double Filet-O-Fish",
      kcal: "481kcal",
      price: 200,
    },
    {
      id: 3,
      nameKor: "1955® 버거",
      nameEng: "1955® Burger",
      kcal: "536kcal",
      price: 300,
    },
    {
      id: 4,
      nameKor: "빅맥",
      nameEng: "Big mac",
      kcal: "583kcal",
      price: 400,
    },
    {
      id: 5,
      nameKor: "맥스파이시® 상하이 버거",
      nameEng: "McSpicy® Shanghai Burger",
      kcal: "494kcal",
      price: 500,
    },
    {
      id: 6,
      nameKor: "맥치킨®",
      nameEng: "McChicken®",
      kcal: "483kcal",
      price: 600,
    },
  ];

  const burgerList = burger.map((list) => (
    <li
      key={list.id}
      style={{
        cursor: "pointer",
        fontWeight: "bold",
        height: 100,
        margin: "1rem",
        textAlign: "center",
        border: "1px solid #ced4da",
        borderRadius: "16px",
        padding: "1rem",
        width: "270px",
      }}
      onClick={() => {
        onClickMenu(list);
        setVisible(true);
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
      <h1>버거</h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {burgerList}
      </ul>
    </div>
  );
}

export default Burger;
