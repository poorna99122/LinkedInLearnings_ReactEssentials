import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // React.createElement("h1",{style: {color:"blue"} }, "Heyyy Everyone!"),
  // React.createElement(
  //   "ul", 
  //   null ,
  //   React.createElement("li", null, "Monday"),
  //   React.createElement("li", null, "Tuesday"),
  //   React.createElement("li", null, "Wednesday"),
  //   React.createElement("li", null, "Thursday"),
  //   React.createElement("li", null, "Friday"),
  //   React.createElement("li", null, "Saturday"),
  //   React.createElement("li", null, "Sunday"),



  // ),

//Instead of writing like as above we can write by Using JSX like as below
 
// <ul>
//   <li>Monday</li>
//   <li>Tuesday</li>
//   <li>Wednesday</li>
//   <li>Thursday</li>
//   <li>Friday</li>
//   <li>Satruday</li>
//   <li>Sunday</li>
// </ul>,

<App></App>,
  document.getElementById("root")
);
