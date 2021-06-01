import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (aaa) => {
  setTimeout(() => {
    aaa(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return state + 1;
//     case DECREASE:
//       return state - 1;
//     default:
//       state;
//   }
// }

export default counter;
