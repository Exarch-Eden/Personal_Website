import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useReducer, useRef } from "react";
import * as THREE from "three";
import { PlaneGeometryArgsProps } from "../types";

const mountainSelection = {
  all: "/images/Mountains_All.png",
  front: "/images/Mountains_Front.png",
  back: "/images/Mountains_Back.png",
};

type MountainType = "front" | "back" | "all";

interface MountainProps {
  type: MountainType;
  rest?: JSX.IntrinsicElements["mesh"];
}

// const planeDimensions: PlaneGeometryArgsProps = [16.14, 7.68];

const reducer = (
  state: any,
  action: { type: MountainType }
): PlaneGeometryArgsProps => {
  let planeDimensions: PlaneGeometryArgsProps = [1, 1];
  switch (action.type) {
    case "all":
      planeDimensions = [16.14, 7.68];
      break;
    case "front":
      planeDimensions = [14.955, 7.68];
      break;
    case "back":
      planeDimensions = [16.14, 5.93];
      break;
  }

  return planeDimensions;
};

const Mountains: React.FC<MountainProps> = ({ type, rest }) => {
  const [planeDimensions, dispatch] = useReducer(reducer, [1, 1]);

  useEffect(() => {
    dispatch({ type: type });
  }, [type]);

  const mesh = useRef<THREE.Mesh>(null!);

  const imageTexture = useLoader(THREE.TextureLoader, mountainSelection[type]);

  useFrame((state, delta) => {});

  return (
    <mesh {...rest} ref={mesh}>
      <planeGeometry attach="geometry" args={planeDimensions} />
      <meshBasicMaterial
        attach="material"
        map={imageTexture}
        side={THREE.FrontSide}
        transparent
      />
    </mesh>
  );
};

export default Mountains;
