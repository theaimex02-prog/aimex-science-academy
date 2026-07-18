"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Electron({
  radius,
  speed,
  offset,
  color,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime() * speed + offset;

    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 24, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={3}
      />
    </mesh>
  );
}

function Atom() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.25;
    group.current.rotation.x += delta * 0.08;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.15}
      floatIntensity={0.8}
    >
      <group ref={group}>

        {/* Nucleus */}
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={4}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Glow */}
        <mesh>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={0.18}
          />
        </mesh>

        {/* Orbit Ring 1 */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[1.15, 0.01, 16, 100]} />
          <meshStandardMaterial color="#67e8f9" />
        </mesh>

        {/* Orbit Ring 2 */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.15, 0.01, 16, 100]} />
          <meshStandardMaterial color="#38bdf8" />
        </mesh>

        {/* Orbit Ring 3 */}
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[1.15, 0.01, 16, 100]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>

        <Electron
          radius={1.15}
          speed={1}
          offset={0}
          color="#ffffff"
        />

        <Electron
          radius={1.15}
          speed={1}
          offset={2}
          color="#67e8f9"
        />

        <Electron
          radius={1.15}
          speed={1}
          offset={4}
          color="#93c5fd"
        />

      </group>
    </Float>
  );
}

export default function AtomScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>

      <ambientLight intensity={2} />

      <pointLight
        position={[3, 3, 3]}
        intensity={3}
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={1.5}
        color="#38bdf8"
      />

      <Atom />
<OrbitControls
  enableZoom={false}
  enablePan={false}
  autoRotate
  autoRotateSpeed={1}
/>
    </Canvas>
  );
}