import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

function CounterContainer({ number, increase, decrease }) {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}

export default connect(
  (state) => (
    console.log(state.counter.number),
    {
      // number: parseInt(7777, 10),
      number: state.counter.number,
    }
  ),
  {
    increase,
    decrease,
  }
)(CounterContainer);
