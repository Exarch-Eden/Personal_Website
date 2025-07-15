import GenericModel from "../GenericModel";

const BridgeGardenModel = () => {
    return (
        <GenericModel
            path="./models/japanese_bridge_garden/scene.gltf"
            primitiveProps={{
                position: [0,0,0],
                rotation: [0,0,0],
                scale: [0.5,0.5,0.5]
            }}
        />
    )
};

export default BridgeGardenModel;
