import React from "react";
import { useGLTF } from "@react-three/drei";

interface ModelProps extends React.ComponentProps<"group"> {
  path?: string;
}

export function Model({ path = "/models/room.glb", ...props }: ModelProps) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} {...props} />;
}

// Preload the model for optimization
useGLTF.preload("/models/room.glb");

export default Model;
