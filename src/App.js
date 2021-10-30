import logo from './logo.svg';
import './App.css';


function Header(){
  return (
    <header>
      <h1>Eve's kitchen</h1>
    </header>
  )
}


function Main(){
  return (
    <section>
      <p>We serve the most delicious food around</p>
    </section>
  )
}


function Footer(){
  return (
    <footer>
      <p> It's true </p>
    </footer>
  )
}




function App() {
  return (
    <div className="App">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>

    </div>
  );
}

export default App;
