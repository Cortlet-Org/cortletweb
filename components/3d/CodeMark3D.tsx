"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* -----------------------------
   GENERAL BÉZIER
------------------------------ */

function binomialCoefficient(n: number, k: number) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;

    let result = 1;

    for (let i = 1; i <= k; i++) {
        result = (result * (n - (k - i))) / i;
    }

    return result;
}

function bezierPoint(
    points: THREE.Vector3[],
    t: number
): THREE.Vector3 {
    const n = points.length - 1;
    const result = new THREE.Vector3();

    for (let i = 0; i <= n; i++) {
        const coefficient =
            binomialCoefficient(n, i) *
            Math.pow(1 - t, n - i) *
            Math.pow(t, i);

        result.addScaledVector(points[i], coefficient);
    }

    return result;
}

class GeneralBezierCurve extends THREE.Curve<THREE.Vector3> {
    private readonly controlPoints: THREE.Vector3[];

    constructor(points: THREE.Vector3[]) {
        super();
        this.controlPoints = points.map((point) => point.clone());
    }

    getPoint(t: number, target = new THREE.Vector3()) {
        return target.copy(bezierPoint(this.controlPoints, t));
    }
}

/* -----------------------------
   CHEVRON
------------------------------ */

function createChevronShape(direction: "left" | "right") {
    const shape = new THREE.Shape();

    const sign = direction === "left" ? -1 : 1;

    const outer = 1.12 * sign;
    const inner = 0.38 * sign;

    const top = 1.02;
    const bottom = -1.02;

    const thickness = 0.16;

    if (direction === "left") {
        shape.moveTo(outer, top);
        shape.lineTo(inner, 0);
        shape.lineTo(outer, bottom);

        shape.lineTo(outer + thickness, bottom);
        shape.lineTo(inner + thickness, 0);
        shape.lineTo(outer + thickness, top);
    } else {
        shape.moveTo(outer, top);
        shape.lineTo(inner, 0);
        shape.lineTo(outer, bottom);

        shape.lineTo(outer - thickness, bottom);
        shape.lineTo(inner - thickness, 0);
        shape.lineTo(outer - thickness, top);
    }

    shape.closePath();

    return shape;
}

function Chevron({
                     direction,
                     position,
                 }: {
    direction: "left" | "right";
    position: [number, number, number];
}) {
    const shape = useMemo(
        () => createChevronShape(direction),
        [direction]
    );

    const geometry = useMemo(() => {
        const result = new THREE.ExtrudeGeometry(shape, {
            depth: 0.18,
            bevelEnabled: true,
            bevelThickness: 0.025,
            bevelSize: 0.025,
            bevelSegments: 6,
            curveSegments: 16,
        });

        result.center();

        return result;
    }, [shape]);

    return (
        <mesh geometry={geometry} position={position}>
            <meshPhysicalMaterial
                color="#18181b"
                roughness={0.22}
                metalness={0.72}
                clearcoat={0.3}
                clearcoatRoughness={0.2}
            />
        </mesh>
    );
}

/* -----------------------------
   CORTLET FLOW CURVE
------------------------------ */

function useCortletCurve() {
    return useMemo(() => {
        const points = [
            new THREE.Vector3(0.42, 1.18, 0.08),
            new THREE.Vector3(0.3, 0.82, 0.16),
            new THREE.Vector3(0.12, 0.34, 0.08),
            new THREE.Vector3(-0.08, -0.22, -0.08),
            new THREE.Vector3(-0.26, -0.74, 0.12),
            new THREE.Vector3(-0.42, -1.18, 0.06),
        ];

        return new GeneralBezierCurve(points);
    }, []);
}

function DataCurve() {
    const curve = useCortletCurve();

    const geometry = useMemo(() => {
        return new THREE.TubeGeometry(
            curve,
            120,
            0.055,
            18,
            false
        );
    }, [curve]);

    return (
        <mesh geometry={geometry}>
            <meshPhysicalMaterial
                color="#10b981"
                roughness={0.18}
                metalness={0.25}
                emissive="#10b981"
                emissiveIntensity={0.15}
                clearcoat={0.25}
                clearcoatRoughness={0.15}
            />
        </mesh>
    );
}

/* -----------------------------
   MOVING PACKET
------------------------------ */

function FlowPacket() {
    const packet = useRef<THREE.Mesh>(null);
    const curve = useCortletCurve();

    useFrame(({ clock }) => {
        if (!packet.current) return;

        const t = (clock.elapsedTime * 0.12) % 1;
        const point = curve.getPointAt(t);

        packet.current.position.copy(point);

        const pulse = 0.85 + Math.sin(clock.elapsedTime * 4) * 0.08;
        packet.current.scale.setScalar(pulse);
    });

    return (
        <mesh ref={packet}>
            <sphereGeometry args={[0.065, 24, 24]} />

            <meshStandardMaterial
                color="#6ee7b7"
                emissive="#10b981"
                emissiveIntensity={1.1}
                roughness={0.08}
                metalness={0.05}
            />
        </mesh>
    );
}

/* -----------------------------
   MODEL
------------------------------ */

function CodeMarkModel() {
    const group = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (!group.current) return;

        const pointerX = state.pointer.x;
        const pointerY = state.pointer.y;

        const targetX = pointerY * 0.08;
        const targetY = pointerX * 0.15;

        group.current.rotation.x = THREE.MathUtils.damp(
            group.current.rotation.x,
            targetX,
            4,
            delta
        );

        group.current.rotation.y = THREE.MathUtils.damp(
            group.current.rotation.y,
            targetY,
            4,
            delta
        );

        group.current.rotation.z = THREE.MathUtils.damp(
            group.current.rotation.z,
            pointerX * -0.012,
            4,
            delta
        );

        const targetScale = hovered ? 1.035 : 1;

        const nextScale = THREE.MathUtils.damp(
            group.current.scale.x,
            targetScale,
            5,
            delta
        );

        group.current.scale.setScalar(nextScale);

        group.current.position.y =
            Math.sin(state.clock.elapsedTime * 0.65) * 0.025;
    });

    return (
        <group
            ref={group}
            rotation={[0.02, -0.04, 0]}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
        >
            <Chevron
                direction="left"
                position={[-0.68, 0, 0]}
            />

            <DataCurve />
            <FlowPacket />

            <Chevron
                direction="right"
                position={[0.68, 0, 0]}
            />
        </group>
    );
}

/* -----------------------------
   CANVAS
------------------------------ */

export function CodeMark3D() {
    return (
        <div className="relative h-[340px] w-full overflow-hidden">
            <Canvas
                camera={{
                    position: [0, 0, 5.6],
                    fov: 32,
                }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
            >
                <ambientLight intensity={0.55} />

                <directionalLight
                    position={[4, 5, 5]}
                    intensity={2}
                />

                <directionalLight
                    position={[-4, 1, 2]}
                    intensity={0.55}
                />

                <pointLight
                    position={[0, -2, 3]}
                    intensity={0.45}
                />

                <pointLight
                    position={[0, 2, -2]}
                    intensity={0.6}
                    color="#10b981"
                />

                <CodeMarkModel />

                <Environment preset="studio" environmentIntensity={0.45} />
            </Canvas>
        </div>
    );
}