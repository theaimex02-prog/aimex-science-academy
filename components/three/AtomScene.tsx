"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
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

    ref.current.position.set(
      Math.cos(t) * radius,
      0,
      Math.sin(t) * radius
    );
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

  useFrame(({ mouse, clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    // Idle rotation
    const targetRotY = mouse.x * 0.8 + t * 0.25;
    const targetRotX = mouse.y * 0.5;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetRotX,
      0.08
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotY,
      0.08
    );

    // Parallax movement
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      mouse.x * 0.35,
      0.08
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      mouse.y * 0.25,
      0.08
    );
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

        {/* Orbit 1 */}
        <mesh>
          <torusGeometry args={[1.15, 0.01, 16, 120]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#67e8f9"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Orbit 2 */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.15, 0.01, 16, 120]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Orbit 3 */}
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[1.15, 0.01, 16, 120]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={1.5}
          />
        </mesh>

        <Electron
          radius={1.15}
          speed={1}
          offset={0}
          color="#ffffff"
        />

        <Electron
          radius={1.15}
          speed={1.2}
          offset={2}
          color="#67e8f9"
        />

        <Electron
          radius={1.15}
          speed={0.9}
          offset={4}
          color="#93c5fd"
        />
      </group>
    </Float>
  );
}

export default function AtomScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={2} />

      <pointLight
        position={[3, 3, 3]}
        intensity={3}
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={2}
        color="#38bdf8"
      />

      <Atom />
    </Canvas>
  );
}