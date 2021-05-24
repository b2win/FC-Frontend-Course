import { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

// const CounterContainer = () => {
//   const number = useSelector((state) => state.counter);
//   // state.counter.number가 아닌 이유 = initialState에 숫자 0으로 작성, (number: ... 으로 안함)

//   const dispatch = useDispatch();
//   const increase = useCallback(() => dispatch(increase()), [dispatch]);
//   const decrease = useCallback(() => dispatch(decrease()), [dispatch]);

//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// export default CounterContainer;

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  { increase, decrease }
)(CounterContainer);
