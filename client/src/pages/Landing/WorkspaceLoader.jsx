import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  Network,
  ShieldCheck,
  Database,
  BrainCircuit,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";

import ShaderBackground from "../../components/common/ShaderBackground";

import styles from "./WorkspaceLoader.module.css";

const steps = [
  "Authentication Verified",

  "Loading Department Data",

  "Connecting Knowledge Base",

  "Initializing AI Assistant",

  "Applying Permissions",
];

const icons = [ShieldCheck, Database, Network, BrainCircuit, LockKeyhole];

export default function WorkspaceLoader({
  role,

  department,

  onComplete,
}) {
  const [progress, setProgress] = useState(0);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete?.();
          }, 500);

          return 100;
        }

        return prev + 20;
      });

      setActiveStep((prev) => Math.min(prev + 1, steps.length));
    }, 500);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={styles.page}>
      <ShaderBackground />

      <div className={styles.container}>
        <motion.div
          initial={{
            opacity: 0,

            scale: 0.96,
          }}
          animate={{
            opacity: 1,

            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={styles.card}
        >
          <div className={styles.logo}>
            <Network size={34} />
          </div>

          <div className={styles.badge}>{department?.toUpperCase()}</div>

          <h1 className={styles.title}>Preparing Workspace</h1>

          <p className={styles.subtitle}>
            Initializing your secure enterprise workspace
          </p>

          <div className={styles.stepList}>
            {steps.map((step, index) => {
              const Icon = icons[index];

              const completed = index < activeStep;

              const active = index === activeStep;

              return (
                <div
                  key={step}
                  className={`${styles.step}

${completed ? styles.completed : ""}

${active ? styles.active : ""}`}
                >
                  <div className={styles.icon}>
                    {completed ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <Icon size={18} />
                    )}
                  </div>

                  <div className={styles.stepContent}>
                    <h4>{step}</h4>

                    <span>
                      {completed
                        ? "Completed"
                        : active
                        ? "Processing..."
                        : "Waiting"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ============================== */}

          {/* Progress */}

          {/* ============================== */}

          <div className={styles.progressSection}>
            <div className={styles.progressTrack}>
              <motion.div
                className={styles.progressBar}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </div>

            <div className={styles.progressInfo}>
              <span>{progress}%</span>

              <span>Opening Workspace...</span>
            </div>
          </div>

          {/* ============================== */}

          {/* Bottom Information */}

          {/* ============================== */}

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <label>Role</label>

              <strong>{role}</strong>
            </div>

            <div className={styles.infoItem}>
              <label>Department</label>

              <strong>{department}</strong>
            </div>
          </div>
          <div className={styles.footer}>
            <p>Enterprise AI Knowledge Hub</p>

            <span>Secure • Intelligent • Department Aware</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}