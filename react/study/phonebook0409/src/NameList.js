import React from "react";

function NameList({
  phonebook,
  onClickNameDetail,
  detailVisible,
  setDetailVisible,
}) {
  const nameDetail = phonebook.map((list) => (
    <li
      key={list.id}
      style={{ cursor: "pointer", fontWeight: "bold" }}
      onClick={() => {
        onClickNameDetail(list);
        setDetailVisible(!detailVisible);
      }}
    >
      {list.name}
    </li>
  ));
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{nameDetail}</ul>
    </div>
  );
}

export default NameList;
