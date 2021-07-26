import React, { useEffect, useReducer, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";

// local imports
import { PlaneGeometryArgsProps } from "../types";

const cloudBlackSelection = {
  small: "/images/Clouds_Black_Small.png",
  medium: "/images/Clouds_Black_Medium.png",
};

type CloudSize = "small" | "medium";
type CloudDirection = "left" | "right";

interface CloudProps {
  size: CloudSize;
  rest?: JSX.IntrinsicElements["mesh"];
  initialPos?: number;
  finalPos?: number;
  speed?: number;
  direction?: CloudDirection;
}

const reducer = (
  state: any,
  action: { type: CloudSize }
): PlaneGeometryArgsProps => {
  let boxDimensions: PlaneGeometryArgsProps = [1, 1];
  switch (action.type) {
    case "small":
      boxDimensions = [2.31, 1.04];
      break;
    case "medium":
      boxDimensions = [4.62, 2.08];
      break;
  }

  return boxDimensions;
};

const Cloud: React.FC<CloudProps> = ({
  size,
  initialPos,
  finalPos,
  speed,
  direction,
  rest,
}) => {
  const [boxDimensions, dispatch] = useReducer(reducer, [1, 1]);

  useEffect(() => {
    dispatch({ type: size });
  }, [size]);

  const mesh = useRef<THREE.Mesh>(null!);

  const imageTexture = useLoader(
    THREE.TextureLoader,
    cloudBlackSelection[size]
  );

  // render loop for the mesh
  useFrame((state, delta) => {
    // for testing purposes
    // mesh.current.position.x = 0;
    // mesh.current.rotation.x += 0.01;
    // console.log("updating");

    // TODO: Account for:
    // 1. initial position
    // 2. final position
    // 3. speed
    // 4. direction
    // 5. default values

    // reset the object position once it moves right a certain distance
    if (mesh.current.position.x > 12) {
      mesh.current.position.x = initialPos ? initialPos : 0;
    } else {
      if (direction === "left") {
        // if speed is positive number, change to negative
        if (speed && speed > 0) {
          mesh.current.translateX(speed || -0.025);
        } else {
          mesh.current.translateX(speed || -0.025);
        } // end if
      } else {
        // move the object to the right by default
        mesh.current.translateX(speed || 0.025);
      } // end if
    } // end if
    // console.log(mesh.current.position.x);
  });

  return (
    <mesh {...rest} ref={mesh}>
      <planeGeometry attach="geometry" args={boxDimensions} />
      {/* <meshBasicMaterial color="black" side={THREE.DoubleSide} /> */}
      <meshBasicMaterial
        attach="material"
        map={imageTexture}
        color="#D6D6D6"
        side={THREE.FrontSide}
        transparent
      />
    </mesh>
  );
};

export default Cloud;
