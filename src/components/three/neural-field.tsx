'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 90;
const BOUNDS = 9;
const LINK_DIST = 2.5;

/** A drifting field of nodes that link up when close — a living neural net. */
function Network() {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * BOUNDS * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS * 2;
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    return { positions, velocities };
  }, []);

  const linePositions = useMemo(
    () => new Float32Array(COUNT * COUNT * 3),
    [],
  );

  const pointsGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const linesGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    return g;
  }, [linePositions]);

  const { pointer } = useThree();

  useFrame(() => {
    // Drift + wrap nodes inside the bounding cube.
    for (let i = 0; i < COUNT; i++) {
      for (let a = 0; a < 3; a++) {
        const idx = i * 3 + a;
        positions[idx] += velocities[idx];
        if (positions[idx] > BOUNDS) positions[idx] = -BOUNDS;
        else if (positions[idx] < -BOUNDS) positions[idx] = BOUNDS;
      }
    }
    pointsGeo.attributes.position.needsUpdate = true;

    // Rebuild the link segments for nodes within LINK_DIST.
    let v = 0;
    for (let i = 0; i < COUNT; i++) {
      const ix = positions[i * 3];
      const iy = positions[i * 3 + 1];
      const iz = positions[i * 3 + 2];
      for (let j = i + 1; j < COUNT; j++) {
        const dx = ix - positions[j * 3];
        const dy = iy - positions[j * 3 + 1];
        const dz = iz - positions[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < LINK_DIST * LINK_DIST) {
          linePositions[v++] = ix;
          linePositions[v++] = iy;
          linePositions[v++] = iz;
          linePositions[v++] = positions[j * 3];
          linePositions[v++] = positions[j * 3 + 1];
          linePositions[v++] = positions[j * 3 + 2];
        }
      }
    }
    linesGeo.setDrawRange(0, v / 3);
    linesGeo.attributes.position.needsUpdate = true;

    // Gentle parallax toward the pointer + a slow ambient spin.
    const g = groupRef.current;
    if (g) {
      const tx = pointer.y * 0.16;
      const ty = pointer.x * 0.22;
      g.rotation.x += (tx - g.rotation.x) * 0.035;
      g.rotation.y += (ty - g.rotation.y) * 0.035;
      g.rotation.z += 0.0004;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={pointsGeo}>
        <pointsMaterial
          size={0.075}
          color="#cdddff"
          transparent
          opacity={0.92}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function NeuralField() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 14], fov: 62 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <fog attach="fog" args={['#050505', 12, 26]} />
      <Network />
    </Canvas>
  );
}
