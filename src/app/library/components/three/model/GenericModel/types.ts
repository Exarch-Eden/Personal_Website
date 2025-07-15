import { PrimitiveProps } from "@/app/library/types";
import { ThreeElements } from "@react-three/fiber";

interface GenericModelProps {
    path: string;
    primitiveProps?: Omit<PrimitiveProps, "object">;
}

export type { GenericModelProps };
