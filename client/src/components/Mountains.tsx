import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { PlaneGeometryArgsProps } from "../types";

const mountainSrc = "/images/Mountains_V1.png";

interface MountainProps {
  rest?: JSX.IntrinsicElements["mesh"];
}

const planeDimensions: PlaneGeometryArgsProps = [16.14, 7.68];

const Mountains: React.FC<MountainProps> = ({ rest }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  const imageTexture = useLoader(THREE.TextureLoader, mountainSrc);

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
