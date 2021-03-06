import { Route, NavLink } from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <ul>
        <h3>사용자 목록: </h3>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert 프로필
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/b2win">
            b2win 프로필
          </NavLink>
        </li>
      </ul>
      <hr />
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요! </div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      {/* <WithRouterSample /> */}
    </div>
  );
}

export default Profiles;
