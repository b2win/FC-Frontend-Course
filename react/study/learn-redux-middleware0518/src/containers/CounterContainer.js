import React from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import {
  // increase,
  // decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";
import Counter from "../components/Counter";

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// export default connect(
//   (state) => ({
//     number: state.counter,
//   }),
//   { increase, decrease }
// )(CounterContainer);

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
