1. What is a React component?
A function that returns React elements.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
대문자로 시작해야 한다

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
        <nav>
        <img src = "~"/>
        </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
함수 형태로 부르지 말고 태그처럼 <> 이렇게 불러내야 한다. 
