import React, { Suspense } from "react";
import ComplexCard from "../components/ComplexCard";
import { Canvas, Vector3 } from "@react-three/fiber";

// css
import "../styles/Universal.css";
import "../styles/Home.css";

import Box from "../components/Box";
import Cloud from "../components/Cloud";

const CLOUD_IMAGE_SRC = "/images/Clouds_Black.png";

const pointLightVector: Vector3 = [10, 10, 10];
// const CloudSmallLeft1Position: Vector3 = [-5, 0, 0];
// const CloudMediumLeft1Position: Vector3 = [0, 0, 0];
const CloudSmallLeft1Position: Vector3 = [-1.2, 0, 0];
const CloudMediumLeft1Position: Vector3 = [-3.6, -1, 0];

const Home = () => {
  const CloudMediumLeft1 = {
    position: CloudMediumLeft1Position,
  };
  const CloudSmallLeft1 = {
    position: CloudSmallLeft1Position,
  };

  return (
    <article className="articleContainer">
      {/* <div className="titleContainer">
        <p>Home page</p>
      </div> */}
      <div className="canvasContainer">
        {/* <p>Main content</p> */}
        {/* <div className="cardLayoutContainer paddedContainer"></div> */}
        <Canvas className="canvas">
          {/* <img src={CLOUD_IMAGE_SRC} alt="Clouds" /> */}
          {/* <ComplexCard /> */}
          {/* <ambientLight /> */}
          {/* <pointLight position={pointLightVector} /> */}
          <Suspense fallback={null}>
            <Cloud size="medium" rest={CloudMediumLeft1} />
            <Cloud size="small" rest={CloudSmallLeft1} />
          </Suspense>
        </Canvas>
      </div>
    </article>
  );
};

export default Home;
