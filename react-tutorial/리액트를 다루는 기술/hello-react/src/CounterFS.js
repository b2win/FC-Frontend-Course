import React, { useState } from 'react';

function CounterFS() {
  const [number, setNumber] = useState(100);
  const onIncrease = () => {
    setNumber(이전number => 이전number + 1);
  }
  const onDecrease = () => {
    setNumber(이전number => 이전number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default CounterFS;