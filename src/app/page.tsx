"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TownModel } from "./library";
import { OrbitControls } from "@react-three/drei";

const HeroSection = () => {
    return (
        <Canvas
            style={{ height: window.innerHeight, width: window.innerWidth }}
            orthographic
            camera={{ position: [10, 5, 10], zoom: 50 }}
            // orthographic camera is preferred for model showcase
            // camera={{ position: [100, 50, 100], fov: 50 }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1}
                    castShadow
                />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <TownModel />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
};

const Home = () => {
    return (
        <div className="flex min-h-screen border border-blue-500 items-center justify-center">
            <HeroSection />
        </div>
    );
};

export default Home;
