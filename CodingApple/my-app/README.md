### 리액트의 장점
1. 웹앱의 개념
    - 모바일 앱과 사용성이 비슷함 
    - 새로고침 없이도 내용물이 변화함
    - 가장 대표적인 예 : SNS 서비스 
    - 쉽게 만들 수 있게 해주는 라이브러리 : react, angular, vue
2. 웹앱의 장점
    - 비즈니스 관점 : 구매 전환률이 높다 등
    - 웹앱이므로 앱으로 만들기도 편함 (리액트 네이티브, PWA)
    - 앱처럼 뛰어난 UX 


### 리액트의 설치
1. `npx create-react-app project이름`
    - npx는 nodejs가 설치되어있어야 사용이 가능한 라이브러리 설치 도와주는 명령어
    - create-react-app은 리액트 셋팅이 완료되어있는 boilerplate

2. App.js가 main page에 들어갈 HTML을 짜는 곳 (index.html로 생각하면 된다)

3. project 폴더 오픈 후 `npm start` 

* node_modules : 라이브러리 모은 폴더 
* public 폴더 : static 파일 보관함 -> 압축이 되지 않는 부분
* package.json : 설치한 라이브러리 목록 (이름과 버전 확인 가능)

### JSX
: 리액트에서 사용하는 HTML대용
* class가 아닌 className을 사용해야 함
    - js 내부이므로 class라고 사용하면 예약어가 된다. 

### 데이터 바인딩
받아온 데이터 등을 HTML에 꽂아넣는 것
- 전통적인 방법
    - `document.getElementById().innerHTML = '';`을 통해 직접 바꿔줌
- 리액트, 뷰, 앵귤러는 데이터 바인딩이 훨씬 직관적이고 쉬워짐 
    - JSX에서 원하는 부분에 {변수명, 함수 등} 을 하면 됨
    => 쉽게 HTML 동적으로 사용 가능, 속성 내부에서도 사용 가능 


### 리액트에서 이미지
- image src에서 경로 주소를 입력하는 대신 import문을 사용하여 사용 가능
- ex. import logo from './logo.svg';
- <img src={logo}>

### 리액트에서 style 속성 집어넣을 때
- object 형식으로 집어넣을 것! (style은 무조건 중괄호)
- style = {{
    color : 'blue',
    fontSize : '30px'
}}
- 또는 변수로 따로 빼서 넣는 것도 가능 

### State
: 리액트에서 데이터를 저장할 수 있는 또 다른 방법 
- useState : 내부 함수 사용하는 것
    - useState('~'); 하면
    - ['~', 해당 데이터를 정정하기 위한 함수]가 생김 
    - 문자, 숫자, array, object 등 모두 가능 
- state를 사용하는 이유?
    - state로 만들어진 데이터가 바뀌면 HTML이 자동으로(새로 고침없이도) 재렌더링 된다. 
    - 따라서 자주 바뀌는 중요한 데이터를 변수 대신 state로 저장한다. 

### destructing
- array나 object에 있던 자료를 변수에 쉽게 담기 위해 사용

### eslint
: 잘못된 코딩 관습을 바로잡아주는 것
- 원하지 않으면
    - /* eslint-disable */ 적기