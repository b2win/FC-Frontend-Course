import React from 'react';
import './App.css';
// import Counter from './Counter';
// import Greetings from './Greetings';
import MyForm from './MyForm';

function App() {
  const onSubmit = (form: {name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />

}
export default App;
