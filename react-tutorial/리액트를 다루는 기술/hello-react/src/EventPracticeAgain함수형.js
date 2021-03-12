import React, { useState } from 'react';

// function EventPracticeAgain함수() {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);

  const EventPracticeAgain함수 = () => {
    const [form, setForm] =  useState({
      username: '',
      message: ''
    });
    const { username, message } = form;
    const onChange = e => {
      const nextForm = {
        ...form,
        [e.target.name]: e.target.value
      };
      setForm(nextForm);
    };
  

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: ''
    });
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
    onClick();
    }
  };


  return (
  <div>
    <h1>이벤트 연습</h1>
    <input
      type="text"
      name="username"
      placeholder="username"
      onChange={onChange}
      value={username}
    />

    <input
      type="text"
      name="message"
      placeholder="글자를 입력해보세요"
      onChange={onChange}
      value={message}
      onKeyPress={onKeyPress}
    />

    <button onClick={onClick}>확인</button>
  </div>
  );
};

export default EventPracticeAgain함수;