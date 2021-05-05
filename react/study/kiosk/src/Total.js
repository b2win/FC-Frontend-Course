import React from "react";

function Total({ selectedMenu, total }) {
  return (
    <div style={{ width: "650px" }}>
      <h2>선택된 메뉴</h2>
      <ul>{selectedMenu}</ul>
      <div style={{ fontSize: "2rem", marginLeft: "24rem", padding: "1rem" }}>
        Total: {total.current}원
        {/* {total.current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","}; */}
      </div>
    </div>
  );
}

export default Total;
