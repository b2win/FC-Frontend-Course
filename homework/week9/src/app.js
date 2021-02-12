import { Link, Route } from "react-router-dom";

import Exam1 from "./components/exam1";
import Exam2 from "./components/exam2";
import Exam3 from "./components/exam3";
import Exam4 from "./components/exam4";
import Exam5Context from "./components/exam5/exam5Context";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/Exam1">Exam1</Link>
        </li>
        <li>
          <Link to="/Exam2">Exam2</Link>
        </li>
        <li>
          <Link to="/Exam3">Exam3</Link>
        </li>
        <li>
          <Link to="/Exam4">Exam4</Link>
        </li>
        <li>
          <Link to="/Exam5">Exam5</Link>
        </li>
      </ul>
      <Route path="/Exam1" component={Exam1} />
      <Route path="/Exam2" component={Exam2} />
      <Route path="/Exam3" component={Exam3} />
      <Route path="/Exam4" component={Exam4} />
      <Route path="/Exam5" component={Exam5Context} />
      {/* <Route path="/Exam6" component={Exam6} /> */}
    </div>
  );
}
