import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
  return (
    <div>
      <ul>
        <h3>사용자 목록: </h3>
        <li>
          <Link to="/profiles/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/b2win">b2win 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요! </div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
