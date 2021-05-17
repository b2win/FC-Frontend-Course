import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  console.log(diff);

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={increase}
        onDecrease={decrease}
        onSetDiff={setDiff}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diif: state.counter.diff,
});

// const mapDispatchToProps = (dispatch) => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: (diff) => dispatch(diff),
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//       setDiff,
//     },
//     dispatch
//   );

const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
