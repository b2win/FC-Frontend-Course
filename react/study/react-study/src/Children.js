import React from 'react';

function Children({name, age}) {
  const red = {
    color: 'blue'
  };
  const yellow = {
    color:'yellow'
  };
  const green = {
    color: 'green'
  };


  return (
    <div>
      안녕하세요 제 이름은 {name} 입니다. <br />
      제 나이는 <span style={age <= 10 ? red : age <= 20 ? yellow : green}>{age}</span> 입니다.
    </div>
  )
}


export default Children;