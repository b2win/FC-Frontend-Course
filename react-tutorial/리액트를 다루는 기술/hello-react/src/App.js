import './App.css';
import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import EventPracticeAgain from './EventPracticeAgain';
import EventPracticeAgain함수 from './EventPracticeAgain함수형';


class App extends Component {
  render() {
    return(
    //   <div>
    //     <ScrollBox ref={(ref) => this.scrollBox=ref} />
    //     <button onClick={() => this.scrollBox.scrollToTop()}>
    //       맨 위로
    //     </button>
    //     <button onClick={() => this.scrollBox.scrollToBottom()}>
    //       맨 밑으로
    //     </button>
    // </div>
    <EventPracticeAgain함수 />
    );
  }
}


export default App;
