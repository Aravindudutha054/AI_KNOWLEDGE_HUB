import { useEffect, useRef } from "react";
import styles from "./ShaderBackground.module.css";

const MAX_CONNECTION_DISTANCE = 150;

export default function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    let animationId = 0;
    let running = true;

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    let particleCount = 0;

    const particles = [];

    /* ==========================
       Resize
    ========================== */

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particleCount = Math.min(
        90,
        Math.max(25, Math.floor(width / 22))
      );
    };

    resize();

    /* ==========================
       Particle
    ========================== */

    class Particle {
      constructor() {
        this.reset();

        this.x = Math.random() * width;

        this.y = Math.random() * height;
      }

      reset() {
        this.radius = Math.random() * 2 + 1;

        this.speedX = (Math.random() - .5) * .35;

        this.speedY = (Math.random() - .5) * .35;

        const colors = [
          "rgba(37,99,235,.18)",
          "rgba(0,194,168,.18)",
          "rgba(0,212,255,.16)",
          "rgba(255,255,255,.08)",
        ];

        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < -40) this.x = width + 40;

        if (this.x > width + 40) this.x = -40;

        if (this.y < -40) this.y = height + 40;

        if (this.y > height + 40) this.y = -40;

        if (mouse.active) {
          const dx = mouse.x - this.x;

          const dy = mouse.y - this.y;

          const distSq = dx * dx + dy * dy;

          if (distSq < 180 * 180) {
            const distance = Math.sqrt(distSq);

            const force = (180 - distance) / 180;

            this.x -= dx * force * .006;

            this.y -= dy * force * .006;
          }
        }
      }

      draw() {
        ctx.beginPath();

        ctx.fillStyle = this.color;

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fill();
      }
    }

    /* ==========================
       Create particles
    ========================== */

    const buildParticles = () => {
      particles.length = 0;

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    buildParticles();

    /* ==========================
       Part 2 starts here
    ========================== */

    /* ==========================
       Connection Rendering
    ========================== */

    const maxDistanceSq =
      MAX_CONNECTION_DISTANCE * MAX_CONNECTION_DISTANCE;

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        /* limit comparisons for better performance */

        for (
          let j = i + 1;
          j < Math.min(particles.length, i + 16);
          j++
        ) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;

          const dy = p1.y - p2.y;

          const distSq = dx * dx + dy * dy;

          if (distSq > maxDistanceSq) continue;

          const distance = Math.sqrt(distSq);

          const opacity =
            (1 - distance / MAX_CONNECTION_DISTANCE) * 0.18;

          ctx.beginPath();

          ctx.strokeStyle = `rgba(0,194,168,${opacity})`;

          ctx.lineWidth = 1;

          ctx.moveTo(p1.x, p1.y);

          ctx.lineTo(p2.x, p2.y);

          ctx.stroke();
        }
      }
    };

    /* ==========================
       Animated Gradient
    ========================== */

    const renderBackground = (time) => {
      const t = time * 0.00025;

      const gradient = ctx.createLinearGradient(0, 0, width, height);

      gradient.addColorStop(
        0,
        `rgba(
          0,
          194,
          168,
          ${
            0.05 +
            Math.sin(t) *
              0.02
          }
        )`
      );

      gradient.addColorStop(0.45, "rgba(37,99,235,.04)");

      gradient.addColorStop(
        1,
        `rgba(
          0,
          212,
          255,
          ${
            0.04 +
            Math.cos(t) *
              0.02
          }
        )`
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(0, 0, width, height);
    };

    /* ==========================
       Main Animation Loop
    ========================== */

    const animate = (timestamp) => {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      renderBackground(timestamp);

      particles.forEach((particle) => {
        particle.update();

        particle.draw();
      });

      drawConnections();

      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    /* ==========================
       Page Visibility
    ========================== */

    const handleVisibility = () => {
      running = !document.hidden;

      if (running) {
        cancelAnimationFrame(animationId);

        animate(performance.now());
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    /* ==========================
       Part 3 starts here
    ========================== */

    /* ==========================
       Mouse Interaction
    ========================== */

    let mouseFrame = 0;

    const handleMouseMove = (event) => {
      if (mouseFrame) return;

      mouseFrame = requestAnimationFrame(() => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        mouse.active = true;

        mouseFrame = 0;
      });
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    /* ==========================
       Resize
    ========================== */

    const handleResize = () => {
      resize();

      buildParticles();
    };

    /* ==========================
       Event Listeners
    ========================== */

    window.addEventListener("resize", handleResize);

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("mouseleave", handleMouseLeave);

    /* ==========================
       Cleanup
    ========================== */

    return () => {
      running = false;

      cancelAnimationFrame(animationId);

      if (mouseFrame) {
        cancelAnimationFrame(mouseFrame);
      }

      particles.length = 0;

      window.removeEventListener("resize", handleResize);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseleave", handleMouseLeave);

      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  /* ==========================
     JSX
  ========================== */

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={`${styles.blur} ${styles.blurTopLeft}`} />

      <div className={`${styles.blur} ${styles.blurTopRight}`} />

      <div className={`${styles.blur} ${styles.blurBottom}`} />

      <div className={styles.grid} />

      <div className={styles.noise} />
    </div>
  );
}
