import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Building2,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import Container from "../../ui/Container";

import styles from "./Footer.module.css";

const PRODUCT = [
  "Ask AI",
  "RAG Pipeline",
  "Analytics",
  "Departments",
];

const COMPANY = [
  "Architecture",
  "Security",
  "Documentation",
  "Contact",
];

const TECHNOLOGIES = [
  "React",
  "Node.js",
  "MongoDB",
  "Gemini",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <Container size="xl">

        <div className={styles.grid}>

          <div>

            <div className={styles.logo}>

              <ShieldCheck size={28} />

              <div>

                <h2>

                  Enterprise AI

                </h2>

                <span>

                  Knowledge Hub

                </span>

              </div>

            </div>

            <p className={styles.description}>

              Secure enterprise knowledge retrieval powered by
              Retrieval Augmented Generation, department isolation
              and Gemini AI.

            </p>

          </div>

          <div>

            <h4>

              Product

            </h4>

            <ul>

              {PRODUCT.map((item) => (

                <li key={item}>

                  <a href="/">

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          <div>

            <h4>

              Platform

            </h4>

            <ul>

              {COMPANY.map((item) => (

                <li key={item}>

                  <a href="/">

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          <div>

            <h4>

              Technology

            </h4>

            <div className={styles.techStack}>

              {TECHNOLOGIES.map((tech) => (

                <span
                  key={tech}
                  className={styles.tech}
                >

                  {tech}

                </span>

              ))}

            </div>

          </div>

        </div>

        <motion.div
          className={styles.bottom}
          initial={{
            opacity:0,
          }}
          whileInView={{
            opacity:1,
          }}
          viewport={{
            once:true,
          }}
        >

          <span>

            © 2026 Enterprise AI Knowledge Hub

          </span>

          <div className={styles.socials}>

            <a href="/">

              <Users size={18} />

            </a>

            <a href="/">

              <Building2 size={18} />

            </a>

            <a href="/">

              <Mail size={18} />

            </a>

          </div>

          <a
            href="#hero"
            className={styles.topButton}
          >

            Back to Top

            <ArrowUpRight size={16} />

          </a>

        </motion.div>

      </Container>

    </footer>
  );
}