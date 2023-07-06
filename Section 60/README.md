# Section 60: Introducing React
 
Introducing React

# What I Learned

- Core and minimal react features

<img src="minimalReact.JPG" alt="alt text" width="400"/>

- React lightweight library from component


- React components are combined with logic

<img src="compents.JPG" alt="alt text" width="400"/>

- React components are used in other components

- React is more ecosystem is more than library

- Easiest way to get going is thought sandbox
	- [Link](https://codesandbox.io/signin?continue=/dashboard)

<img src="react-scriptIncludes.JPG" alt="alt text" width="500"/>

- 1. `react-script` includes much of decencies

<img src="htmlInsideJs.JPG" alt="alt text" width="500"/>

- 1. HTML inside Js, normally such would brake, but not in react.


- In react we write function which knows how to render them self

<img src="writingFunctions.JPG" alt="alt text" width="400"/>

- We are using **JSX** to transpile our html to js in the end

<img src="jsx.JPG" alt="alt text" width="400"/>

- Whiteout JSX writing html inside js would be illegal

<img src="babelInAction.JPG" alt="alt text" width="700"/>

- 1. JSX uses **Babel** to converts into **real JS** or **legal JS**

- [Babel](https://babeljs.io/)

- JSX have the lot of different rules, but it makes your life **lot of easier**

- React app structure
	- Have one **App** component and under this get other components rendered

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App /> // LOOK HERE
  </StrictMode>
);

```

- Our React components are spitted to this `<App />` in the end of the day


```
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Test</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```
- We are defining our components as functions

- For making our own components we write function that returns **JSX**

- Making our component should return JSX and first letter is uppercase

- Making our first component

```
function Hello() {
  return <h1>Hello World</h1>
}
```
- Then we call it in our App 

