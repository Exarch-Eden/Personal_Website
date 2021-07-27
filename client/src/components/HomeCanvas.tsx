import { Canvas, Vector3 } from "@react-three/fiber";
import React, { Suspense } from "react";
import Cloud from "./Cloud";
import Mountains from "./Mountains";

// css
import "../styles/HomeCanvas.css";

// TODO: Create function takes in an array of objects with info
//  necessary to render a plane object
// example: info regarding vector, type of object (cloud or mountain),
//  and necessary parameters for said plane object

const CloudSmallLeft1Position: Vector3 = [-14, 1, 0.5];
const CloudMediumLeft1Position: Vector3 = [-20, -1, 2];
const Mountains1Position: Vector3 = [0, 0, 0];
const MountainsFrontPosition: Vector3 = [0, -0.1, 1];
const MountainsBackPosition: Vector3 = [0, -1.75, 0];

const CloudMediumLeft1 = {
  position: CloudMediumLeft1Position,
  scale: 0.25
};

const CloudSmallLeft1 = {
  position: CloudSmallLeft1Position,
  scale: 0.5
};

const Mountains1 = {
  position: Mountains1Position,
};
const MountainsFront = {
  position: MountainsFrontPosition,
  scale: 0.79
};
const MountainsBack = {
  position: MountainsBackPosition,
};

const HomeCanvas = () => {
  return (
    <Canvas className="canvas">
      {/* <ambientLight /> */}
      {/* <pointLight position={pointLightVector} /> */}
      <Suspense fallback={null}>
        <Cloud
          size="medium"
          type="long"
          rest={CloudMediumLeft1}
          initialPos={-17}
        />
        <Cloud
          size="small"
          type="long"
          rest={CloudSmallLeft1}
          initialPos={-14}
        />
        {/* <Mountains type="all" rest={Mountains1} /> */}
        <Mountains type="front" rest={MountainsFront} />
        <Mountains type="back" rest={MountainsBack} />
      </Suspense>
    </Canvas>
  );
};

export default HomeCanvas;
