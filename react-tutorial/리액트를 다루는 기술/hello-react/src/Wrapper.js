import React from 'react';

function Wrapper({children}) {
  const style = {
    border: '5px solid black',
    padding: '30px'
  }

  return (
    <div style={style}>{children}{children}</div>
  )
}


export default Wrapper;