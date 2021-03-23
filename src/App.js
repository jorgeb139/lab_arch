<<<<<<< Updated upstream
import logo from './logo.svg';
=======
import React from "react";
>>>>>>> Stashed changes
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import Inicio from './pages/Inicio';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact from="/" render={props => <Inicio {...props} />} />
        {/* <Route exact path="/nosotros" render={props => <Prueba {...props} />} /> */}
      </Switch>
      <Footer/>
    </Router>
  );
}


>>>>>>> Stashed changes
