import React from 'react';

function Hello({name, color, fontSize, isInvisible, isLogout}) {
  

  return(
    <div style={{
      color, fontSize
    }}>
      안녕하세요! {isInvisible && '방문자'}{name} 님 
      {isLogout && ' 로그인 해주세요!'}
    </div>
  )
}

export default Hello;