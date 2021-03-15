import React from 'react';

const style = {
  backgroundColor: 'gray',
  padding: '10px',
  border: '3px solid black',
  borderRadius: '5px'
}

function Wrapper({children}) {


  return <div style={style}>{children}</div>
}

export default Wrapper;