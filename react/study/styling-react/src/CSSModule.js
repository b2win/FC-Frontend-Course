import React from "react";
import styles from "./CSSModule.module.css";

function CSSModule() {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
}

export default CSSModule;

// const MyComponent = ({ highlighted, theme }) => (
//   <div className={classNames("MyComponent", { highlighted }, theme)}>Hello</div>
// );

// const MyComponent = ({ highlighted, theme }) => (
//   <div className={`MyComponent ${theme} ${highlighted ? "highlighted" : ""}`}>
//     Hello
//   </div>
// );
