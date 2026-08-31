import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  Database,
  Lock,
  FileSearch,
  Users,
  BarChart3,
  Cloud,
} from "lucide-react";

import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";

import styles from "./FeatureGrid.module.css";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Employees can retrieve only department-authorized knowledge using enterprise RBAC.",
    color: "#00C2A8",
  },
  {
    icon: BrainCircuit,
    title: "Gemini Powered AI",
    description:
      "Generate accurate, context-aware answers using Retrieval Augmented Generation.",
    color: "#8B5CF6",
  },
  {
    icon: Database,
    title: "Vector Database",
    description:
      "Semantic search enables fast and highly relevant document retrieval.",
    color: "#2563EB",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Department isolation prevents cross-department information leakage.",
    color: "#F59E0B",
  },
  {
    icon: FileSearch,
    title: "Source Citations",
    description:
      "Every response includes references to the original enterprise documents.",
    color: "#06B6D4",
  },
  {
    icon: Users,
    title: "Multi-Department",
    description:
      "Support HR, IT, Finance, Legal, Marketing, Operations and more.",
    color: "#22C55E",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track usage, AI performance, uploads and employee interactions.",
    color: "#EF4444",
  },
  {
    icon: Cloud,
    title: "Scalable Architecture",
    description:
      "Designed for enterprise deployments with cloud-native infrastructure.",
    color: "#0EA5E9",
  },
];

export default function FeatureGrid() {
  return (
    <section
      className={styles.section}
      id="features"
    >
      <Container size="xl">

        <SectionHeader
          eyebrow="Platform Features"
          title="Everything Needed For Enterprise Knowledge AI"
          description="Built with enterprise-grade security, Retrieval Augmented Generation, intelligent document search and scalable cloud architecture."
        />

        <div className={styles.grid}>

          {FEATURES.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.article
                key={feature.title}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
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
                  className={styles.icon}
                  style={{
                    background: feature.color,
                  }}
                >

                  <Icon size={28} />

                </div>

                <h3>

                  {feature.title}

                </h3>

                <p>

                  {feature.description}

                </p>

              </motion.article>

            );

          })}

        </div>

      </Container>
    </section>
  );
}