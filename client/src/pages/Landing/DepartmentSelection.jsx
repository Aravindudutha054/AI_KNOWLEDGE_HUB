import { motion } from "framer-motion";

import {
  Monitor,
  Users,
  BadgeDollarSign,
  Megaphone,
  Settings,
  Scale,
  ShieldCheck,
  Headphones,
  ArrowLeft,
  Hexagon,
} from "lucide-react";

import ShaderBackground from "../../components/common/ShaderBackground";

import styles from "./DepartmentSelection.module.css";

const departments = [
  {
    name: "HR",
    icon: Users,
  },

  {
    name: "IT",
    icon: Monitor,
  },

  {
    name: "Finance",
    icon: BadgeDollarSign,
  },

  {
    name: "Marketing",
    icon: Megaphone,
  },

  {
    name: "Operations",
    icon: Settings,
  },

  {
    name: "Legal",
    icon: Scale,
  },

  {
    name: "Compliance",
    icon: ShieldCheck,
  },

  {
    name: "Support",
    icon: Headphones,
  },
];

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,

    y: 30,
  },

  show: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.55,
    },
  },
};

export default function DepartmentSelection({
  role,

  onBack,

  onDepartmentSelect,
}) {
  return (
    <div className={styles.page}>
      <ShaderBackground />

      <header className={styles.header}>
        <button className={styles.back} onClick={onBack}>
          <ArrowLeft size={18} />
          Back
        </button>
      </header>

      <main className={styles.content}>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className={styles.logo}>
            <Hexagon size={46} />
          </motion.div>

          <motion.div variants={item} className={styles.badge}>
            {role === "admin" ? "ADMIN ACCESS" : "EMPLOYEE ACCESS"}
          </motion.div>

          <motion.h1 variants={item} className={styles.title}>
            Select Department
          </motion.h1>

          <motion.p variants={item} className={styles.subtitle}>
            Choose the department you want to access.
          </motion.p>

          <motion.div variants={container} className={styles.grid}>
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <motion.button
                  key={department.name}
                  variants={item}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={styles.card}
                  onClick={() => onDepartmentSelect?.(department.name)}
                >
                  <div className={styles.cardGlow} />

                  {/* ========================= */}
                  {/* Icon */}
                  {/* ========================= */}

                  <div className={styles.iconContainer}>
                    <div className={styles.iconCircle}>
                      <Icon size={30} />
                    </div>
                  </div>

                  {/* ========================= */}
                  {/* Department */}
                  {/* ========================= */}

                  <h3 className={styles.department}>{department.name}</h3>

                  <span className={styles.access}>Department Workspace</span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </main>

      {/* ========================= */}
      {/* Step Indicator */}
      {/* ========================= */}

      <footer className={styles.footer}>
        <div className={styles.stepper}>
          {/* Step 1 */}

          <div className={styles.step}>
            <div className={styles.completedStep}>✓</div>

            <span>Grant Access</span>
          </div>

          <div className={styles.line} />

          {/* Step 2 */}

          <div className={styles.step}>
            <div className={styles.completedStep}>✓</div>

            <span>Select Role</span>
          </div>

          <div className={styles.line} />

          {/* Step 3 */}

          <div className={styles.step}>
            <div className={styles.activeStep}>3</div>

            <span>Select Department</span>
          </div>

          <div className={styles.line} />

          {/* Step 4 */}

          <div className={styles.step}>
            <div className={styles.pendingStep}>4</div>

            <span>Authentication</span>
          </div>

          <div className={styles.line} />

          {/* Step 5 */}

          <div className={styles.step}>
            <div className={styles.pendingStep}>5</div>

            <span>Workspace</span>
          </div>
        </div>
      </footer>
    </div>
  );
}