import React from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="headerContainer">
          <NavBar />
        </header>
        <main className="mainContainer">
          <article className="articleContainer">
            <p>This is article 1</p>
          </article>
          <article className="articleContainer">
            <p>This is article 2</p>
          </article>
        </main>
        <footer className="footerContainer">
          <p>Website by Kent Claudio</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
