import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";
import ContextSample from "./ContextSample";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
        <ContextSample />
      </div>
    </ColorProvider>
  );
}

export default App;
