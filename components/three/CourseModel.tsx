"use client";

import { Canvas } from "@react-three/fiber";
import DNA from "./models/DNA";
import Gear from "./models/Gear";
import Flask from "./models/Flask";

interface CourseModelProps {
  type: "dna" | "gear";
}

export default function CourseModel({
  type,
}: CourseModelProps) {
  return (
    <div className="h-40 w-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>

        <ambientLight intensity={2} />

        <pointLight
          position={[2, 2, 2]}
          intensity={3}
        />

        

        {type === "gear" && <Gear />}

      </Canvas>
    </div>
  );
}