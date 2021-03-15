import './App.css';
import React from 'react';
import ScrollBox from './ScrollBox';
import EventPracticeAgain from './EventPracticeAgain';
import EventPracticeAgain함수 from './EventPracticeAgain함수형';
import PropsComponent from './PropsComponent';
import Wrapper from './Wrapper';


function App() {

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
      <Wrapper>
        <PropsComponent name="b2win" fontSize='50px' age= {10} color='aqua' isSpecial />
        <PropsComponent name="b2win" fontSize='50px' age= {30} />
      </Wrapper>
    );
  }



export default App;
