import { motion } from "framer-motion";

import { CalendarDays, Building2, ShieldCheck } from "lucide-react";

import styles from "./WelcomeBanner.module.css";

export default function WelcomeBanner({
  user,

  role,

  department,
}) {
  const now = new Date();

  const greeting = () => {
    const hour = now.getHours();

    if (hour < 12) return "Good Morning";

    if (hour < 17) return "Good Afternoon";

    return "Good Evening";
  };

  const formattedDate = now.toLocaleDateString(
    undefined,

    {
      weekday: "long",

      day: "numeric",

      month: "long",

      year: "numeric",
    }
  );

  return (
    <motion.section
      initial={{
        opacity: 0,

        y: 18,
      }}
      animate={{
        opacity: 1,

        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className={styles.banner}
    >
      <div className={styles.left}>
        <h1>
          {greeting()}, {user?.name || "User"} 👋
        </h1>

        <p>Welcome back to Enterprise AI Knowledge Hub</p>
        <div className={styles.infoRow}>
          {/* ========================= */}
          {/* Department */}
          {/* ========================= */}

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Building2 size={18} />
            </div>

            <div>
              <span>Department</span>

              <strong>

    {user?.department?.name || "Department"}

</strong>
            </div>
          </div>

          {/* ========================= */}
          {/* Role */}
          {/* ========================= */}

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <ShieldCheck size={18} />
            </div>

            <div>
              <span>Access</span>

              <strong>{role === "admin" ? "Administrator" : "Employee"}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* Right Side */}
      {/* ===================================== */}

      <div className={styles.right}>
        <div className={styles.dateCard}>
          <div className={styles.dateIcon}>
            <CalendarDays size={20} />
          </div>

          <div>
            <span>Today</span>

            <strong>{formattedDate}</strong>
          </div>
        </div>

        <div className={styles.statusCard}>
          <div className={styles.statusDot} />

          <span>Workspace Active</span>
        </div>
      </div>
      {/* ===================================== */}
      {/* End Right Side */}
      {/* ===================================== */}
    </motion.section>
  );
}