import React from "react";
import ReactDOM from "react-dom";

import style from "./app.css";

const Index = () => {
  return <div className={style.helloClass}><span className={style.testSass}>Hello React STACK!</span></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));