import { Canvas, Vector3 } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";

// local imports
import Cloud from "./Cloud";
import Mountains from "./Mountains";
import HomeText from "../text/HomeText";

// css
import "../styles/HomeCanvas.css";

// TODO: Create function takes in an array of objects with info
//  necessary to render a plane object
// example: info regarding vector, type of object (cloud or mountain),
//  and necessary parameters for said plane object

const CameraPosition: Vector3 = [0, 0, 30];
const CloudSmallLeft1Position: Vector3 = [-14, 1, 0.5];
const CloudMediumLeft1Position: Vector3 = [-20, -1, 2];
const Mountains1Position: Vector3 = [0, 0, 0];
const MountainsFrontPosition: Vector3 = [0, 0.9, 1];
const MountainsBackPosition: Vector3 = [0, 0, 0];

const CloudMediumLeft1 = {
  position: CloudMediumLeft1Position,
  scale: 0.5,
};

const CloudSmallLeft1 = {
  position: CloudSmallLeft1Position,
  scale: 0.5,
};

const Mountains1 = {
  position: Mountains1Position,
};

const MountainsFront = {
  position: MountainsFrontPosition,
  // scale: 0.79
};
const MountainsBack = {
  position: MountainsBackPosition,
  scale: 1.1,
};

const CanvasCamera = {
  position: CameraPosition,
};

const GroupTop = () => {
  const groupPosition: Vector3 = [0, 0, 0];

  return (
    <group position={groupPosition}>
      <Html fullscreen>
        <div className="homeIntroContainer">
          <h1 className="homeIntroHeader">{HomeText.title}</h1>
          <p>{HomeText.p1}</p>
        </div>
      </Html>
    </group>
  );
};

const GroupTopMid = () => {
  return (
    <group>
      <Cloud
        size="medium"
        type="long"
        rest={CloudMediumLeft1}
        initialPos={-17}
      />
      <Cloud size="small" type="long" rest={CloudSmallLeft1} initialPos={-14} />
      {/* <Mountains type="all" rest={Mountains1} /> */}
      <Mountains type="front" rest={MountainsFront} />
      <Mountains type="back" rest={MountainsBack} />
    </group>
  );
};

const GroupBotMid = () => {
  const backgroundPosition: Vector3 = [0, -52.975, 0];

  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <group>
      <mesh ref={mesh} position={backgroundPosition}>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial color="black" side={THREE.FrontSide} />
      </mesh>
    </group>
  );
};

const HomeCanvas = () => {
  return (
    <Canvas className="canvas" camera={CanvasCamera}>
      {/* <ambientLight /> */}
      {/* <pointLight position={pointLightVector} /> */}
      <Suspense fallback={null}>
        <GroupTop />
        <GroupTopMid />
        <GroupBotMid />
      </Suspense>
    </Canvas>
  );
};

export default HomeCanvas;
