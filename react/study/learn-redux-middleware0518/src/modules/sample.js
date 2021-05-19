import * as api from "../lib/api";

// 액션 타입을 선언. 한 요청당 세 개를 만듬.
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// thunk 함수를 생성. thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치 함.
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      아무거나: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      아무거나: e,
      error: true,
    }); // 에러 발생
    throw e;
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      아무거나: response.data,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      아무거나: e,
      error: true,
    }); // 에러 발생
    throw e;
  }
};

// 초기 상태를 선언. 요청의 로딩 중 상태는 loading이라는 객체에서 관리.
const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

function sample(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: true,
        },
      };
    case GET_POST_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false,
        },
        post: action.아무거나,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          getPost: false,
        },
      };
    case GET_USERS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: true,
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false,
        },
        users: action.아무거나,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false,
        },
      };
    default:
      return state;
  }
}

export default sample;

// import { handleActions } from "redux-actions";
// import * as api from "../lib/api";

// // 액션 타입을 선언. 한 요청당 세 개를 만듬.
// const GET_POST = "sample/GET_POST";
// const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

// const GET_USERS = "sample/GET_USERS";
// const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

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
//   loading: {
//     GET_POST: false,
//     GET_USERS: false,
//   },
//   post: null,
//   users: null,
// };

// const sample = handleActions(
//   {
//     [GET_POST]: (state) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: true, // 요청 시작
//       },
//     }),
//     [GET_POST_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: false, // 요청 완료
//       },
//       post: action.payload,
//     }),
//     [GET_POST_FAILURE]: (state, action) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_POST: false, // 요청 완료
//       },
//     }),
//     [GET_USERS]: (state) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_USERS: true, // 요청 시작
//       },
//     }),
//     [GET_USERS_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_USERS: false, // 요청 완료
//       },
//       users: action.payload,
//     }),
//     [GET_USERS_FAILURE]: (state, action) => ({
//       ...state,
//       loading: {
//         ...state.loading,
//         GET_USERS: false, // 요청 완료
//       },
//     }),
//   },
//   initialState
// );

// export default sample;
