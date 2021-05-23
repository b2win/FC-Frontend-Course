import { Route } from "react-router";
import NewsPage from "./components/NewsPage";

function App() {
  return (
    <div>
      <Route path="/:category?" component={NewsPage} />
    </div>
  );
}

export default App;
