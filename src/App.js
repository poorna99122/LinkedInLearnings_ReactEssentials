import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.Hname}'s kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year} </p>
    </footer>
  );
}

const dishes = ["Macaroni and cheese", "Salmon", "Tofu with veg"];

function App() {
  return (
    <div className="App">
      <Header Hname="PCR" />
      <Main adjective="Amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
