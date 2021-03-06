import * as api from "../lib/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { startLoading, finishLoading } from "./loading";

import createRequestSaga from "../lib/createRequestSaga";
import { createAction } from "redux-actions";

// 액션 타입을 선언. 한 요청당 세 개를 만듬.
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// // thunk 함수를 생성. thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치 함.
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       아무거나: response.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       아무거나: e,
//       error: true,
//     }); // 에러 발생
//     throw e;
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       아무거나: response.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       아무거나: e,
//       error: true,
//     }); // 에러 발생
//     throw e;
//   }
// };

// 초기 상태를 선언. 요청의 로딩 중 상태는 loading이라는 객체에서 관리.
const initialState = {
  post: null,
  users: null,
};

function sample(state = initialState, action) {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}

export default sample;

// import * as api from "../lib/api";
// import createRequestThunk from "../lib/createRequestThunk";

// // 액션 타입을 선언. 한 요청당 세 개를 만듬.
// const GET_POST = "sample/GET_POST";
// const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

// const GET_USERS = "sample/GET_USERS";
// const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// // // thunk 함수를 생성. thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치 함.
// // export const getPost = (id) => async (dispatch) => {
// //   dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
// //   try {
// //     const response = await api.getPost(id);
// //     dispatch({
// //       type: GET_POST_SUCCESS,
// //       아무거나: response.data,
// //     }); // 요청 성공
// //   } catch (e) {
// //     dispatch({
// //       type: GET_POST_FAILURE,
// //       아무거나: e,
// //       error: true,
// //     }); // 에러 발생
// //     throw e;
// //   }
// // };

// // export const getUsers = () => async (dispatch) => {
// //   dispatch({ type: GET_USERS });
// //   try {
// //     const response = await api.getUsers();
// //     dispatch({
// //       type: GET_USERS_SUCCESS,
// //       아무거나: response.data,
// //     }); // 요청 성공
// //   } catch (e) {
// //     dispatch({
// //       type: GET_USERS_FAILURE,
// //       아무거나: e,
// //       error: true,
// //     }); // 에러 발생
// //     throw e;
// //   }
// // };

// // 초기 상태를 선언. 요청의 로딩 중 상태는 loading이라는 객체에서 관리.
// const initialState = {
//   post: null,
//   users: null,
// };

// function sample(state = initialState, action) {
//   switch (action.type) {
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: action.아무거나,
//       };
//     case GET_USERS_SUCCESS:
//       return {
//         ...state,
//         users: action.아무거나,
//       };
//     default:
//       return state;
//   }
// }

// export default sample;

// import { handleActions } from "redux-actions";
// import * as api from "../lib/api";

// // 액션 타입을 선언. 한 요청당 세 개를 만듬.
// const GET_POST = "sample/GET_POST";
// const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

// const GET_USERS = "sample/GET_USERS";
// const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

// // thunk 함수를 생성. thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치 함.
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     }); // 에러 발생
//     throw e;
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     }); // 에러 발생
//     throw e;
//   }
// };

// // 초기 상태를 선언. 요청의 로딩 중 상태는 loading이라는 객체에서 관리.
// const initialState = {
//   post: null,
//   users: null,
// };

// const sample = handleActions(
//   {
//     [GET_POST_SUCCESS]: (state, action) => ({
//       ...state,
//       post: action.payload,
//     }),
//     [GET_USERS_SUCCESS]: (state, action) => ({
//       ...state,
//       users: action.payload,
//     }),
//   },
//   initialState
// );

// export default sample;
