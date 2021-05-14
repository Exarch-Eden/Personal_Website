import React from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="headerContainer">
          <NavBar />
        </header>
        <main className="mainContainer">
          <Routes />
        </main>
        <footer className="footerContainer">
          <p>Website by Kent Claudio</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
