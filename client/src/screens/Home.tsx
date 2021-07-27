import React, { Suspense } from "react";
import ComplexCard from "../components/ComplexCard";
import { Canvas, Vector3 } from "@react-three/fiber";

// css
import "../styles/Universal.css";
import "../styles/Home.css";

import Box from "../components/Box";
import Cloud from "../components/Cloud";
import HomeCanvas from "../components/HomeCanvas";

const CLOUD_IMAGE_SRC = "/images/Clouds_Black.png";

const pointLightVector: Vector3 = [10, 10, 10];
// const CloudSmallLeft1Position: Vector3 = [-5, 0, 0];
// const CloudMediumLeft1Position: Vector3 = [0, 0, 0];

const Home = () => {
  

  return (
    <article className="homeContainer articleContainer">
      {/* <div className="titleContainer">
        <p>Home page</p>
      </div> */}
      <div className="canvasContainer">
        {/* <p>Main content</p> */}
        {/* <div className="cardLayoutContainer paddedContainer"></div> */}
        <HomeCanvas />
      </div>
    </article>
  );
};

export default Home;
