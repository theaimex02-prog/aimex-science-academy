"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Flask() {
  const flask = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!flask.current) return;

    flask.current.rotation.y += delta * 0.4;
  });

  return (
    <Float
      speed={2}
      floatIntensity={0.5}
      rotationIntensity={0.2}
    >
      <group ref={flask}>

        {/* Glass Body */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.55, 0.8, 1.2, 32]} />
          <meshPhysicalMaterial
            color="#dbeafe"
            transparent
            opacity={0.25}
            roughness={0}
            transmission={1}
            thickness={0.4}
          />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.6, 32]} />
          <meshPhysicalMaterial
            color="#dbeafe"
            transparent
            opacity={0.25}
            roughness={0}
            transmission={1}
            thickness={0.4}
          />
        </mesh>

        {/* Liquid */}
        <mesh position={[0, -0.45, 0]}>
          <cylinderGeometry args={[0.5, 0.7, 0.55, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={2}
          />
        </mesh>

      </group>
    </Float>
  );
}