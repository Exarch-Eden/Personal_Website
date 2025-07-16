"use client";

import { useGLTF } from "@react-three/drei";
import { GenericModelProps } from "./types";

const GenericModel: React.FC<GenericModelProps> = ({
    path,
    primitiveProps,
}) => {
    const gltf = useGLTF(path);

    const { scene } = gltf

    return <primitive scale={[1, 1, 1]} {...primitiveProps} object={scene} />;
};

export default GenericModel;
