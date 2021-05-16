import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

// css
import "./styles/App.css";
import "./styles/Universal.css";

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
        <footer className="footerContainer paddedContainer">
          <p>Website by Kent Claudio</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
