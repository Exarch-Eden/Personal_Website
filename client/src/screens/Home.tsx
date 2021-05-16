import React from "react";
import ComplexCard from "../components/ComplexCard";

// css
import "../styles/Universal.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <article className="articleContainer">
      <div className="titleContainer">
        <p>Home page</p>
      </div>
      <div>
        <p>Main content</p>
        <div className="cardLayoutContainer paddedContainer">
          <ComplexCard />
        </div>
      </div>
    </article>
  );
};

export default Home;
