import React from "react";
import { withRouter } from "react-router-dom";

function WithRouterSample({ location, match, history }) {
  const event = () => {
    console.log("됩니다");
    history.push("/");
  };

  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly
      ></textarea>
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly
      ></textarea>
      <button onClick={event}>홈으로</button>
      <button
        onClick={() => history.push("/")} // 옆에 처럼 하면 두개중에 뒤에꺼만 실행 됨!.
        onClick={() => console.log("됩니다")} // 온클릭에 두개이상의 이벤트 실행시키고 싶을시 위에처럼 함수로 호출!
      >
        홈으로
      </button>
    </div>
  );
}

export default withRouter(WithRouterSample);
