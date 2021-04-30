// import React from "react";

import { withRouter } from "react-router";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "김민준",
    description: "책 저자",
  },
  b2win: {
    name: "공부벌레",
    description: "책 공부하는 중",
  },
};

function Profile({ match }) {
  console.log(match);
  const { username } = match.params;
  console.log(username);
  const profile = data[username];
  console.log(profile);

  if (!profile) {
    <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}

export default withRouter(Profile);
