import { motion } from "framer-motion";

import { Bot, Plus, Download, Trash2, Wifi } from "lucide-react";

import styles from "./ChatHeader.module.css";

export default function ChatHeader({
  department,

  role,

  onNewChat,

  onExport,

  onClear,
}) {
  return (
    <motion.header
      initial={{
        opacity: 0,

        y: -16,
      }}
      animate={{
        opacity: 1,

        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className={styles.header}
    >
      <div className={styles.left}>
        <div className={styles.icon}>
          <Bot size={24} />
        </div>

        <div className={styles.info}>
          <h2>Enterprise AI Assistant</h2>

          <div className={styles.meta}>
            {" "}
            <span className={styles.department}>
              {department || "Information Technology"}
            </span>
            <span className={styles.separator}>•</span>
            <span className={styles.status}>
              <Wifi size={14} />
              Connected
            </span>
            <span className={styles.separator}>•</span>
            <span className={styles.response}>Avg Response 1.2s</span>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* Right Actions */}
      {/* ================================= */}

      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={onNewChat}>
          <Plus size={18} />

          <span>New Chat</span>
        </button>

        <button
          className={styles.iconButton}
          onClick={onExport}
          title="Export Conversation"
        >
          <Download size={18} />
        </button>

        <button
          className={styles.iconButton}
          onClick={onClear}
          title="Clear Conversation"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.header>
  );
}