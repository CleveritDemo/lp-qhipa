"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND_LINES = [
  { color: 0x1186a8, opacity: 0.16 },
  { color: 0x0f9b8f, opacity: 0.12 },
  { color: 0x6ab5e3, opacity: 0.1 },
];

export default function HeroDome() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(66, 1, 0.1, 2400);
    camera.position.set(0, 18, 0);
    camera.rotation.x = -0.04;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    mount.appendChild(renderer.domElement);

    const dome = new THREE.Group();
    dome.position.y = -130;
    scene.add(dome);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.LineBasicMaterial[] = [];
    const radius = 900;
    const segments = 192;

    const createMaterial = (index: number) => {
      const brand = BRAND_LINES[index % BRAND_LINES.length];
      const material = new THREE.LineBasicMaterial({
        color: brand.color,
        transparent: true,
        opacity: brand.opacity,
        depthWrite: false,
      });
      materials.push(material);
      return material;
    };

    for (let ring = 1; ring <= 13; ring += 1) {
      const phi = (ring / 15) * Math.PI * 0.82;
      const y = Math.cos(phi) * radius;
      const ringRadius = Math.sin(phi) * radius;
      const points: THREE.Vector3[] = [];

      for (let segment = 0; segment <= segments; segment += 1) {
        const theta = (segment / segments) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(theta) * ringRadius,
            y,
            Math.sin(theta) * ringRadius,
          ),
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      geometries.push(geometry);
      dome.add(new THREE.Line(geometry, createMaterial(ring)));
    }

    for (let radial = 0; radial < 36; radial += 1) {
      const theta = (radial / 36) * Math.PI * 2;
      const points: THREE.Vector3[] = [];

      for (let step = 0; step <= 80; step += 1) {
        const phi = (step / 80) * Math.PI * 0.82;
        const currentRadius = Math.sin(phi) * radius;
        points.push(
          new THREE.Vector3(
            Math.cos(theta) * currentRadius,
            Math.cos(phi) * radius,
            Math.sin(theta) * currentRadius,
          ),
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      geometries.push(geometry);
      dome.add(new THREE.Line(geometry, createMaterial(radial + 2)));
    }

    const pointer = { x: 0, y: 0 };
    const smoothPointer = { x: 0, y: 0 };
    let frameId = 0;

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      smoothPointer.x += (pointer.x - smoothPointer.x) * 0.055;
      smoothPointer.y += (pointer.y - smoothPointer.y) * 0.055;

      dome.rotation.y = smoothPointer.x * 0.06;
      dome.rotation.x = -smoothPointer.y * 0.025;
      camera.rotation.y = smoothPointer.x * 0.035;
      camera.rotation.x = -0.04 - smoothPointer.y * 0.025;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);

      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
