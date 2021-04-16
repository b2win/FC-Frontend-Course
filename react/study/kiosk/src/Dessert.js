import React from "react";

function Dessert({ onClickMenu, setVisible }) {
  const dessert = [
    {
      id: 1,
      nameKor: "상하이 치킨 스낵랩",
      nameEng: "Shanghai Chicken Snack Wrap",
      kcal: "283kcal",
      price: 100,
    },
    {
      id: 2,
      nameKor: "골든 모짜렐라 치즈스틱",
      nameEng: "Golden Mozzarella Cheese Sticks",
      kcal: "162kcal",
      price: 200,
    },
    {
      id: 3,
      nameKor: "후렌치 후라이",
      nameEng: "French Fries",
      kcal: "332kcal",
      price: 300,
    },
    {
      id: 4,
      nameKor: "맥너겟®",
      nameEng: "McNuggets®",
      kcal: "171kcal",
      price: 400,
    },
    {
      id: 5,
      nameKor: "맥스파이시®치킨 텐더",
      nameEng: "McSpicy® Chicken Tenders",
      kcal: "191kcal",
      price: 500,
    },
    {
      id: 6,
      nameKor: "해쉬 브라운",
      nameEng: "Hash Brown",
      kcal: "159kcal",
      price: 600,
    },
  ];

  const dessertList = dessert.map((list) => (
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
      <h1>사이드 &amp; 디저트</h1>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {dessertList}
      </ul>
    </div>
  );
}

export default Dessert;
