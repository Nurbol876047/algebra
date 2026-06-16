"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useProgressStore } from "@/store/useProgressStore";

function MathObjects() {
  const group = useRef<THREE.Group>(null);
  const activeGrade = useProgressStore((state) => state.activeGrade);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  // Generate a field of extra cubes exclusively for 10th grade
  const extraCubes = useMemo(() => {
    if (activeGrade < 10) return [];
    const cubes = [];
    const colors = ['#10b981', '#334155', '#64748b', '#0f172a'];
    for (let i = 0; i < 30; i++) {
      cubes.push({
        pos: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10 - 2] as [number, number, number],
        speed: Math.random() * 2 + 0.5,
        rot: Math.random() * 2,
        size: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        wireframe: Math.random() > 0.5
      });
    }
    return cubes;
  }, [activeGrade]);

  // For 10th grade, make the main objects a bit smaller so the screen isn't overwhelmed, but keep them visible
  const scale = activeGrade >= 10 ? 0.7 : 1;

  return (
    <group ref={group} scale={scale}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
        <mesh position={[-2, 1, -1]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#334155" wireframe />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} floatingRange={[-0.5, 0.5]}>
        <mesh position={[2, -1, 1]}>
          <torusGeometry args={[0.8, 0.3, 16, 32]} />
          <meshStandardMaterial color="#10b981" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#64748b" opacity={0.8} transparent />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={2} floatIntensity={1} floatingRange={[-1, 1]}>
        <mesh position={[-1.5, -1.5, 2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
      </Float>

      {/* Render the extra cubes for 10th grade */}
      {extraCubes.map((props, i) => (
        <Float key={i} speed={props.speed} rotationIntensity={props.rot} floatIntensity={1}>
          <mesh position={props.pos}>
            <boxGeometry args={[props.size, props.size, props.size]} />
            <meshStandardMaterial color={props.color} opacity={0.6} transparent wireframe={props.wireframe} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    // Fixed positioning instead of absolute prevents the canvas from stretching to the full scroll height
    // and distorting the 3D figures into massive blobs at the bottom of the page.
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#334155" />
        <MathObjects />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
