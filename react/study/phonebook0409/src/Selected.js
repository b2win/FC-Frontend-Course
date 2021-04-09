import React from "react";

function Selected({ selectedNameDetail, onClickDeleteName }) {
  return (
    <>
      <hr />
      <div style={{ marginLeft: "200px" }}>
        <p style={{ display: "inline", textDecoration: "underline" }}>
          선택된 정보
        </p>
        &nbsp;
        <button onClick={onClickDeleteName}>삭제</button>
        <p style={{ marginTop: "30px" }}>이름: {selectedNameDetail.name}</p>
        <p>전화번호: {selectedNameDetail.mobile}</p>
      </div>
    </>
  );
}

export default Selected;
