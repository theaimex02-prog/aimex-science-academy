"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";


export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true }}
    >
      {/* Background */}
      <color attach="background" args={["#020617"]} />

      {/* Lights */}
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />
      <pointLight
        position={[-5, 2, 5]}
        intensity={2}
        color="#38bdf8"
      />

      {/* Stars */}
      <Stars
        radius={250}
        depth={120}
        count={12000}
        factor={8}
        saturation={0}
        fade
        speed={0.8}
      />

      
      {/* Glow */}
      <EffectComposer>
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}