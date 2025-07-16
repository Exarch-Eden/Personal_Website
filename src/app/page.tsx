"use client"

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TownModel } from "./library";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
    return (
        <div className="flex min-h-screen border border-blue-500 items-center justify-center">
            <Canvas style={{ height: window.innerHeight, width: window.innerWidth }} camera={{ position: [0,0,5], fov: 75 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10,10,5]} intensity={1} castShadow />
                    <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10,-10,-10]} intensity={0.5} />
                    <TownModel />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    )
};

export default Home;
