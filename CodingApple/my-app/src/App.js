import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [first, firstFunction] = useState(['남자 코트 추천', '남자 코트 추천1', '남자 코트 추천2']);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {first[0]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {first[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {first[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
