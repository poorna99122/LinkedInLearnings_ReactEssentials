import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function AppTwo() {
  return <h1> This is the second App </h1>;
}

ReactDOM.render(
  // <React.Fragment>
  //   <App />
  //   <AppTwo />
  // </React.Fragment>,

//   <>
//   <App />
//   <AppTwo />
// </>,

<App authorized={true}/>,
 
  document.getElementById("root")
);
