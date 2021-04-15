import React from "react";

function Total({ name, price }) {
  return (
    <div>
      <h2>선택된 메뉴</h2>
      <div>
        <span>{name}</span>
        <span>가격: {price}원</span>
        <span>3개</span>
        <span> + / - 버튼</span>
        <span>총 가격: 300원</span>
      </div>
    </div>
  );
}

export default Total;
