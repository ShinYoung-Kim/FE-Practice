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

//imperative한 vanilla js
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);
//step by step으로 어떻게 추가해야하는지 알려줘야 한다.
//element가 많아질수록 불리해진다.

//declarative한 react
ReactDOM.render(<h1 className="header">Hello, everyone!</h1>, document.getElementById("root"));