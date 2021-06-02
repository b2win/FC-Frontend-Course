import React from "react";
import "./App.css";
import Counter from "./Counter";
// import Greetings from './Greetings';
// import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  );
}
export default App;
