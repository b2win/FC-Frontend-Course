import React from "react";

function Dessert() {
  return (
    <div>
      <h1>사이드 &amp; 디저트</h1>
      <ul>
        <li>
          <div className="kor-name">상하이 치킨 스낵랩</div>
          <div className="eng-name">Shanghai Chicken Snack Wrap</div>
          <div>283kcal</div>
        </li>
        <li>
          <div className="kor-name">골든 모짜렐라 치즈스틱</div>
          <div className="eng-name">Golden Mozzarella Cheese Sticks</div>
          <div>162kcal</div>
        </li>
        <li>
          <div className="kor-name">후렌치 후라이</div>
          <div className="eng-name">French Fries</div>
          <div>332kcal</div>
        </li>
        <li>
          <div className="kor-name">맥너겟®</div>
          <div className="eng-name">McNuggets®</div>
          <div>171kcal</div>
        </li>
        <li>
          <div className="kor-name">맥스파이시®치킨 텐더</div>
          <div className="eng-name">McSpicy® Chicken Tenders</div>
          <div>191kcal</div>
        </li>
        <li>
          <div className="kor-name">해쉬 브라운</div>
          <div className="eng-name">Hash Brown</div>
          <div>159kcal</div>
        </li>
      </ul>
    </div>
  );
}

export default Dessert;
