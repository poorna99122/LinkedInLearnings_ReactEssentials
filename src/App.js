import logo from './logo.svg';
import './App.css';


function Header(props){
  console.log(props);
  return (
    <header>
      <h1>{props.Hname}'s kitchen</h1>
    </header>
  )
}


function Main(Props){
  return (
    <section>
      <p>We serve the most {Props.adjective} food around</p>
    </section>
  )
}


function Footer(Props){
  return (
    <footer>
      <p>Copyright {Props.year} </p>
    </footer>
  )
}




function App() {
  return (
    <div className="App">
    <Header Hname ="PCR"/>
    <Main adjective = "Amazing"/>
    <Footer year = {new Date().getFullYear()}/>

    </div>
  );
}

export default App;
