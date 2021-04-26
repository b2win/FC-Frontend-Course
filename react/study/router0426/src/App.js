import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="About">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path={["/about", "/info"]} component={About} />
    </div>
  );
}

export default App;
