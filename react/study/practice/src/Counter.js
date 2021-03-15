import React, { useState} from 'react';

function Counter() {

  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1)
  };

  const onDecrease = () => {
    setNumber(number - 1)
  };

  const black = {
    color: 'black'
  }

  const positive =  {
    color: 'blue'
  }

  const negative = {
    color: 'red'
  }

  return(
    <div>
      <h1 style={number >= 0 ? positive : negative }><span>{number}</span></h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}


export default Counter;