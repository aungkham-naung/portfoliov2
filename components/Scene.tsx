"use client";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import Model from "./Model";
import * as THREE from "three";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

const Scene: React.FC = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  }, []);

  return (
    <Canvas camera={{ position: [0, 150, -200], fov: 50 }} shadows>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />

        <Model position={[0, -1, 0]} scale={0.8} />

        <OrbitControls
          target={[0, 0, 0]}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={300}
          maxDistance={0}
          enableZoom={false}
          enableDamping
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
