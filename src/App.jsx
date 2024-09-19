import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import './style.css';
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  const isSmallScreen = window.innerWidth < 768;

  useEffect(() => {
    const audio = new Audio('/music.mp3'); // Path is correct
    audio.loop = true; // Loop the audio
    audio.play().catch(err => {
      console.error("Error playing audio:", err);
    });
  }, []);

  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display'] relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1678795014611-1a3193c7facd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute flex flex-col items-center text-white top-1/4 left-1/2 -translate-x-1/2">
        <h3 className="text-8xl masked tracking-tighter font-[700] animate-bounce">macbook pro.</h3>
        <h5 className="text-2xl mt-2 opacity-90 animate-fade">Unleash Your Creativity.</h5>
        <p className="text-center w-3/4 mt-4 opacity-80 transition-opacity duration-300 ease-in-out animate-fade">
          Discover the MacBook Pro—where cutting-edge technology meets unparalleled design. Experience a world of possibilities that redefine productivity and creativity. Get ready to turn your ideas into reality!
        </p>
      </div>

      {/* Corner Statements */}
      <div className="corner-text top-left animate-throw">Seamless Performance, Endless Possibilities.</div>
      <div className="corner-text top-right animate-throw">MacBook: The Future of Work.</div>
      <div className="corner-text bottom-left animate-throw">Performance Meets Perfection.</div>
      <div className="corner-text bottom-right animate-throw">Empower Your Creativity with Mac.</div>

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
