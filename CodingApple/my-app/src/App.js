import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [first, firstFunction] = useState(['남자 코트 추천', '남자 코트 추천1', '남자 코트 추천2']);
  let [count, countFunction] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={() => {firstFunction(['여자 코트 추천', ...first.splice(1)])}}></button>
      <div className="list">
        <h3> {first[0]} <span onClick={() => { countFunction(count + 1) }}>😊</span> {count} </h3>
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

      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </div>
  );
}

export default App;
