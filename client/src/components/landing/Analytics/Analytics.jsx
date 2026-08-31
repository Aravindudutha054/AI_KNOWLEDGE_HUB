import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Database,
  FileText,
  Users,
  TrendingUp,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";

import styles from "./Analytics.module.css";

const STATS = [
  {
    title: "AI Requests",
    value: "24.8K",
    change: "+18%",
    icon: BrainCircuit,
    color: "#8B5CF6",
  },
  {
    title: "Indexed Documents",
    value: "250K",
    change: "+12%",
    icon: Database,
    color: "#2563EB",
  },
  {
    title: "Departments",
    value: "15",
    change: "Active",
    icon: Users,
    color: "#00C2A8",
  },
  {
    title: "Response Accuracy",
    value: "98.7%",
    change: "+2%",
    icon: ShieldCheck,
    color: "#22C55E",
  },
];

const DEPARTMENTS = [
  { name: "HR", usage: 92 },
  { name: "IT", usage: 84 },
  { name: "Finance", usage: 76 },
  { name: "Legal", usage: 61 },
  { name: "Operations", usage: 55 },
];

const ACTIVITIES = [
  "HR uploaded Leave Policy.pdf",
  "Gemini answered Finance query",
  "IT indexed Network SOP",
  "Legal updated Compliance Guide",
  "Marketing knowledge synchronized",
];

export default function Analytics() {
  return (
    <section
      id="analytics"
      className={styles.section}
    >
      <Container size="xl">

        <SectionHeader
          eyebrow="Enterprise Analytics"
          title="Monitor Your AI Knowledge Platform"
          description="Track document indexing, AI usage, department adoption and enterprise performance through a unified analytics dashboard."
        />

        <div className={styles.statsGrid}>

          {STATS.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                className={styles.statCard}
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
                    background: item.color,
                  }}
                >

                  <Icon size={24} />

                </div>

                <h3>{item.value}</h3>

                <p>{item.title}</p>

                <span>{item.change}</span>

              </motion.div>

            );

          })}

        </div>

        <div className={styles.dashboard}>

          <motion.div
            className={styles.departmentCard}
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

            <h3>

              Department Usage

            </h3>

            {DEPARTMENTS.map((dept) => (

              <div
                key={dept.name}
                className={styles.progressRow}
              >

                <div className={styles.progressLabel}>

                  <span>{dept.name}</span>

                  <span>{dept.usage}%</span>

                </div>

                <div className={styles.progressBar}>

                  <motion.div
                    className={styles.progressFill}
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${dept.usage}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />

                </div>

              </div>

            ))}

          </motion.div>

          <motion.div
            className={styles.activityCard}
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

            <h3>

              Live Activity

            </h3>

            {ACTIVITIES.map((activity) => (

              <div
                key={activity}
                className={styles.activityItem}
              >

                <Activity size={16} />

                <span>

                  {activity}

                </span>

                <Clock3 size={14} />

              </div>

            ))}

          </motion.div>

        </div>

        <motion.div
          className={styles.footerCard}
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

          <TrendingUp size={28} />

          <div>

            <h3>

              Enterprise AI Performance

            </h3>

            <p>

              Your AI platform is operating normally with
              excellent retrieval accuracy, secure department
              isolation and high document availability.

            </p>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}