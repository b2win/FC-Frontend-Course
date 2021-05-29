import { createAction, handleActions } from "redux-actions";
import {
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
  throttle,
} from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

function* increaseSaga() {
  yield delay(1000);
  console.log("1초경과");
  yield delay(1000);
  console.log("2초경과");
  yield delay(1000);
  console.log("3초경과");
  yield delay(1000);
  console.log("4초경과");
  yield delay(1000);
  console.log("5초경과");
  yield delay(1000);
  console.log("6초경과");
  yield delay(1000);
  console.log("7초경과");
  yield put(increase());
  console.log(Date());

  const number = yield select((state) => state.counter);
  console.log(`현재 값은 ${number}입니다.`);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// const initialState = 0;

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// export default counter;
