import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import TimerMobxApp from "./TimerMobxApp";
import TodoMobxApp from "./TodoMobxApp";

ReactDOM.render(
  <React.StrictMode>
    {/* <TimerMobxApp /> */}
    <TodoMobxApp />
  </React.StrictMode>,
  document.getElementById("root")
);
