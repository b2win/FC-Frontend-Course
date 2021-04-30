import React from "react";

function Total({ selectedMenu, total }) {
  return (
    <div style={{ width: "650px" }}>
      <h2>선택된 메뉴</h2>
      <ul>{selectedMenu}</ul>
      <div style={{ fontSize: "2rem", marginLeft: "15rem" }}>
        Total: {total}원{" "}
      </div>
    </div>
  );
}

export default Total;
