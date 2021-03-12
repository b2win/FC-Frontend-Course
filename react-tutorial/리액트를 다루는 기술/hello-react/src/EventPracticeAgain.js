import React, { Component } from 'react';

class EventPracticeAgain extends Component {

  state = {
    username: '',
    message: ''
  }

  render() {
    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    const onClick =  () => {
      alert(this.state.username + ': ' + this.state.message);
      this.setState({
        username: '',
        message: ''
      });
    }

    const onKeyPress = (e) => {
      if(e.key === 'Enter') {
        onClick();
      }
    }

    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={onChange}
          value={this.state.username}
        />

        <input
          type="text"
          name="message"
          placeholder="글자를 입력해보세요"
          onChange={onChange}
          value={this.state.message}
          onKeyPress={onKeyPress}
        />

        <button onClick={
        onClick
        }>확인</button>
      </div>
    );
  }
}

export default EventPracticeAgain;