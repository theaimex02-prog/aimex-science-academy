"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function DNA() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.35;
  });

  const spheres = [];

for (let i = -9; i <= 9; i++) {
      const y = i * 0.22;
    const angle = i * 0.55;

    const x1 = Math.cos(angle) * 0.7;
    const z1 = Math.sin(angle) * 0.7;

    const x2 = -x1;
    const z2 = -z1;

    spheres.push(
      <group key={i}>
        {/* Left Sphere */}
        <mesh position={[x1, y, z1]}>
          <sphereGeometry args={[0.08, 20, 20]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Right Sphere */}
        <mesh position={[x2, y, z2]}>
          <sphereGeometry args={[0.08, 20, 20]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#6366f1"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Connection */}
        <mesh
          position={[0, y, 0]}
          rotation={[0, angle, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.015, 0.015, 1.4, 8]} />
          <meshStandardMaterial color="#cbd5e1" />
        </mesh>
      </group>
    );
  }

  return (
    <Float speed={2} floatIntensity={0.5}>
      <group ref={group}>{spheres}</group>
    </Float>
  );
}

export default function DnaScene() {
  return (
   <div className="h-full w-full">
     <Canvas
  className="!h-full !w-full"
  camera={{ position: [0, 0, 7], fov: 40 }}
>
        <ambientLight intensity={2} />

        <pointLight position={[3, 3, 3]} intensity={3} />

        <pointLight
          position={[-3, -2, 2]}
          intensity={2}
          color="#38bdf8"
        />

        <DNA />

<OrbitControls
  enableZoom={false}
  enablePan={false}
  autoRotate
  autoRotateSpeed={0.8}
/>
      </Canvas>
    </div>
  );
}