import './App.css';
import Template1 from './components/Template1';
import React, { useState } from 'react';
import Template1List from './components/Template1List';

const App = () => {
  const [templates, setTemplates] = useState([
    {
      url: "https://velog.io/@sontulip/how-to-db-design",
      img: "https://velog.velcdn.com/images/sontulip/post/209631a1-7a9c-42ad-a808-25eb5e20e061/image.png",
      title: "DB 설계는 어떻게 해야 할까?",
      authorName: "sontulip",
      authorImage: "https://velog.velcdn.com/images/sontulip/profile/f94c4da5-277e-4b97-85b1-4f8a9ecce92c/image.jpeg",
      id: 1,
      type: "article",
      date: "2022-06-24",
      description: "도대체 어떻게 설계해야 할까? 😂",
      textContents: [],
    },
    {
      url: "https://crucifi.tistory.com/54",
      img: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbPoXgk%2FbtqyN3XpKhy%2Fx3qBuJdyKlFp2kYoRkOLYk%2Fimg.png",
      title: "(HTML,CSS)핀터레스트 스타일 레이아웃 만들기",
      authorName: "Crucifi",
      authorImage: "https://t1.daumcdn.net/cfile/tistory/993E7E3C5D64311A07",
      id: 2,
      type: "article",
      date: "2019-10-3",
      description: "이번 시간에는 앞서 배웠던 html과 css를 이용해서 핀터레스트 스타일의 레이아웃을 만들 겁니다. 핀터레스트 사이트에 접속하시면 이렇게 구조화가 되어있습니다. 이것을 masonry라고 하며 masonry는 벽돌을 쌓는 공사, 석조라는 의미를 가지고 있습니다. 사진 공유 서비스인 핀터레스트가 인기를 끈 이후에 핀터레스트와 같은 스타일의 레이아웃이 크게 인기를 끌었는데요. 이러한 모양의 레이아웃을 masonry 레이아웃이라고 합니다. 여기서는 masonry을 만드는 방법을 알아보겠습니다. change view로 코드들을 먼저 살펴보겠습니다. 여기 이 코드 들을 참조해서 만들어볼게요. 스파이더맨 배경화면 이렇게 여러 개를 만들고 나면 이렇게 일자로 쭉 나열되어 있습니다. 위의 핀터레스트 형태로 만들기 위해 ..",
      textContents: [],
    },
    {
      url: "https://tlsdnjs12.tistory.com/56",
      img: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb4TH7r%2FbtrAqJjqzol%2F0n8zcpeoMnHcjHKEFVh1S1%2Fimg.png",
      title: "[리액트 오류] TypeError: Cannot read property 'map' of undefined",
      authorName: "서스포PAR",
      authorImage: "https://tistory1.daumcdn.net/tistory/4974789/attach/135b08480bcb43cf941e894e8f6c80f5",
      id: 3,
      type: "article",
      date: "2022-04-26",
      description: "🤦‍♀️ 문제의 발단 벨로퍼트님의 모던 리액트 1-13장 배열에 항목 추가하기에서 오류가 발견하였다. 배열로 잘 뜨는데 왜? Uncaught TypeError: Cannot read properties of undefined (reading 'map') 가 뜨는 것인가? import React from 'react'; const UserList = ({ user }) => { console.log(user); // 0: {id: 1, username: '홍길동', email: '123@naver.com'} // 1: {id: 2, username: '김철수', email: '456@naver.com'} // 2: {id: 3, username: '김영희', email: '789@naver.com'} re..",
      textContents: [],
    },
    {
      url: "https://medium.com/@davidpogue/my-first-immersion-in-apple-vision-pro-heavy-man-d99f0a940c7c",
      img: "https://miro.medium.com/v2/resize:fit:936/1*9Ptr0j3f7qdkuzr2-ZXPNQ.png",
      title: "My First Immersion in Apple Vision Pro: Heavy, Man!",
      authorName: "David Pogue",
      authorImage: "https://miro.medium.com/v2/resize:fill:55:55/0*eydIxmKMDspGrkXW.",
      id: 4,
      type: "article",
      date: "2023-06-07",
      description: "This morning, I spent half an hour trying the Apple Vision Pro headset. Here’s the punch line: This is one freaking mind-blowing piece of tech. I mean, when Steve Jobs unveiled the iPhone in 2007…",
      textContents: ["여기 user image 링크 바로가 안 되네...ㅠㅠ"],
    },
    {
      url: "https://tlsdnjs12.tistory.com/56",
      img: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb4TH7r%2FbtrAqJjqzol%2F0n8zcpeoMnHcjHKEFVh1S1%2Fimg.png",
      title: "[리액트 오류] TypeError: Cannot read property 'map' of undefined",
      authorName: "서스포PAR",
      authorImage: "https://tistory1.daumcdn.net/tistory/4974789/attach/135b08480bcb43cf941e894e8f6c80f5",
      id: 5,
      type: "article",
      date: "2022-04-26",
      description: "🤦‍♀️ 문제의 발단 벨로퍼트님의 모던 리액트 1-13장 배열에 항목 추가하기에서 오류가 발견하였다. 배열로 잘 뜨는데 왜? Uncaught TypeError: Cannot read properties of undefined (reading 'map') 가 뜨는 것인가? import React from 'react'; const UserList = ({ user }) => { console.log(user); // 0: {id: 1, username: '홍길동', email: '123@naver.com'} // 1: {id: 2, username: '김철수', email: '456@naver.com'} // 2: {id: 3, username: '김영희', email: '789@naver.com'} re..",
      textContents: [],
    },
  ]
  );

  return (
    <Template1List templates = { templates }/>
  )
}


export default App;
