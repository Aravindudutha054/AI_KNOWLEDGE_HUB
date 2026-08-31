import { motion } from "framer-motion";
import {
  Database,
  FileText,
  ScanSearch,
  Boxes,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";

import styles from "./Hero.module.css";

const pipeline = [
  {
    title: "Documents",
    icon: FileText,
    color: "#2563EB",
  },
  {
    title: "OCR",
    icon: ScanSearch,
    color: "#0EA5E9",
  },
  {
    title: "Chunking",
    icon: Boxes,
    color: "#14B8A6",
  },
  {
    title: "Vector DB",
    icon: Database,
    color: "#06B6D4",
  },
  {
    title: "Retrieval",
    icon: ShieldCheck,
    color: "#10B981",
  },
  {
    title: "Gemini",
    icon: BrainCircuit,
    color: "#8B5CF6",
  },
  {
    title: "Answer",
    icon: Sparkles,
    color: "#F59E0B",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Hero({
  onGrantAccess,
}) {
  return (
    <section className={styles.hero}>

      <div className={styles.background} />

      <div className={styles.container}>

        <motion.div
          className={styles.content}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >

          <span className={styles.badge}>
            ENTERPRISE RAG ARCHITECTURE
          </span>

          <h1 className={styles.title}>
            Enterprise AI
            <br />
            Knowledge Hub
          </h1>

          <motion.button
  whileHover={{
    scale: 1.04,
  }}
  whileTap={{
    scale: 0.98,
  }}
  onClick={onGrantAccess}
  className={styles.button}
>
            Grant Access

            <ArrowRight size={20}/>
          </motion.button>

        </motion.div>

        <motion.div

          className={styles.pipeline}

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.9
          }}

        >

          {pipeline.map((item,index)=>{

            const Icon=item.icon;

            return(

              <div
                key={item.title}
                className={styles.pipelineItem}
              >

                <motion.div

                  className={styles.icon}

                  style={{
                    borderColor:item.color
                  }}

                  animate={{

                    boxShadow:[

                      `0 0 0px ${item.color}`,

                      `0 0 20px ${item.color}`,

                      `0 0 0px ${item.color}`

                    ]

                  }}

                  transition={{

                    repeat:Infinity,

                    duration:2,

                    delay:index*.15

                  }}

                >

                  <Icon
                    size={28}
                    color={item.color}
                  />

                </motion.div>

                <span>
                  {item.title}
                </span>

                {index!==pipeline.length-1 && (

                  <motion.div

                    className={styles.connector}

                    initial={{
                      scaleX:0
                    }}

                    whileInView={{
                      scaleX:1
                    }}

                    transition={{
                      delay:index*.15,
                      duration:.5
                    }}

                  />

                )}

              </div>

            );

          })}

        </motion.div>

        {/* ==========================
            Animated Data Packets
        ========================== */}

        <div className={styles.packetLayer}>

          {[0,1,2].map((packet)=>(

            <motion.div

              key={packet}

              className={styles.packet}

              initial={{
                left:"6%",
                opacity:0
              }}

              animate={{
                left:"94%",
                opacity:[0,1,1,0]
              }}

              transition={{
                repeat:Infinity,
                duration:4,
                delay:packet*1.25,
                ease:"linear"
              }}

            />

          ))}

        </div>

        {/* ==========================
            Background Glow
        ========================== */}

        <div className={styles.glowOne}/>

        <div className={styles.glowTwo}/>

        <div className={styles.glowThree}/>

        {/* ==========================
            Pipeline Status
        ========================== */}

        <motion.div

          className={styles.statusBar}

          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:.5
          }}

        >

          <div className={styles.statusItem}>

            <span
              className={styles.dot}
            />

            Documents Indexed

          </div>

          <div className={styles.statusItem}>

            <span
              className={styles.dot}
            />

            Department Isolation

          </div>

          <div className={styles.statusItem}>

            <span
              className={styles.dot}
            />

            Source Cited Answers

          </div>

        </motion.div>

      </div>

      {/* ==========================
          Bottom Fade
      ========================== */}

      <div
        className={styles.bottomFade}
      />

    </section>

  );

}
