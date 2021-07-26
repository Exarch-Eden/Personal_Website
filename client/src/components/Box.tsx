import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/**
 * Test object for React Three.js library.
 * 
 * @param props Props to be passed to the mesh element within the Box.
 * @returns A Box mesh element that rotates perpetually.
 */
const Box = (props: JSX.IntrinsicElements["mesh"]) => {
  // three things required to display objects:
  // 1. scene
  // 2. camera
  // 3. renderer

  // applies material to the 3d object
  const mesh = useRef<THREE.Mesh>(null!);

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // render loop that rotates the box objects
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
