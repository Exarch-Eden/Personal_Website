"use client";

import { useGLTF } from "@react-three/drei";
import { GenericModelProps } from "./types";
import { useEffect } from "react";

const GenericModel: React.FC<GenericModelProps> = ({
    path,
    primitiveProps,
}) => {
    // const { scene, materials } = useGLTF(path);
    const gltf = useGLTF(path);

    const { scene, materials } = gltf

    useEffect(() => {
        console.log('🔍 GLB Debug Info:');
        console.log('📁 Full GLTF:', );
        console.log('🎨 Materials:', materials);
        // console.log('🖼️ Textures:', textures);
        
        // Check materials in detail
        Object.entries(materials || {}).forEach(([name, material]: [string, any]) => {
            console.log(`\n📋 Material "${name}":`);
            console.log('  Type:', material.type);
            console.log('  Color:', material.color);
            console.log('  Map (diffuse):', material.map);
            console.log('  Normal Map:', material.normalMap);
            console.log('  Metalness:', material.metalness);
            console.log('  Roughness:', material.roughness);
            
            if (material.map) {
                console.log('  ✅ Has diffuse texture');
                console.log('  Texture source:', material.map.image?.src || 'embedded');
            } else {
                console.log('  ❌ No diffuse texture');
            }
        });

        // Traverse scene and check each mesh
        scene.traverse((child: any) => {
            if (child.isMesh) {
                console.log(`\n🔺 Mesh: "${child.name || 'unnamed'}"`);
                console.log('  Material:', child.material?.name || 'unnamed material');
                console.log('  Material type:', child.material?.type);
                
                if (child.material) {
                    console.log('  Material color:', child.material.color);
                    console.log('  Has map:', !!child.material.map);
                    console.log('  Vertex colors:', child.material.vertexColors);
                    
                    // Check geometry for vertex colors
                    if (child.geometry?.attributes?.color) {
                        console.log('  ✅ Geometry has vertex colors');
                        // Enable vertex colors
                        child.material.vertexColors = true;
                    } else {
                        console.log('  ❌ No vertex colors in geometry');
                    }
                    
                    // Force material update
                    child.material.needsUpdate = true;
                }
            }
        });
    }, [scene, materials, gltf]);


    return <primitive scale={[1, 1, 1]} {...primitiveProps} object={scene} />;
};

export default GenericModel;
