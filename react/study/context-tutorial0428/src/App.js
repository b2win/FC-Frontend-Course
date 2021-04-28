import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./context/color";

function App() {
  return (
    <ColorContext.Provider
      value={{ color: "green", 아무거나: "brown", fontSize: "50px" }}
    >
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
