import React from "react";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  b2win: {
    name: "이승훈",
    description: "리액트를 배우는 중",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({Profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
