import React from "react";

function Drink() {
  return (
    <div>
      <h1>맥카페 &amp; 음료</h1>
      <ul>
        <li>
          <div className="kor-name">제주 한라봉 칠러</div>
          <div className="eng-name">Jeju Hallabong Chiller</div>
          <div>236kcal</div>
        </li>
        <li>
          <div className="kor-name">애플망고 칠러</div>
          <div className="eng-name">Apple Mango Chiller</div>
          <div>251kcal</div>
        </li>
        <li>
          <div className="kor-name">배 칠러</div>
          <div className="eng-name">Pear Chiller</div>
          <div>256kcal</div>
        </li>
        <li>
          <div className="kor-name">카페라떼</div>
          <div className="eng-name">Café Latte</div>
          <div>149kcal</div>
        </li>
        <li>
          <div className="kor-name">디카페인 카페라떼</div>
          <div className="eng-name">Decaffeine Café Latte</div>
          <div>150kcal</div>
        </li>
        <li>
          <div className="kor-name">아이스 카페라떼</div>
          <div className="eng-name">Iced Café Latte</div>
          <div>108kcal</div>
        </li>
      </ul>
    </div>
  );
}

export default Drink;
