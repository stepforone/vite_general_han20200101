import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const btn = useRef(0);
  function handleClick() {
    setCount(count + 1);
    // requestAnimationFrame(() => {
    //   console.log("count", count);
    // });
  }

  return (
    <>
      <div id="app">
        <button className="btn" onClick={handleClick}>
          欢迎来到我的世界{count}次!
        </button>
      </div>
    </>
  );
}

export default App;
