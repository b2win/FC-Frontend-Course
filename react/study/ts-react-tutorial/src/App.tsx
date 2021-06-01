import React from 'react';
import './App.css';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name)
  }
  return (
<Greetings name="리액트" onClick={onClick} />
  );
}

export default App;
