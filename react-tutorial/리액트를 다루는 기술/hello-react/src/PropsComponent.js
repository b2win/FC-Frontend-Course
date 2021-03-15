import React, { useState } from 'react';

function PropsComponent({name, fontSize, color, isSpecial, age}) {
  const [number, setNumber] = useState(age);

  const [colorChange, setColorChange] = useState('pink');


  const red = {
    color: 'red'
  };
  const yellow = {
    color:'yellow'
  };
  const green = {
    color: 'green'
  };

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1)
  };

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1)
  };

  const [message, setMessage] = useState('Hello World!');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히가세요!');

    return (
      <>
        <div>
          <button onClick={onClickEnter}>입장</button>
          <button onClick={onClickLeave}>퇴장</button>
        </div>
        <div style={{fontSize, color, age}}>
            {isSpecial && <b>*</b>}
            <span>{message}</span> <span style={{color: 'pink'}}>{name} </span>
            <span style={age <= 10 ? red : age >= 31 ? yellow : green } >{number}</span> 님! 
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => setColorChange('orange')}>오렌지</button>
        </div>
      </>
    )
  }

//props, state, event 


  PropsComponent.defaultProps = {
    name: '노네임',
    color: 'black',
    fontSize: '100px'
  }


export default PropsComponent;