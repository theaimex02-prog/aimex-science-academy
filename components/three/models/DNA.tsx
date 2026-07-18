"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function DNA() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.5;
  });

  const parts = [];

  for (let i = -12; i <= 12; i++) {
    const y = i * 0.18;
    const angle = i * 0.55;

    const x1 = Math.cos(angle) * 0.45;
    const z1 = Math.sin(angle) * 0.45;

    const x2 = -x1;
    const z2 = -z1;

    parts.push(
      <group key={i}>
        {/* Left */}
        <mesh position={[x1, y, z1]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Right */}
        <mesh position={[x2, y, z2]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#6366f1"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Connector */}
        <mesh
          position={[0, y, 0]}
          rotation={[0, angle, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.01, 0.01, 0.9, 8]} />
          <meshStandardMaterial color="#cbd5e1" />
        </mesh>
      </group>
    );
  }

  return (
    <Float speed={2} floatIntensity={0.6}>
      <group ref={group}>
        {parts}
      </group>
    </Float>
  );
}