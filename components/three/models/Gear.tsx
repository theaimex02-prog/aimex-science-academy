"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Gear() {
  const gear = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!gear.current) return;

    gear.current.rotation.z += delta * 0.8;
  });

  return (
    <group ref={gear}>

      {/* Main Ring */}
      <mesh>
        <torusGeometry args={[0.7, 0.12, 20, 40]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={2}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* Center */}
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 0.15, 32]} />
        <meshStandardMaterial
          color="#60a5fa"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Teeth */}

      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 0.82,
              Math.sin(angle) * 0.82,
              0,
            ]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.1, 0.18, 0.12]} />

            <meshStandardMaterial
              color="#7dd3fc"
              metalness={1}
              roughness={0.2}
            />
          </mesh>
        );
      })}

    </group>
  );
}