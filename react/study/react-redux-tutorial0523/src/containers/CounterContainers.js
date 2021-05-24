import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect((state) => ({ number: state.counter.number }), {
  increase,
  decrease,
})(CounterContainer);

// export default connect(
//   (state) => ({ number: state.counter.number }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch
//     )
// )(CounterContainer);

// export default connect(
//   (state) => ({ number: state.counter.number }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   })
// )(CounterContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
