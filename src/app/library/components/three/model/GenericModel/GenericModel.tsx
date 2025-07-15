"use client";

import { useGLTF } from "@react-three/drei";
import { GenericModelProps } from "./types";

const GenericModel: React.FC<GenericModelProps> = ({
    path,
    primitiveProps,
}) => {
    const { scene } = useGLTF(path);

    return <primitive {...primitiveProps} object={scene} />;
};

export default GenericModel;
