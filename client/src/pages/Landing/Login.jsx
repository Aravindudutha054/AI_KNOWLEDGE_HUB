import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { motion } from "framer-motion";

import { ArrowLeft, ArrowRight, Lock, User, Network } from "lucide-react";

import { login } from "../../api/auth.api";

import ShaderBackground from "../../components/common/ShaderBackground";

import styles from "./Login.module.css";



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
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function Login({ role, department, onBack, onLogin }) {
  const { login: authLogin } = useAuth();

  const [employeeId, setEmployeeId] = useState("");

  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employeeId.trim() || !password.trim()) {
      alert("Please enter Employee ID and Password.");

      return;
    }

    try {
      const response = await login({
        employeeId,
        password,
        role,
        department,
      });

      const data = response.data.data;
      authLogin(
        data.user,
        data.token
      );
      onLogin(data.user);
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className={styles.page}>
      <ShaderBackground />

      <header className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <ArrowLeft size={18} />
          Change Department
        </button>
      </header>

      <main className={styles.content}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.card}
        >
          <motion.div variants={item} className={styles.logo}>
            <Network size={34} />
          </motion.div>

          <motion.div variants={item} className={styles.badge}>
            {department?.toUpperCase()}
          </motion.div>

          <motion.h1 variants={item} className={styles.title}>
            Authenticate
          </motion.h1>

          <motion.p variants={item} className={styles.subtitle}>
            Use your organization account
          </motion.p>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* ===================== */}
            {/* Employee ID */}
            {/* ===================== */}

            <motion.div variants={item} className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <User size={18} className={styles.inputIcon} />

                <input
                  type="text"
                  placeholder="Employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className={styles.input}
                />
              </div>
            </motion.div>

            {/* ===================== */}
            {/* Password */}
            {/* ===================== */}

            <motion.div variants={item} className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <Lock size={18} className={styles.inputIcon} />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
              </div>
            </motion.div>

            {/* ===================== */}
            {/* Options */}
            {/* ===================== */}

            <motion.div variants={item} className={styles.options}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />

                <span>Remember me</span>
              </label>

              <button type="button" className={styles.forgot}>
                Forgot Password?
              </button>
            </motion.div>

            {/* ===================== */}
            {/* Continue Button */}
            {/* ===================== */}

            <motion.button
              variants={item}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className={styles.submitButton}
            >
              Continue
              <ArrowRight size={18} />
            </motion.button>
          </form>
        </motion.div>
      </main>

      {/* =================================== */}
      {/* Footer */}
      {/* =================================== */}

      <motion.div variants={item} className={styles.footer}>
        <button type="button" onClick={onBack} className={styles.backLink}>
          <ArrowLeft size={16} />
          Change Department
        </button>

        <p className={styles.copyright}>© 2026 Enterprise AI Knowledge Hub</p>

        <div className={styles.footerLinks}>
          <button type="button">Privacy</button>

          <button type="button">Terms</button>

          <button type="button">Help</button>
        </div>
      </motion.div>

      {/* =================================== */}
      {/* Workflow Stepper */}
      {/* =================================== */}

      <footer className={styles.stepperFooter}>
        <div className={styles.stepper}>
          <div className={styles.step}>
            <div className={styles.completed}>✓</div>

            <span>Grant Access</span>
          </div>

          <div className={styles.line} />

          <div className={styles.step}>
            <div className={styles.completed}>✓</div>

            <span>Role</span>
          </div>

          <div className={styles.line} />

          <div className={styles.step}>
            <div className={styles.completed}>✓</div>

            <span>Department</span>
          </div>

          <div className={styles.line} />

          <div className={styles.step}>
            <div className={styles.active}>4</div>

            <span>Login</span>
          </div>

          <div className={styles.line} />

          <div className={styles.step}>
            <div className={styles.pending}>5</div>

            <span>Workspace</span>
          </div>
        </div>
      </footer>
    </div>
  );
}