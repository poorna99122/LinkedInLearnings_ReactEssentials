import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router} from "react-router-dom"

// const  [mostImportantItem, second , third] = ["boots","tent","headlamp"];
// console.log(mostImportantItem, second , third);

// function AppTwo() {
//   return <h1> This is the second App </h1>;
// }

// ReactDOM.render(
//   // <React.Fragment>
//   //   <App />
//   //   <AppTwo />
//   // </React.Fragment>,

//   //   <>
//   //   <App />
//   //   <AppTwo />
//   // </>,

//   <App login="poorna99122" />,

//   document.getElementById("root")
// );



ReactDOM.render(
 <Router>
  <App/>

 </Router>,


  document.getElementById("root")
);
