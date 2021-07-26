import React, { useEffect, useReducer, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";

const cloudBlackSelection = {
  small: "/images/Clouds_Black_Small.png",
  medium: "/images/Clouds_Black_Medium.png",
};

type CloudSize = "small" | "medium";
type PlaneGeometryArgsProps = JSX.IntrinsicElements["planeGeometry"]["args"];

interface CloudProps {
  size: CloudSize;
  rest?: JSX.IntrinsicElements["mesh"];
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

const Cloud: React.FC<CloudProps> = ({ size, rest }) => {
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

    // reset the object position once it moves right a certain distance
    if (mesh.current.position.x > 8) {
      mesh.current.position.x = 0;
    } else {
      // move the object to the right
      mesh.current.translateX(0.05);
    }
    // console.log(mesh.current.position.x);
  });

  return (
    <mesh {...rest} ref={mesh}>
      <planeGeometry attach="geometry" args={boxDimensions} />
      {/* <meshBasicMaterial color="black" side={THREE.DoubleSide} /> */}
      <meshBasicMaterial
        attach="material"
        map={imageTexture}
        side={THREE.FrontSide}
        transparent
      />
      {/* <meshBasicMaterial attachArray="material" map={imageTexture} />
      <meshBasicMaterial attachArray="material" map={imageTexture} />
      <meshBasicMaterial attachArray="material" map={imageTexture} />
      <meshBasicMaterial attachArray="material" map={imageTexture} />
      <meshBasicMaterial attachArray="material" map={imageTexture} /> */}
    </mesh>
  );
};

export default Cloud;
