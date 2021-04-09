import React from "react";

function Selected({ selectedNameDetail, onClickDeleteName }) {
  return (
    <>
      <hr />
      <div style={{ marginLeft: "200px" }}>
        <span>선택된 정보: </span>
        <button onClick={onClickDeleteName}>삭제</button>
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
