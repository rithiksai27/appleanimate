import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const MacContainer = () => {
  const model = useGLTF("./mac.glb");
  const tex = useTexture("./red.jpg");
  const meshes = {};

  model.scene.traverse(e => {
    if (e.isMesh) meshes[e.name] = e;
  });

  if (meshes.matte) {
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
  }

  const scroll = useScroll();

  useFrame(() => {
    const scrollPosition = -10 + scroll.offset * 20;
    model.scene.position.y = scrollPosition;
    model.scene.rotation.y += 0.01; // Rotate the model slightly
  });

  return <primitive object={model.scene} />;
};

export default MacContainer;
