import React from "react";

// 이 곳에 reducer를 작성해주세요

const initState = {
  inputs: {
    username: "",
    email: ""
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "STORE_USERINFO":
      return {
        ...state,
        inputs: initState.inputs,
        users: state.users.concat(action.user)
      };
    case "DELETE_USERINFO":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id)
      };
    default:
      return state;
  }
}

// import 문과 export 문의 주석을 해제하면
// 정상적으로 다른 컴포넌트에서 사용이 가능합니다.

export default reducer;
