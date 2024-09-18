import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const MacContainer = () => {
  const model = useGLTF("./mac.glb");
  const tex = useTexture("./red.jpg");
  const meshes = {};

  // Traverse the model to get references to the meshes
  model.scene.traverse(e => {
    if (e.isMesh) meshes[e.name] = e;
  });

  // Set up material properties
  if (meshes.matte) {
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
  }

  const scroll = useScroll();

  useFrame(() => {
    // Update the y position based on the scroll offset
    const scrollPosition = -10 + scroll.offset * 20; // Adjust multiplier as needed
    model.scene.position.y = scrollPosition; // Move the model vertically
  });

  return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive object={model.scene} />
  );
};

export default MacContainer;
