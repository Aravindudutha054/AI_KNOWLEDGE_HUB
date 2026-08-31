import { useState } from "react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  MessageSquare,
  FolderOpen,
  BookOpen,
  BarChart3,
  Bell,
  Settings,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import styles from "./Sidebar.module.css";

const employeeMenu = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },

  {
id: "chat",    label: "Ask AI",
    icon: MessageSquare,
  },

  {
    id: "documents",
    label: "Documents",
    icon: FolderOpen,
  },

  {
    id: "knowledge-base",
    label: "Knowledge Base",
    icon: BookOpen,
  },

  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
  },

  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },

  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

const adminMenu = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },

  {
    id: "employees",
    label: "Employees",
    icon: ShieldCheck,
  },

  {
    id: "documents",
    label: "Documents",
    icon: FolderOpen,
  },

  {
    id: "knowledge-base",
    label: "Knowledge Base",
    icon: BookOpen,
  },

  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
  },

  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },

  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar({
  role,

  department,

  user,

  active = "dashboard",

  onNavigate,
}) {
  const [collapsed, setCollapsed] = useState(false);

  const menu = role === "admin" ? adminMenu : employeeMenu;

  return (
    <motion.aside
      initial={{
        x: -40,

        opacity: 0,
      }}
      animate={{
        x: 0,

        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`${styles.sidebar}

${collapsed ? styles.collapsed : ""}`}
    >
      <div className={styles.logoSection}>
        <div className={styles.logoIcon}>
          <ShieldCheck size={22} />
        </div>

        <div className={styles.logoText}>
          <h2>Enterprise AI</h2>

          <span>Knowledge Hub</span>
        </div>

        <button
          className={styles.collapseButton}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className={styles.navigation}>
        {menu.map((item) => {
          const Icon = item.icon;

          const isActive = active === item.id;

          return (
            <NavLink
              key={item.id}
              to={`/employee/${item.id}`}
              className={({ isActive }) =>
                `${styles.navItem}
${isActive ? styles.active : ""}`
              }
            >
              <div className={styles.iconWrapper}>
                <Icon size={20} />
              </div>

              {!collapsed && <span>{item.label}</span>}

              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className={styles.activeIndicator}
                />
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className={styles.bottomSection}>
        {/* ============================= */}
        {/* Department Card */}
        {/* ============================= */}

        <div className={styles.departmentCard}>
          <div className={styles.departmentIcon}>
            <ShieldCheck size={18} />
          </div>

          {!collapsed && (
            <div className={styles.departmentInfo}>
              <span>Department</span>

              <strong>

    {user?.department?.name || "Department"}

</strong>
            </div>
          )}
        </div>

        {/* ============================= */}
        {/* User Profile */}
        {/* ============================= */}

        <div className={styles.profile}>
          <div className={styles.avatar}>
            {user?.fullName
    ? user.fullName.charAt(0).toUpperCase()
    : "U"}
          </div>

          {!collapsed && (
            <div className={styles.profileInfo}>
              <strong>{user?.fullName || "User"}</strong>

              <span>{role === "admin" ? "Administrator" : "Employee"}</span>
            </div>
          )}

          <div className={styles.status} />
        </div>
      </div>
    </motion.aside>
  );
}