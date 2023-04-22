// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
// //ReactDOM.render : react로 render하게 해주는 거
// //argument로 what과 where을 넣어줌
// //append or append child와 유사한 개념

// ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//     document.getElementById("root")
// );

//custom component
function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
};

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
);