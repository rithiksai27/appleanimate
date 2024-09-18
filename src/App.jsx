import { Canvas } from "@react-three/fiber";
import './style.css';
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  const isSmallScreen = window.innerWidth < 768; // Check if the screen is small

  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {["iphone", "ipad", "services", "ios", "mac", "products"].map((item, index) => (
          <a key={index} href="#" className="text-white font-[500] text-md capitalize">
            {item}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-1/2 left-1/2 -translate-x-1/2">
        <h3 className="text-7xl masked tracking-tighter font-[700]">macbook pro.</h3>
        <h5>oh so pro!</h5>
        <p className="text-center w-3/4">
          This is the first ever macbook pro which apple launched with full passion and some cool AI features in it. Which makes it attractive for a user to experience it and also worth the cost!
        </p>
      </div>
      <Canvas camera={{ fov: isSmallScreen ? 16 : 12, position: [0, -10, isSmallScreen ? 180 : 220] }}>
        <OrbitControls />
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr']} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
