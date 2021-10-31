import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./Restaurant.jpg";
import React, { useState, useEffect, useReducer } from "react";
import {Routes, Route} from "react-router-dom"

import { Home, About, Events, Contact } from "./pages"











// function Header(props) {
//   console.log(props);
//   return (
//     <header>
//       <h1>{props.Hname}'s kitchen</h1>
//     </header>
//   );
// }

// function Main(props) {
//   return (
//     <section>
//       <p>We serve the most {props.adjective} food around</p>
//       <img src={Restaurant} alt="Restaurant" height={200} />
//       {/* <img src="https://github.com/poorna99122.png" alt="Restaurant" height={200} /> */}
//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish) => (
//           <li key={dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// function Footer(props) {
//   return (
//     <footer>
//       <p>Copyright {props.year} </p>
//     </footer>
//   );
// }

// const dishes = ["Macaroni and cheese", "Salmon", "Tofu with veg" , "Minestrone"];

// const dishObjects = dishes.map((dish,i)=>({id : 1, title : dish}));
// console.log(dishObjects);

// function App() {
//   return (
//     <div className="App">
//       <Header Hname="PCR" />
//       <Main adjective="Amazing" dishes={dishObjects} />
//       <Footer year={new Date().getFullYear()} />
//     </div>
//   );
// }

// function SecretComponent() {
//   return <h1> Super secret information for authorized users only </h1>;
// }

// function RegularComponent() {
//   return <h1>Everyone can see this component.</h1>;
// }

// function App(props) {

//     return(
//       <>
//     {props.authorized ? <SecretComponent/> : <RegularComponent /> }
//       </>
//     )

//   }

// function App() {
//   const [emotion ,setEmotion] = useState("happy");
//   const [secondary ,setSecondary] = useState("tired");

//   useEffect(()=>{
//     console.log(`It's ${emotion} around here!`);
//   }, [emotion] )

//   useEffect(()=>{
//     console.log(`It's ${secondary} around here!`);
//   }, )

//   return(
//     <>
//     <h1>Current state is  {emotion} and {secondary} </h1>
//     <button onClick={()=> setSecondary("crabby")}>crabby</button>

//     <button onClick={()=> setEmotion("happy")}>happy</button>
//     <button onClick={()=> setEmotion("frustrated")}>Frustrate</button>
//     <button onClick={()=> setEmotion("enthusiastic")}>Enthuise</button>

//     </>
//   )

// }

// function App() {
//   const [checked, toggle] = useReducer(
//     (checked) => !checked,
//     false
//     );





//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={toggle }
//       />

      
//       <p>{checked ? "checked":"not checked"}</p>
//     </>
//   );
// }




// function App( {login} ) {
//   const [data, setData] = useState(null);
//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState(null);



//   useEffect(() => {

//     if(!login) return;
//     setloading(true);


//     fetch(`https://api.github.com/users/${login}`)
//         .then((response) => response.json())
//         .then(setData)
//         .then(() => setloading(false))
//         .catch(seterror)
//   }, [login] );

//   if(loading) return <h1>Loading ....</h1>
//   if(error) 
//     return <pre>{JSON.stringify(error, null, 2)}</pre>;

  
//   if(!data) return null;

//     return (
//     <div>
//       <h1>{data.login}</h1>
//       <h1>{data.id}</h1>
//       <img alt={data.login} src={data.avatar_url}></img>
//       </div>
//     );
  

//   return <div>No User available </div>


// }




// function App() {




 
  

//     return (
//     <div>
//       <h1>Hello React Testing Library</h1>

//       </div>
//     );
  



// }




function App() {




 
  

  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />

    </Routes>

    </div>
  );




}








export default App;
