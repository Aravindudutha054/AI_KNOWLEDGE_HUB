import { useState } from "react";

import { motion } from "framer-motion";

import {
  Search,
  Bell,
  Menu,
  ChevronDown,
  Building2,
  UserCircle,
} from "lucide-react";

import styles from "./Topbar.module.css";

export default function Topbar({
  user,

  department,

  title = "Dashboard",

  onMenuClick,

  onSearch,

  onNotifications,

  onProfile,
}) {
  const [query, setQuery] = useState("");

  return (
    <motion.header
      initial={{
        y: -30,

        opacity: 0,
      }}
      animate={{
        y: 0,

        opacity: 1,
      }}
      transition={{
        duration: 0.45,
      }}
      className={styles.topbar}
    >
      <div className={styles.left}>
        <button className={styles.menuButton} onClick={onMenuClick}>
          <Menu size={20} />
        </button>

        <h1>{title}</h1>
      </div>

      <div className={styles.center}>
        <div className={styles.search}>
          <Search size={18} className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);

              onSearch?.(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={styles.right}>
        {/* ============================== */}
        {/* Notifications */}
        {/* ============================== */}

        <button className={styles.iconButton} onClick={onNotifications}>
          <Bell size={19} />

          <span className={styles.notificationDot} />
        </button>

        {/* ============================== */}
        {/* Department */}
        {/* ============================== */}

        <div className={styles.department}>
          <Building2 size={16} />

          <span>{user?.department?.name || "IT"}</span>
        </div>

        {/* ============================== */}
        {/* Profile */}
        {/* ============================== */}

        <button className={styles.profile} onClick={onProfile}>
          <div className={styles.avatar}>
            {user?.fullName ? (
              user.fullName.charAt(0).toUpperCase()
            ) : (
              <UserCircle size={28} />
            )}
          </div>

          <div className={styles.profileInfo}>
            <strong>{user?.fullName || "User"}</strong>

            <span>{user?.email || "Organization"}</span>
          </div>

          <ChevronDown size={16} className={styles.chevron} />
        </button>
      </div>
    </motion.header>
  );
}