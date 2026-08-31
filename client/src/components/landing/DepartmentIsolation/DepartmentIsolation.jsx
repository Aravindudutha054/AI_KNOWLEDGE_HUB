// src/components/landing/DepartmentIsolation/DepartmentIsolation.jsx
// Part 1/6
import { motion } from "framer-motion";
import {
  Users,
  Monitor,
  Landmark,
  Megaphone,
  Settings,
  Scale,
  ShieldCheck,
  Headphones,
  Lock,
  Database,
  BrainCircuit,
} from "lucide-react";

import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import GlassCard from "../../ui/GlassCard";

import FadeIn from "../../../animations/FadeIn";
import Floating from "../../../animations/Floating";

import styles from "./DepartmentIsolation.module.css";

const DEPARTMENTS = [
  { key: "hr", label: "Human Resources", short: "HR", icon: Users, color: "#00C2A8" },
  { key: "it", label: "Information Technology", short: "IT", icon: Monitor, color: "#2563EB" },
  { key: "finance", label: "Finance", short: "FIN", icon: Landmark, color: "#0EA5E9" },
  { key: "marketing", label: "Marketing", short: "MKT", icon: Megaphone, color: "#8B5CF6" },
  { key: "operations", label: "Operations", short: "OPS", icon: Settings, color: "#22C55E" },
  { key: "legal", label: "Legal", short: "LEGAL", icon: Scale, color: "#F59E0B" },
  { key: "compliance", label: "Compliance", short: "CMP", icon: ShieldCheck, color: "#14B8A6" },
  { key: "support", label: "Support", short: "SUP", icon: Headphones, color: "#EF4444" },
];

const FEATURES = [
  "Role Based Access Control",
  "Department Isolation",
  "Encrypted Knowledge Storage",
  "Source Verified Answers",
];

export default function DepartmentIsolation() {
  return (
    <section id="departments" className={styles.section}>
      <Container size="xl">
        {/* Header + Security Features */}
        <FadeIn>
          <SectionHeader
            eyebrow="Department-Level Security"
            title="Complete Department Isolation with Enterprise RBAC"
            description={
              "Every employee only accesses information belonging to their assigned department. HR employees cannot retrieve IT documents, Finance cannot access Legal data, and every AI response is generated exclusively from department-authorized knowledge."
            }
          />
        </FadeIn>

        <motion.div
          className={styles.introCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className={styles.heroCard}>
            <div className={styles.heroTop}>
              <div className={styles.liveStatus}>
                <span className={styles.liveDot} /> Zero Cross-Department Access
              </div>

              <div className={styles.secureBadge}>
                <Lock size={18} /> Enterprise Protected
              </div>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.left}>
                <h3>Secure AI Knowledge Isolation</h3>

                <p>
                  Each department maintains an independent knowledge space. Retrieval
                  happens only inside the selected department before Gemini generates
                  the final source-cited response.
                </p>

                <div className={styles.featureGrid}>
                  {FEATURES.map((feature) => (
                    <motion.div key={feature} className={styles.feature} whileHover={{ y: -4 }}>
                      <ShieldCheck size={16} /> {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              <Floating delay={0.4}>
                <div className={styles.aiHub}>
                  <div className={styles.aiCore}>
                    <BrainCircuit size={42} />
                  </div>

                  <h4>Enterprise AI</h4>
                  <p>Secure Retrieval Engine</p>
                </div>
              </Floating>
            </div>
          </GlassCard>
        </motion.div>

        {/* Department Grid */}
        <div className={styles.departmentGrid}>
          {DEPARTMENTS.map((department, index) => {
            const Icon = department.icon;
            return (
              <motion.div
                key={department.key}
                className={styles.departmentItem}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -12, scale: 1.04 }}
              >
                <GlassCard className={styles.departmentCard}>
                  <div className={styles.departmentGlow} style={{ background: department.color }} />

                  <div className={styles.departmentIcon} style={{ background: department.color }}>
                    <Icon size={30} />
                  </div>

                  <div className={styles.departmentBody}>
                    <h3>{department.short}</h3>
                    <p>{department.label}</p>
                  </div>

                  <div className={styles.departmentStatus}>
                    <span className={styles.statusDot} /> Authorized
                  </div>

                  <div className={styles.databaseCard}>
                    <Database size={16} /> Dedicated Vector DB
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Connections */}
        <div className={styles.connectionWrapper}>
          {DEPARTMENTS.map((department, index) => (
            <motion.div
              key={department.key}
              className={styles.connection}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <motion.div
                className={styles.connectionPulse}
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.25, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Security Hub */}
        <div className={styles.securitySection}>
          <motion.div
            className={styles.securityHub}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Floating delay={0.5}>
              <GlassCard className={styles.centerCard}>
                <div className={styles.centerGlow} />
                <div className={styles.centerIcon}>
                  <BrainCircuit size={52} />
                </div>

                <h3>Enterprise AI Core</h3>

                <p>
                  Every AI request first validates the authenticated user's role,
                  department and permissions before retrieving any document.
                </p>

                <div className={styles.securityBadges}>
                  <div className={styles.securityBadge}>
                    <ShieldCheck size={16} /> RBAC
                  </div>
                  <div className={styles.securityBadge}>
                    <Lock size={16} /> Encryption
                  </div>
                  <div className={styles.securityBadge}>
                    <Database size={16} /> Vector DB
                  </div>
                </div>
              </GlassCard>
            </Floating>

            {/* Secure Data Flow */}
            <div className={styles.dataFlow}>
              {DEPARTMENTS.map((department, index) => (
                <motion.div
                  key={department.key}
                  className={styles.dataLine}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <motion.div
                    className={styles.dataPacket}
                    animate={{ x: [0, 160] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3, ease: "linear" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Information Cards */}
          <div className={styles.infoGrid}>
            <motion.div className={styles.infoCard} whileHover={{ y: -8 }}>
              <Lock size={34} className={styles.infoIcon} />
              <h4>Zero Data Leakage</h4>
              <p>Cross-department retrieval is completely blocked by enterprise access rules.</p>
            </motion.div>

            <motion.div className={styles.infoCard} whileHover={{ y: -8 }}>
              <ShieldCheck size={34} className={styles.infoIcon} />
              <h4>Verified Responses</h4>
              <p>Every answer is generated only from authorized documents with citations.</p>
            </motion.div>

            <motion.div className={styles.infoCard} whileHover={{ y: -8 }}>
              <Database size={34} className={styles.infoIcon} />
              <h4>Isolated Storage</h4>
              <p>Each department owns an independent vector database for maximum security.</p>
            </motion.div>
          </div>
        </div>

        {/* Metrics + Activity */}
        <div className={styles.metricsSection}>
          <motion.div
            className={styles.metricsGrid}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className={styles.metricCard} whileHover={{ y: -8 }}>
              <span className={styles.metricValue}>100%</span>
              <span className={styles.metricLabel}>Department Isolation</span>
            </motion.div>

            <motion.div className={styles.metricCard} whileHover={{ y: -8 }}>
              <span className={styles.metricValue}>256-bit</span>
              <span className={styles.metricLabel}>AES Encryption</span>
            </motion.div>

            <motion.div className={styles.metricCard} whileHover={{ y: -8 }}>
              <span className={styles.metricValue}>RBAC</span>
              <span className={styles.metricLabel}>Permission Engine</span>
            </motion.div>

            <motion.div className={styles.metricCard} whileHover={{ y: -8 }}>
              <span className={styles.metricValue}>99.99%</span>
              <span className={styles.metricLabel}>Retrieval Accuracy</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.activityPanel}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <div className={styles.activityHeader}>
              <ShieldCheck size={20} /> Secure Retrieval Activity
            </div>

            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <span className={styles.activityDot} /> HR employee accessed HR knowledge base
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityDot} /> Finance documents indexed successfully
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityDot} /> IT vector database synchronized
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityDot} /> Legal policies updated
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityDot} /> Compliance audit completed
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background & Particles */}
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
        <div className={styles.glowThree} />
        <div className={styles.gridOverlay} />
        <div className={styles.blurLayer} />

        <div className={styles.particles}>
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* Footer & SVG Connections */}
        <div className={styles.footerSection}>
          <motion.div
            className={styles.footerBanner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.footerContent}>
              <div>
                <h3>Enterprise Department Isolation</h3>
                <p>
                  Every employee retrieves only department-authorized knowledge. Zero
                  cross-department access. Zero data leakage.
                </p>
              </div>

              <motion.div className={styles.systemStatus} animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                <span className={styles.systemDot} /> Security Active
              </motion.div>
            </div>
          </motion.div>

          <svg className={styles.securitySvg} viewBox="0 0 1600 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="securityGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00C2A8" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            <motion.path
              d="M120 300 C350 120 600 120 800 300 S1250 480 1480 300"
              fill="none"
              stroke="url(#securityGradient)"
              strokeWidth="3"
              strokeDasharray="10 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className={styles.flowParticle}
              initial={{ left: "8%", opacity: 0 }}
              animate={{ left: ["8%", "92%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: index * 0.8, ease: "linear" }}
            />
          ))}

          <div className={styles.meshOne} />
          <div className={styles.meshTwo} />
          <div className={styles.meshThree} />
          <div className={styles.blurCircleOne} />
          <div className={styles.blurCircleTwo} />
          <div className={styles.blurCircleThree} />
        </div>
      </Container>
    </section>
  );
}
