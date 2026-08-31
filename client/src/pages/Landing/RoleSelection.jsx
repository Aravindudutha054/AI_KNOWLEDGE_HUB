import { motion } from "framer-motion";
import {
  User,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Settings,
  UserCircle,
  Check,
  Building2,
} from "lucide-react";

import ShaderBackground from "../../components/common/ShaderBackground";

import styles from "./RoleSelection.module.css";

const roles = [
  {
    id: "employee",
    title: "Employee",
    description:
      "Standard access to department knowledge, collaborative research, and AI assisted workflows.",

    button: "Access Hub",

    icon: User,
  },

  {
    id: "admin",

    title: "Administrator",

    description:
      "Manage departments, upload documents, configure permissions and monitor enterprise knowledge.",

    button: "Enter Console",

    icon: ShieldCheck,
  },
];

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

export default function RoleSelection({
  onBack,
  onSelect,
}) {
  return (
    <div className={styles.page}>
      <ShaderBackground />

      {/* ========================= */}
      {/* Header */}
      {/* ========================= */}

      <header className={styles.header}>
        <div className={styles.logo}>
          <Building2 size={26} />

          <span>Enterprise Knowledge Hub</span>
        </div>

        <div className={styles.headerActions}>
          <button>
            <HelpCircle size={20} />
          </button>

          <button>
            <Settings size={20} />
          </button>

          <button className={styles.avatar}>
            <UserCircle size={20} />
          </button>
        </div>
      </header>

      {/* ========================= */}
      {/* Hero */}
      {/* ========================= */}

      <main className={styles.content}>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className={styles.badge}>
            ROLE BASED ACCESS CONTROL
          </motion.div>

          <motion.h1 variants={item} className={styles.title}>
            Choose Your Workspace
          </motion.h1>

          <motion.p variants={item} className={styles.subtitle}>
            Select an access profile to continue into your department specific
            knowledge workspace.
          </motion.p>

          {/* ========================= */}
          {/* Role Cards */}
          {/* ========================= */}

          <motion.div variants={container} className={styles.cards}>
            {roles.map((role, index) => {
              const Icon = role.icon;

              return (
                <motion.button
  key={role.id}
  variants={item}
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
  whileTap={{
    scale: 0.98,
  }}
  className={styles.card}
  onClick={() => onSelect?.(role.id)}
>
                  <div className={styles.cardOverlay} />

                  {/* ====================== */}
                  {/* Animated Graphic */}
                  {/* ====================== */}

                  <div className={styles.graphic}>
                    <div className={styles.ringOuter} />

                    <div className={styles.ringInner} />

                    <div className={styles.iconWrapper}>
                      <Icon size={44} />
                    </div>

                    <div className={styles.glow} />
                  </div>

                  {/* ====================== */}
                  {/* Text */}
                  {/* ====================== */}

                  <div className={styles.cardContent}>
                    <h3>{role.title}</h3>

                    <p>{role.description}</p>
                  </div>

                  {/* ====================== */}
                  {/* Button */}
                  {/* ====================== */}

                  <div className={styles.cardButton}>
                    <span>{role.button}</span>

                    <ArrowRight size={18} />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </main>

      {/* ========================= */}
      {/* Workflow */}
      {/* ========================= */}

      <footer className={styles.footer}>
        <div className={styles.stepper}>
          <div className={styles.step}>
            <div className={`${styles.stepCircle} ${styles.completed}`}>
              <Check size={16} />
            </div>

            <span>Grant Access</span>
          </div>

          <div className={styles.line} />

          <div className={styles.step}>
            <div className={`${styles.stepCircle} ${styles.active}`}>2</div>

            <span>Select Role</span>
          </div>

          <div className={styles.line} />

          <div className={styles.step}>
            <div className={styles.stepCircle}>3</div>

            <span>Department</span>
          </div>

          <div className={styles.line} />

          <div className={styles.step}>
            <div className={styles.stepCircle}>4</div>

            <span>Authentication</span>
          </div>

          <div className={styles.line} />

          <div className={styles.step}>
            <div className={styles.stepCircle}>5</div>

            <span>Workspace</span>
          </div>
        </div>

        <button className={styles.backButton} onClick={onBack}>
          Back to Landing
        </button>
      </footer>
    </div>
  );
}