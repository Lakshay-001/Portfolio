"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function makePanel(width: number, height: number, color: string, emissive: string) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(width, height, 0.06),
    new THREE.MeshStandardMaterial({
      color,
      emissive,
      emissiveIntensity: 0.35,
      metalness: 0.28,
      roughness: 0.38,
    }),
  );
}

export function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 1.2, 10.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.rotation.x = -0.1;
    root.scale.setScalar(0.78);
    scene.add(root);

    const cyan = new THREE.Color("#67e8f9");
    const gold = new THREE.Color("#f7b955");
    const rose = new THREE.Color("#ff6d9c");
    const green = new THREE.Color("#82efac");

    scene.add(new THREE.AmbientLight("#ffffff", 0.78));

    const cyanLight = new THREE.PointLight(cyan, 75, 16);
    cyanLight.position.set(-3.6, 3.8, 4);
    scene.add(cyanLight);

    const goldLight = new THREE.PointLight(gold, 55, 14);
    goldLight.position.set(4, -1.3, 5);
    scene.add(goldLight);

    const monitor = new THREE.Group();
    monitor.position.set(0, 0.8, -0.4);
    monitor.rotation.x = -0.1;
    root.add(monitor);

    const screen = makePanel(4.25, 2.42, "#0b1019", "#082d38");
    monitor.add(screen);

    const screenEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(screen.geometry),
      new THREE.LineBasicMaterial({ color: cyan, transparent: true, opacity: 0.48 }),
    );
    screen.add(screenEdges);

    const preview = makePanel(2.05, 1.16, "#121b27", "#12343e");
    preview.position.set(-0.68, 0.25, 0.08);
    monitor.add(preview);

    const previewGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.35, 0.78),
      new THREE.MeshBasicMaterial({ color: cyan, transparent: true, opacity: 0.28 }),
    );
    previewGlow.position.set(-0.68, 0.25, 0.13);
    monitor.add(previewGlow);

    const scopes = new THREE.Group();
    scopes.position.set(1.34, 0.16, 0.12);
    monitor.add(scopes);

    for (let i = 0; i < 5; i += 1) {
      const bar = makePanel(0.12, 0.34 + i * 0.12, i % 2 ? "#f7b955" : "#67e8f9", i % 2 ? "#4a2b08" : "#07313c");
      bar.position.set(-0.44 + i * 0.22, -0.28 + i * 0.06, 0);
      scopes.add(bar);
    }

    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: "#151d2a",
      emissive: "#222b52",
      emissiveIntensity: 0.42,
      metalness: 0.22,
      roughness: 0.34,
    });

    for (let i = 0; i < 6; i += 1) {
      const node = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.28, 0.05), nodeMaterial);
      node.position.set(-1.72 + i * 0.66, -0.9 + Math.sin(i) * 0.1, 0.14);
      monitor.add(node);
    }

    const timeline = new THREE.Group();
    timeline.position.set(0, -1.78, 0.35);
    timeline.rotation.x = -0.72;
    root.add(timeline);

    const base = makePanel(4.85, 1.22, "#0d111a", "#07131d");
    timeline.add(base);

    const clipColors = [cyan, gold, rose, green, cyan, gold];
    for (let lane = 0; lane < 3; lane += 1) {
      for (let i = 0; i < 4; i += 1) {
        const clip = new THREE.Mesh(
          new THREE.BoxGeometry(0.72 + ((i + lane) % 2) * 0.36, 0.12, 0.12),
          new THREE.MeshStandardMaterial({
            color: clipColors[(i + lane) % clipColors.length],
            emissive: clipColors[(i + lane) % clipColors.length],
            emissiveIntensity: 0.5,
            roughness: 0.22,
          }),
        );
        clip.position.set(-2.05 + i * 1.22 + lane * 0.16, 0.38 - lane * 0.36, 0.12);
        timeline.add(clip);
      }
    }

    const playhead = new THREE.Mesh(
      new THREE.BoxGeometry(0.035, 1.16, 0.16),
      new THREE.MeshBasicMaterial({ color: "#ffffff" }),
    );
    playhead.position.set(0.4, 0, 0.18);
    timeline.add(playhead);

    const techRing = new THREE.Group();
    root.add(techRing);

    for (let i = 0; i < 10; i += 1) {
      const point = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 16, 16),
        new THREE.MeshBasicMaterial({ color: i % 2 ? gold : cyan }),
      );
      const angle = (i / 10) * Math.PI * 2;
      point.position.set(Math.cos(angle) * 3.25, Math.sin(angle * 1.3) * 0.75 + 0.15, Math.sin(angle) * 1.2);
      techRing.add(point);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: "#e8fdff",
        size: 0.025,
        transparent: true,
        opacity: 0.58,
      }),
    );
    scene.add(particles);

    const pointer = new THREE.Vector2(0, 0);
    const onPointerMove = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);
    mount.addEventListener("pointermove", onPointerMove);

    let tick = 0;
    let raf = 0;

    const animate = () => {
      tick += 0.01;
      root.rotation.y = Math.sin(tick * 0.7) * 0.08 + pointer.x * 0.09;
      root.rotation.x = -0.1 - pointer.y * 0.045;
      monitor.position.y = 0.8 + Math.sin(tick * 1.15) * 0.045;
      timeline.position.x = Math.sin(tick * 1.8) * 0.11;
      playhead.position.x = 0.4 + Math.sin(tick * 2.4) * 0.55;
      techRing.rotation.y += 0.003;
      particles.rotation.y += 0.0012;
      particles.rotation.x = Math.sin(tick * 0.55) * 0.055;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      particlesGeometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="three-hero" data-reveal>
      <div className="three-hero-stage" ref={mountRef} />
    </div>
  );
}
