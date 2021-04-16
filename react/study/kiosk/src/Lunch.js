import React from "react";

function Lunch({ onClickMenu, setVisible }) {
  const lunch = [
    {
      id: 1,
      nameKor: "빅맥® 세트",
      nameEng: "Big Mac® Meal",
      kcal: "1064kcal",
      price: 100,
    },
    {
      id: 2,
      nameKor: "맥스파이시® 상하이 버거 세트",
      nameEng: "McSpicy® Shanghai Burger Meal",
      kcal: "975kcal",
      price: 200,
    },
    {
      id: 3,
      nameKor: "1955® 버거 세트",
      nameEng: "1955® Burger Meal",
      kcal: "1017kcal",
      price: 300,
    },
    {
      id: 4,
      nameKor: "베이컨 토마토 디럭스 세트",
      nameEng: "Bacon Tomato Deluxe Meal",
      kcal: "1026kcal",
      price: 400,
    },
    {
      id: 5,
      nameKor: "맥치킨® 모짜렐라 세트",
      nameEng: "McChicken® Mozzarella Meal",
      kcal: "1170kcal",
      price: 500,
    },
    {
      id: 6,
      nameKor: "슈슈 버거 세트",
      nameEng: "Supreme Shrimp Burger Meal",
      kcal: "913kcal",
      price: 600,
    },
  ];

  const lunchList = lunch.map((list) => (
    <li
      key={list.id}
      style={{
        cursor: "pointer",
        fontWeight: "bold",
        height: 100,
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
      <h1>맥런치</h1>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {lunchList}
      </ul>
    </div>
  );
}

export default Lunch;
