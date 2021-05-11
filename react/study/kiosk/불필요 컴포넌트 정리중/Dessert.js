import React from "react";

function Dessert({ onClickMenu }) {
  const dessert = [
    {
      id: 1,
      nameKor: "상하이 치킨 스낵랩",
      nameEng: "Shanghai Chicken Snack Wrap",
      kcal: "283kcal",
      price: 100,
      address: "/images/dessert1.png",
      number: 1,
    },
    {
      id: 2,
      nameKor: "골든 모짜렐라 치즈스틱",
      nameEng: "Golden Mozzarella Cheese Sticks",
      kcal: "162kcal",
      price: 200,
      address: "/images/dessert2.png",
      number: 1,
    },
    {
      id: 3,
      nameKor: "후렌치 후라이",
      nameEng: "French Fries",
      kcal: "332kcal",
      price: 300,
      address: "/images/dessert3.png",
      number: 1,
    },
    {
      id: 4,
      nameKor: "맥너겟®",
      nameEng: "McNuggets®",
      kcal: "171kcal",
      price: 400,
      address: "/images/dessert4.png",
      number: 1,
    },

    {
      id: 5,
      nameKor: "맥스파이시®치킨 텐더",
      nameEng: "McSpicy® Chicken Tenders",
      kcal: "191kcal",
      price: 500,
      address: "/images/dessert5.png",
      number: 1,
    },
    {
      id: 6,
      nameKor: "해쉬 브라운",
      nameEng: "Hash Brown",
      kcal: "159kcal",
      price: 600,
      address: "/images/dessert6.png",
      number: 1,
    },
  ];

  const dessertList = dessert.map((list) => (
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
      }}
    >
      <img
        src={list.address}
        alt={"dessert"}
        width={"90px"}
        height={"90px"}
        style={{ float: "left" }}
      />
      <div style={{ display: "inline-block" }}>
        <div>{list.nameKor}</div>
        <div style={{ fontSize: "0.7rem" }}>{list.nameEng}</div>
        <div>{list.kcal}</div>
        <div>{list.price}원</div>
      </div>
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
