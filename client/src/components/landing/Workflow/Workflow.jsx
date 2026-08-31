import { motion } from "framer-motion";
import {
  User,
  ShieldCheck,
  Search,
  Database,
  Sparkles,
  FileCheck,
  ArrowRight,
} from "lucide-react";

import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";

import styles from "./Workflow.module.css";

const STEPS = [
  {
    title: "Employee",
    subtitle: "Login",
    icon: User,
    color: "#2563EB",
  },
  {
    title: "Verify",
    subtitle: "Department",
    icon: ShieldCheck,
    color: "#00C2A8",
  },
  {
    title: "Retrieve",
    subtitle: "Knowledge",
    icon: Search,
    color: "#06B6D4",
  },
  {
    title: "Vector DB",
    subtitle: "Similarity Search",
    icon: Database,
    color: "#22C55E",
  },
  {
    title: "Gemini",
    subtitle: "Reasoning",
    icon: Sparkles,
    color: "#8B5CF6",
  },
  {
    title: "Answer",
    subtitle: "Source Cited",
    icon: FileCheck,
    color: "#F59E0B",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className={styles.section}
    >
      <Container size="xl">

        <SectionHeader
          eyebrow="AI Workflow"
          title="How Every AI Request Works"
          description="Every question follows a secure enterprise workflow. The system verifies department permissions, retrieves only authorized documents, performs semantic search and generates a source-cited answer using Gemini."
        />

        <div className={styles.timeline}>

          {STEPS.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.title}
                className={styles.item}
              >

                <motion.div
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
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >

                  <div
                    className={styles.icon}
                    style={{
                      background: step.color,
                    }}
                  >

                    <Icon size={28} />

                  </div>

                  <h3>

                    {step.title}

                  </h3>

                  <p>

                    {step.subtitle}

                  </p>

                </motion.div>

                {index !== STEPS.length - 1 && (

                  <div className={styles.connector}>

                    <motion.div
                      className={styles.packet}
                      animate={{
                        x: [0, 80],
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * .2,
                      }}
                    />

                    <ArrowRight
                      size={18}
                      className={styles.arrow}
                    />

                  </div>

                )}

              </div>

            );

          })}

        </div>

        <motion.div
          className={styles.summary}
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

            Enterprise Security Guarantee

          </h3>

          <p>

            Every request is verified through Role Based Access Control before
            retrieval begins. The LLM never receives documents outside the
            authenticated employee's department, ensuring secure,
            source-cited answers with complete department isolation.

          </p>

        </motion.div>

      </Container>
    </section>
  );
}