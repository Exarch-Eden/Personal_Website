import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="headerContainer">
        <p>This is header</p>
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
        <p>This is footer</p>
      </footer>
    </div>
  );
}

export default App;
