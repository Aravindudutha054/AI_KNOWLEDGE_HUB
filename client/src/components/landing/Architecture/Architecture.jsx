// src/components/landing/Architecture/Architecture.jsx
// ===============================================
// PART 1/2
// ===============================================

import { motion } from "framer-motion";
import {
  User,
  ShieldCheck,
  Building2,
  FileText,
  ScanText,
  Blocks,
  BrainCircuit,
  Database,
  Search,
  Sparkles,
  FileCheck,
  Server,
  Lock,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import GlassCard from "../../ui/GlassCard";

import styles from "./Architecture.module.css";

/* =====================================================
   Architecture Layers
===================================================== */

const LAYERS = [
  {
    title: "Presentation Layer",
    color: "#2563EB",
    items: [
      "Employee Portal",
      "Admin Portal",
      "Analytics Dashboard",
    ],
  },
  {
    title: "AI Processing Layer",
    color: "#00C2A8",
    items: [
      "Authentication",
      "RBAC",
      "OCR",
      "Chunking",
      "Embeddings",
      "Retriever",
      "Gemini",
    ],
  },
  {
    title: "Data Layer",
    color: "#8B5CF6",
    items: [
      "MongoDB",
      "Department DB",
      "Vector DB",
      "Cloud Storage",
    ],
  },
];

/* =====================================================
   AI Cluster
===================================================== */

const CLUSTER = [
  {
    title: "OCR",
    icon: ScanText,
    color: "#2563EB",
  },
  {
    title: "Chunking",
    icon: Blocks,
    color: "#00C2A8",
  },
  {
    title: "Embeddings",
    icon: BrainCircuit,
    color: "#8B5CF6",
  },
  {
    title: "Vector DB",
    icon: Database,
    color: "#14B8A6",
  },
  {
    title: "Retriever",
    icon: Search,
    color: "#22C55E",
  },
  {
    title: "Gemini",
    icon: Sparkles,
    color: "#F59E0B",
  },
];

/* =====================================================
   Request Journey
===================================================== */

const JOURNEY = [
  {
    icon: User,
    title: "Employee Request",
  },
  {
    icon: Lock,
    title: "Authentication",
  },
  {
    icon: ShieldCheck,
    title: "RBAC",
  },
  {
    icon: Building2,
    title: "Department Filter",
  },
  {
    icon: Database,
    title: "Vector Search",
  },
  {
    icon: BrainCircuit,
    title: "Gemini",
  },
  {
    icon: FileCheck,
    title: "Source Cited Response",
  },
];

/* =====================================================
   Technology Stack
===================================================== */

const STACK = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Gemini",
  "Pinecone",
  "Docker",
  "JWT",
  "Redis",
  "Cloud Storage",
];

/* =====================================================
   Live Metrics
===================================================== */

const METRICS = [
  {
    value: "250K+",
    label: "Indexed Documents",
  },
  {
    value: "99.99%",
    label: "Availability",
  },
  {
    value: "8 ms",
    label: "Vector Retrieval",
  },
  {
    value: "100%",
    label: "Department Isolation",
  },
];

/* =====================================================
   Component
===================================================== */

export default function Architecture() {
  return (
    <section
      id="architecture"
      className={styles.section}
    >
      <Container size="xl">

        <SectionHeader
          eyebrow="Enterprise Architecture"
          title="Enterprise AI System Architecture"
          description="
          Every employee request travels through a secure
          enterprise pipeline—from authentication and
          department isolation to vector retrieval and
          Gemini reasoning—before producing a
          source-cited response.
          "
        />

        {/* =======================================
            Architecture Layers
        ======================================== */}

        <div className={styles.layers}>

          {LAYERS.map((layer, index) => (

            <motion.div
              key={layer.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
            >

              <GlassCard
                className={styles.layerCard}
              >

                <div
                  className={styles.layerBar}
                  style={{
                    background: layer.color,
                  }}
                />

                <h3>

                  {layer.title}

                </h3>

                <div className={styles.layerItems}>

                  {layer.items.map((item) => (

                    <span
                      key={item}
                      className={styles.layerChip}
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

        {/* =======================================
            AI Processing Cluster
        ======================================== */}

        <div className={styles.clusterSection}>

          <div className={styles.clusterHeader}>

            <Server size={24} />

            <h2>

              AI Processing Cluster

            </h2>

          </div>

          <div className={styles.cluster}>

            {CLUSTER.map((node, index) => {

              const Icon = node.icon;

              return (

                <motion.div
                  key={node.title}
                  className={styles.node}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >

                  <div
                    className={styles.nodeIcon}
                    style={{
                      background: node.color,
                    }}
                  >

                    <Icon size={24} />

                  </div>

                  <span>

                    {node.title}

                  </span>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* ==========================
           PART 2 STARTS HERE
           Request Journey
           Security Panel
           Tech Stack
           Metrics
           CTA
        ========================== */}

        {/* =======================================
    PART 2/2
    Request Journey
======================================= */}

<div className={styles.contentGrid}>

  <motion.div
    className={styles.requestCard}
    initial={{
      opacity: 0,
      x: -40,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{
      once: true,
    }}
  >

    <div className={styles.cardHeader}>

      <ArrowDown size={18} />

      <h3>

        AI Request Journey

      </h3>

    </div>

    <div className={styles.journey}>

      {JOURNEY.map((step, index) => {

        const Icon = step.icon;

        return (

          <div
            key={step.title}
            className={styles.journeyItem}
          >

            <div className={styles.journeyIcon}>

              <Icon size={20} />

            </div>

            <span>

              {step.title}

            </span>

            {index !== JOURNEY.length - 1 && (

              <motion.div
                className={styles.verticalLine}
                initial={{
                  scaleY: 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                }}
              >

                <motion.div
                  className={styles.packet}
                  animate={{
                    y: [0, 48],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.15,
                  }}
                />

              </motion.div>

            )}

          </div>

        );

      })}

    </div>

  </motion.div>

  {/* =======================================
      Security Panel
  ======================================= */}

  <motion.div
    className={styles.securityCard}
    initial={{
      opacity: 0,
      x: 40,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{
      once: true,
    }}
  >

    <div className={styles.cardHeader}>

      <ShieldCheck size={18} />

      <h3>

        Enterprise Security

      </h3>

    </div>

    {[
      "JWT Authentication",
      "Role-Based Access Control",
      "Department Isolation",
      "AES-256 Encryption",
      "Audit Logging",
      "Source Verification",
    ].map((item) => (

      <div
        key={item}
        className={styles.securityItem}
      >

        <CheckCircle2 size={18} />

        <span>

          {item}

        </span>

      </div>

    ))}

  </motion.div>

</div>

{/* =======================================
    Technology Stack
======================================= */}

<motion.div
  className={styles.stackSection}
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
>

  <h3>

    Technology Stack

  </h3>

  <div className={styles.stackGrid}>

    {STACK.map((tech) => (

      <span
        key={tech}
        className={styles.stackChip}
      >

        {tech}

      </span>

    ))}

  </div>

</motion.div>

{/* =======================================
    Metrics
======================================= */}

<div className={styles.metrics}>

  {METRICS.map((metric, index) => (

    <motion.div
      key={metric.label}
      className={styles.metricCard}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.1,
      }}
      whileHover={{
        y: -6,
      }}
    >

      <span className={styles.metricValue}>

        {metric.value}

      </span>

      <span className={styles.metricLabel}>

        {metric.label}

      </span>

    </motion.div>

  ))}

</div>

{/* =======================================
    CTA
======================================= */}

<motion.div
  className={styles.cta}
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
>

  <h2>

    Ready to Deploy Enterprise AI?

  </h2>

  <p>

    Secure knowledge retrieval,
    department isolation,
    enterprise scalability,
    and source-cited AI—
    all in one platform.

  </p>

  <div className={styles.ctaActions}>

    <button className={styles.primaryButton}>

      Launch Workspace

    </button>

    <button className={styles.secondaryButton}>

      Schedule Demo

    </button>

  </div>

</motion.div>

</Container>

</section>
  );
}
