import { Canvas, Vector3 } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cloud from "./Cloud";
import Mountains from "./Mountains";

// css
import "../styles/HomeCanvas.css"

// TODO: Create function takes in an array of objects with info
//  necessary to render a plane object
// example: info regarding vector, type of object (cloud or mountain),
//  and necessary parameters for said plane object

const CloudSmallLeft1Position: Vector3 = [-14, 0, 1];
const CloudMediumLeft1Position: Vector3 = [-17, -1, 1];
const Mountains1Position: Vector3 = [0, 0, 0];

const CloudMediumLeft1 = {
  position: CloudMediumLeft1Position,
};
const CloudSmallLeft1 = {
  position: CloudSmallLeft1Position,
};

const Mountains1 = {
  position: Mountains1Position,
};

const HomeCanvas = () => {
  return (
    <Canvas className="canvas">
      {/* <ambientLight /> */}
      {/* <pointLight position={pointLightVector} /> */}
      <Suspense fallback={null}>
        <Cloud size="medium" rest={CloudMediumLeft1} initialPos={-17} />
        <Cloud size="small" rest={CloudSmallLeft1} initialPos={-14} />
        <Mountains rest={Mountains1} />
      </Suspense>
    </Canvas>
  );
};

export default HomeCanvas;