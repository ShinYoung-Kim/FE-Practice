// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
// //ReactDOM.render : react로 render하게 해주는 거
// //argument로 what과 where을 넣어줌
// //append or append child와 유사한 개념

// ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//     document.getElementById("root")
// );

// //custom component
// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// };

// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// );

// //imperative한 vanilla js
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);
// //step by step으로 어떻게 추가해야하는지 알려줘야 한다.
// //element가 많아질수록 불리해진다.

// //declarative한 react
// ReactDOM.render(<h1 className="header">Hello, everyone!</h1>, document.getElementById("root"));

//JSX = javascript XML
//: html처럼 보이는 javascript
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
console.log(h1);

const element = <h1 className="header">Hello, everyone!</h1>;
console.log(element);
//=> javascript object가 뜬다. 
/*
$$typeof : Symbol(react.element)
key : null
props : {className: 'header', children: 'Hello, everyone!'}
ref : null
type : "h1"
_owner : null
_store : {validated: false}
_self : null
_source : null
[[Prototype]] : Object
*/
//=> JSX는 react가 이해할 수 있는 object를 반환하는 일종의 함수
//-> 화면에 표시할 수 있는 실제 element를 만드는 데 도움이 된다.

//React 특징 : wrap!
// ReactDOM.render(<h1 className="header">Hello, everyone!</h1><p></p>, 
//     document.getElementById("root")
//     );
//해당 코드는 uncaught syntaxError 발생 : adjacent jsx elements must be wrapped!
//여러 태그 연속적으로 넣고 싶다면 그들을 감싸는 부모 태그가 있어야 한다.

ReactDOM.render(<div>
    <h1 className="header">Hello, everyone!</h1>
    <p>paragraph!</p>
    </div>, 
    document.getElementById("root")
    );