"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function BookModel() {
    const group = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (!group.current) return;

        const targetX = state.pointer.y * 0.04;
        const targetY = -0.18 + state.pointer.x * 0.08;

        group.current.rotation.x = THREE.MathUtils.damp(
            group.current.rotation.x,
            targetX,
            5,
            delta
        );

        group.current.rotation.y = THREE.MathUtils.damp(
            group.current.rotation.y,
            targetY,
            5,
            delta
        );

        group.current.rotation.z = THREE.MathUtils.damp(
            group.current.rotation.z,
            -0.05,
            5,
            delta
        );

        const targetScale = hovered ? 1.025 : 1;

        const scale = THREE.MathUtils.damp(
            group.current.scale.x,
            targetScale,
            6,
            delta
        );

        group.current.scale.setScalar(scale);

        group.current.position.y =
            Math.sin(state.clock.elapsedTime * 0.55) * 0.015;
    });

    return (
        <group
            ref={group}
            rotation={[0.02, -0.18, -0.05]}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
        >
            {/* Pages */}
            <RoundedBox
                args={[2.05, 2.95, 0.34]}
                radius={0.04}
                smoothness={8}
            >
                <meshStandardMaterial
                    color="#e4e4e7"
                    roughness={0.8}
                />
            </RoundedBox>

            {/* Back cover */}
            <RoundedBox
                args={[2.2, 3.08, 0.08]}
                radius={0.045}
                smoothness={8}
                position={[0, 0, -0.22]}
            >
                <meshStandardMaterial
                    color="#09090b"
                    roughness={0.42}
                />
            </RoundedBox>

            {/* Front cover */}
            <RoundedBox
                args={[2.2, 3.08, 0.08]}
                radius={0.045}
                smoothness={8}
                position={[0, 0, 0.22]}
            >
                <meshStandardMaterial
                    color="#09090b"
                    roughness={0.34}
                />
            </RoundedBox>

            {/* Spine */}
            <RoundedBox
                args={[0.11, 3.02, 0.46]}
                radius={0.025}
                smoothness={8}
                position={[-1.06, 0, 0]}
            >
                <meshStandardMaterial
                    color="#10b981"
                    roughness={0.35}
                />
            </RoundedBox>

            {/* Green accent */}
            <RoundedBox
                args={[0.035, 0.58, 0.02]}
                radius={0.01}
                smoothness={6}
                position={[-0.75, 0.86, 0.275]}
            >
                <meshStandardMaterial color="#34d399" />
            </RoundedBox>

            {/* Cover text */}
            <Text
                position={[-0.61, 1.02, 0.28]}
                fontSize={0.1}
                anchorX="left"
                anchorY="middle"
                color="#a1a1aa"
                letterSpacing={0.05}
            >
                DOCUMENTATION
            </Text>

            <Text
                position={[-0.61, 0.42, 0.28]}
                fontSize={0.33}
                anchorX="left"
                anchorY="middle"
                color="#fafafa"
            >
                Cortlet
            </Text>

            <Text
                position={[-0.61, 0.03, 0.28]}
                fontSize={0.33}
                anchorX="left"
                anchorY="middle"
                color="#fafafa"
            >
                Docs
            </Text>

            <Text
                position={[-0.61, -0.72, 0.28]}
                fontSize={0.18}
                anchorX="left"
                anchorY="middle"
                color="#10b981"
            >
                {"</>"}
            </Text>

            <Text
                position={[-0.61, -1.12, 0.28]}
                fontSize={0.085}
                anchorX="left"
                anchorY="middle"
                color="#71717a"
            >
                WebSockets for serverless
            </Text>
        </group>
    );
}

export function Book3D() {
    return (
        <div className="relative h-[420px] w-full">
            <Canvas
                camera={{
                    position: [0, 0, 5.7],
                    fov: 34,
                }}
                dpr={[1, 1.75]}
                gl={{
                    antialias: true,
                    alpha: true,
                }}
            >
                <ambientLight intensity={0.8} />

                <directionalLight
                    position={[4, 5, 6]}
                    intensity={1.8}
                />

                <directionalLight
                    position={[-3, 2, 3]}
                    intensity={0.4}
                />

                <pointLight
                    position={[-2, 2, 3]}
                    intensity={0.2}
                    color="#10b981"
                />

                <BookModel />

                <Environment
                    preset="studio"
                    environmentIntensity={0.3}
                />
            </Canvas>
        </div>
    );
}