import React, { useEffect, useReducer, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";

// local imports
import { PlaneGeometryArgsProps } from "../types";

const cloudBlackSelection = {
  small: {
    standard: "/images/Clouds_Black_Small.png",
    long: "/images/Long_Clouds_Grey_Small.png",
  },
  medium: {
    standard: "/images/Clouds_Black_Medium.png",
    long: "/images/Long_Clouds_Grey_Medium.png",
  },
};

interface CloudDimensionsSelector {
  small: {
    standard: PlaneGeometryArgsProps;
    long: PlaneGeometryArgsProps;
  };
  medium: {
    standard: PlaneGeometryArgsProps;
    long: PlaneGeometryArgsProps;
  };
}

const cloudDimensionsSelection: CloudDimensionsSelector = {
  small: {
    standard: [2.31, 1.04],
    long: [5.17, 1.8],
  },
  medium: {
    standard: [4.62, 2.08],
    long: [7.48, 3.2],
  },
};

type CloudSize = "small" | "medium";
type CloudType = "standard" | "long";
type CloudDirection = "left" | "right";

interface CloudProps {
  size: CloudSize;
  type: CloudType;
  rest?: JSX.IntrinsicElements["mesh"];
  initialPos?: number;
  finalPos?: number;
  speed?: number;
  direction?: CloudDirection;
}

const reducer = (
  state: any,
  action: { size: CloudSize; type: CloudType }
): PlaneGeometryArgsProps => {
  // let boxDimensions: PlaneGeometryArgsProps = [1, 1];
  // switch (action.size) {
  //   case "small":
  //     boxDimensions = [2.31, 1.04];
  //     break;
  //   case "medium":
  //     boxDimensions = [4.62, 2.08];
  //     break;
  // }

  let boxDimensions: PlaneGeometryArgsProps =
    cloudDimensionsSelection[action.size][action.type];

  return boxDimensions;
};

const Cloud: React.FC<CloudProps> = ({
  size,
  type,
  initialPos,
  finalPos,
  speed,
  direction,
  rest,
}) => {
  const [boxDimensions, dispatch] = useReducer(reducer, [1, 1]);

  useEffect(() => {
    dispatch({ size: size, type: type });
  }, [size, type]);

  const mesh = useRef<THREE.Mesh>(null!);

  const imageTexture = useLoader(
    THREE.TextureLoader,
    cloudBlackSelection[size][type]
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
      mesh.current.translateX(speed || 0.025);
      // if (direction === "left") {
      //   // if speed is positive number, change to negative
      //   if (speed && speed > 0) {
      //     mesh.current.translateX(speed || -0.025);
      //   } else {
      //     mesh.current.translateX(speed || -0.025);
      //   } // end if
      // } else {
      //   // move the object to the right by default
      //   mesh.current.translateX(speed || 0.025);
      // } // end if
    } // end if
    // console.log(mesh.current.position.x);
  });

  return (
    <mesh {...rest} ref={mesh} scale={type === "long" ? 0.5 : 1}>
      <planeGeometry attach="geometry" args={boxDimensions} />
      {/* <meshBasicMaterial color="black" side={THREE.DoubleSide} /> */}
      <meshBasicMaterial
        attach="material"
        map={imageTexture}
        side={THREE.FrontSide}
        transparent
      />
    </mesh>
  );
};

export default Cloud;
