import React from "react";

// 이 곳에 reducer를 작성해주세요
function reducer(state, action) {
  switch (action.type) {
    case "STORE_USERINFO":
      return {
        users: state.users.concat({
          id: action.id,
          username: action.username,
          email: action.email
        })
      };
    case "DELETE_USERINFO":
      return {
        users: state.users.filter((user) => user.id !== action.id)
      };
    default:
      throw new Error("Wrong action");
  }
}

// import 문과 export 문의 주석을 해제하면
// 정상적으로 다른 컴포넌트에서 사용이 가능합니다.

export default reducer;
