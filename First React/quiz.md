1. Why do we need to 'import React from "react"' in our files?
JSX syntax가 React에 정의되어 있기 때문 

2. If I were to console.log(page) in index.js, what would show up?
A js object. React elements that describe what react should eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
);
```
We need our JSX to be nested under a single parent element -> 나중에 fragments (wrap하기 위한 일종의 빈 태그)를 배운다. 

4. What does it mean for something to be "declarative" instead of "imperative"?
declarative means I can tell the computer WHAT to do and expect it to handle the details.
Imperative means I need to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something larger/greater than the individual pieces.