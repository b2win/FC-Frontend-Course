import React from "react";

function Total({ selectedMenu }) {
  return (
    <div>
      <h2>선택된 메뉴</h2>
      <ul>{selectedMenu}</ul>
      <div>총금액: </div>
    </div>
  );
}

export default Total;
