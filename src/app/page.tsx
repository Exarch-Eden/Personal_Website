"use client"

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BridgeGardenModel, HighwayLandscapeModel, TownModel } from "./library";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
    return (
        <div className="flex min-h-screen border border-blue-500 items-center justify-center">
            <Canvas style={{ height: window.innerHeight, width: window.innerWidth }} camera={{ position: [0,0,5], fov: 75 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10,10,5]} intensity={1} castShadow />
                    {/* <spotLight position={[10,10,10]} angle={0.15} penumbra={1} /> */}
                    <pointLight position={[-10,-10,-10]} intensity={0.5} />
                    {/* <BridgeGardenModel /> */}
                                        <mesh position={[2, 0, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                    <mesh position={[-2, 0, 0]}>
                        <sphereGeometry args={[0.5]} />
                        <meshStandardMaterial color="blue" />
                    </mesh>
                    <HighwayLandscapeModel />
                    {/* <TownModel /> */}
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    )
};

export default Home;
