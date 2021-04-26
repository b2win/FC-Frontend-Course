import React from "react";
import qs from "qs";

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const angel = 1004;
  const showDetail = query.detail === "true";
  const hideDetail = query.b2win === "false";
  const numberDetail = parseInt(query.number) === angel;

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨습니다!</p>}
      {hideDetail && <p>b2win 값을 false로 설정하셨습니다!</p>}
      {numberDetail && <p>number 값을 1004(숫자)로 설정하셨습니다!</p>}
    </div>
  );
}

export default About;
