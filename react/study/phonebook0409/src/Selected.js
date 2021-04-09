import React from "react";

function Selected({ selectedNameDetail }) {
  return (
    <>
      <hr />
      <div>
        <p>선택된 정보: </p>
        <div>
          <span>이름: {selectedNameDetail.name}</span>
        </div>
        <div>
          <span>전화번호: {selectedNameDetail.mobile}</span>
        </div>
      </div>
    </>
  );
}

export default Selected;
