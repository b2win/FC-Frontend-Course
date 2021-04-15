import React from "react";

function Burger() {
  return (
    <div>
      <h1>버거</h1>
      <ul style={{ listStyle: "none" }}>
        <li>
          <div className="kor-name">필레 오 피쉬</div>
          <div className="eng-name">Filet-O-Fish</div>
          <div>342kcal</div>
        </li>
        <li>
          <div className="kor-name">더블 필레오피쉬</div>
          <div className="eng-name">Double Filet-O-Fish</div>
          <div>481kcal</div>
        </li>
        <li>
          <div className="kor-name">1955® 버거</div>
          <div className="eng-name">1955® Burger</div>
          <div>536kcal</div>
        </li>
        <li>
          <div className="kor-name">빅맥</div>
          <div className="eng-name">Big mac</div>
          <div>583kcal</div>
        </li>
        <li>
          <div className="kor-name">맥스파이시® 상하이 버거</div>
          <div className="eng-name">McSpicy® Shanghai Burger</div>
          <div>494kcal</div>
        </li>
        <li>
          <div className="kor-name">맥치킨®</div>
          <div className="eng-name">McChicken®</div>
          <div>483kcal</div>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
