import React from "react";

function Morning({ onClickMenu }) {
  const morning = [
    {
      id: 1,
      nameKor: "베이컨 토마토 에그 머핀",
      nameEng: "BLT Egg Muffin",
      kcal: "327kcal",
      price: 100,
    },
    {
      id: 2,
      nameKor: "치킨 치즈 머핀",
      nameEng: "Chicken 'n Cheese Muffin",
      kcal: "452kcal",
      price: 200,
    },
    {
      id: 3,
      nameKor: "에그 맥머핀",
      nameEng: "Egg McMuffin",
      kcal: "292kcal",
      price: 300,
    },
    {
      id: 4,
      nameKor: "베이컨 에그 맥머핀",
      nameEng: "Bacon Egg McMuffin",
      kcal: "290kcal",
      price: 400,
    },
    {
      id: 5,
      nameKor: "소시지 에그 맥머핀",
      nameEng: "Sausage Egg McMuffin",
      kcal: "452kcal",
      price: 500,
    },
    {
      id: 6,
      nameKor: "상하이 치킨 스낵랩",
      nameEng: "Shanghai Chicken Snack Wrap",
      kcal: "283kcal",
      price: 600,
    },
  ];

  const morningList = morning.map((list) => (
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
      <h1>맥모닝</h1>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {morningList}
      </ul>
    </div>
  );
}

export default Morning;
