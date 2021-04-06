import React, { useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

function Info() {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });

  // const { name, nickname } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  // useEffect(() => {
  //   // console.log("렌더링이 완료되었습니다!");
  //   // console.log({
  //   //   name,
  //   //   nickname,
  //   // });
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
}

export default Info;
