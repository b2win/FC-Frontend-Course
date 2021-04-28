import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColor from "./components/SelectColor";
import { ColorProvider } from "./context/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
