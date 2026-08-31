// src/components/landing/RagPipeline/RagPipeline.jsx
// Part 1/6

import { motion } from "framer-motion";
import {
  FileText,
  ScanSearch,
  Scissors,
  BrainCircuit,
  Database,
  Search,
  Sparkles,
  MessageSquareText,
  ArrowRight,
} from "lucide-react";

import Container from "../../ui/Container";
import SectionHeader from "../../ui/SectionHeader";
import GlassCard from "../../ui/GlassCard";
import FadeIn from "../../../animations/FadeIn";
import Floating from "../../../animations/Floating";

import styles from "./RagPipeline.module.css";

const PIPELINE = [
  {
    id: 1,
    title: "Documents",
    subtitle: "PDF • DOCX • PPT • XLS",
    icon: FileText,
    color: "#2563EB",
  },
  {
    id: 2,
    title: "OCR",
    subtitle: "Extract Content",
    icon: ScanSearch,
    color: "#0EA5E9",
  },
  {
    id: 3,
    title: "Chunking",
    subtitle: "Semantic Split",
    icon: Scissors,
    color: "#06B6D4",
  },
  {
    id: 4,
    title: "Embeddings",
    subtitle: "Vector Encoding",
    icon: BrainCircuit,
    color: "#14B8A6",
  },
  {
    id: 5,
    title: "Vector DB",
    subtitle: "Similarity Search",
    icon: Database,
    color: "#10B981",
  },
  {
    id: 6,
    title: "Retriever",
    subtitle: "Top K Context",
    icon: Search,
    color: "#22C55E",
  },
  {
    id: 7,
    title: "Gemini",
    subtitle: "LLM Reasoning",
    icon: Sparkles,
    color: "#8B5CF6",
  },
  {
    id: 8,
    title: "Answer",
    subtitle: "Source Cited",
    icon: MessageSquareText,
    color: "#F59E0B",
  },
];

const STATS = [
  {
    label: "Documents Indexed",
    value: "50K+",
  },
  {
    label: "Vector Search",
    value: "<10ms",
  },
  {
    label: "Answer Accuracy",
    value: "99.8%",
  },
  {
    label: "Departments",
    value: "8+",
  },
];

export default function RagPipeline() {
  return (
    <section
      id="rag-pipeline"
      className={styles.section}
    >
      <Container size="xl">

{/* ===========================
    PART 2/6
=========================== */}

<FadeIn>

  <SectionHeader
    eyebrow="Retrieval Augmented Generation"
    title="Enterprise RAG Pipeline"
    description="
    Every document uploaded into the Enterprise AI Knowledge Hub
    passes through a secure Retrieval Augmented Generation pipeline.
    Documents are extracted, chunked, embedded into a vector database,
    retrieved intelligently and finally used by Gemini to generate
    secure department-specific answers with source citations."
  />

</FadeIn>

<div className={styles.pipelineWrapper}>

  <Floating delay={0.2}>

    <GlassCard className={styles.overviewCard}>

      <div className={styles.overviewHeader}>

        <div className={styles.liveBadge}>

          <span className={styles.liveDot}></span>

          Live Processing Pipeline

        </div>

        <div className={styles.processing}>

          <Sparkles size={18} />

          AI Active

        </div>

      </div>

      <h3>

        Enterprise Knowledge Processing

      </h3>

      <p>

        Every uploaded document is securely processed through
        multiple AI stages before becoming searchable inside
        the Enterprise Knowledge Hub.

      </p>

      <div className={styles.legend}>

        <div>

          <span
            className={styles.blue}
          ></span>

          Processing

        </div>

        <div>

          <span
            className={styles.green}
          ></span>

          Completed

        </div>

        <div>

          <span
            className={styles.purple}
          ></span>

          AI Reasoning

        </div>

      </div>

    </GlassCard>

  </Floating>

</div>

{/* ===========================
    PART 3 STARTS HERE
=========================== */}

<div className={styles.pipelineContainer}>

{/* ===========================
    PART 3/6
    Animated Pipeline
=========================== */}

<div className={styles.pipeline}>

  {PIPELINE.map((step, index) => {

    const Icon = step.icon;

    return (

      <div
        key={step.id}
        className={styles.pipelineItem}
      >

        <motion.div
          className={styles.node}
          initial={{
            opacity:0,
            y:40,
            scale:.9,
          }}
          whileInView={{
            opacity:1,
            y:0,
            scale:1,
          }}
          viewport={{
            once:true,
          }}
          transition={{
            delay:index*.12,
            duration:.5,
          }}
          whileHover={{
            y:-10,
            scale:1.04,
          }}
        >

          <div
            className={styles.nodeGlow}
            style={{
              background:step.color,
            }}
          />

          <div
            className={styles.iconWrapper}
            style={{
              background:step.color,
            }}
          >

            <Icon size={28}/>

          </div>

          <h4>

            {step.title}

          </h4>

          <p>

            {step.subtitle}

          </p>

          <motion.div
            className={styles.status}
            animate={{
              opacity:[.5,1,.5],
            }}
            transition={{
              duration:2,
              repeat:Infinity,
              delay:index*.15,
            }}
          >

            Ready

          </motion.div>

        </motion.div>

        {index !== PIPELINE.length-1 && (

          <div className={styles.connectorWrapper}>

            <div className={styles.connector}/>

            <motion.div
              className={styles.dataPacket}
              animate={{
                x:[0,90],
              }}
              transition={{
                duration:1.8,
                repeat:Infinity,
                ease:"linear",
                delay:index*.25,
              }}
            />

            <ArrowRight
              className={styles.arrow}
              size={18}
            />

          </div>

        )}

      </div>

    );

  })}

</div>

{/* ===========================
    FLOATING CONNECTION LINES
=========================== */}

<motion.div

className={styles.connectionLineOne}

animate={{

opacity:[.25,.8,.25],

}}

transition={{

duration:4,

repeat:Infinity,

}}

 />

<motion.div

className={styles.connectionLineTwo}

animate={{

opacity:[.2,.7,.2],

}}

transition={{

duration:5,

repeat:Infinity,

delay:1,

}}

 />

{/* ===========================
    PART 4 STARTS HERE
=========================== */}

<div className={styles.resultSection}>

{/* ===========================
    PART 4/6
    AI Response + Retrieval
=========================== */}

<Floating delay={0.4}>

  <motion.div
    className={styles.responseCard}
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
      duration: .6,
    }}
  >

    <div className={styles.responseHeader}>

      <div className={styles.responseTitle}>

        <Sparkles size={20} />

        AI Generated Response

      </div>

      <div className={styles.secureBadge}>

        RBAC Verified

      </div>

    </div>

    <div className={styles.question}>

      "What is the employee leave policy?"

    </div>

    <div className={styles.answer}>

      The Enterprise AI Knowledge Hub
      retrieved relevant HR documents
      from the vector database and
      generated this response using
      Retrieval Augmented Generation.

      Employees are entitled to
      annual leave according to the
      HR Leave Policy 2026.
      Every answer is generated only
      from authorized department
      documents.

    </div>

    <div className={styles.sources}>

      <h5>

        Sources

      </h5>

      <div className={styles.sourceList}>

        <div className={styles.source}>

          📄 HR_Leave_Policy.pdf

        </div>

        <div className={styles.source}>

          📄 Employee_Handbook.pdf

        </div>

        <div className={styles.source}>

          📄 Company_Rules.pdf

        </div>

      </div>

    </div>

  </motion.div>

</Floating>

{/* ====================================
      RETRIEVAL METRICS
==================================== */}

<motion.div
  className={styles.retrievalGrid}
  initial={{
    opacity: 0,
  }}
  whileInView={{
    opacity: 1,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    delay: .3,
  }}
>

  {STATS.map((item) => (

    <motion.div
      key={item.label}
      className={styles.metricCard}
      whileHover={{
        y: -8,
      }}
    >

      <span
        className={styles.metricValue}
      >

        {item.value}

      </span>

      <span
        className={styles.metricLabel}
      >

        {item.label}

      </span>

    </motion.div>

  ))}

</motion.div>

{/* ====================================
      RETRIEVAL STATUS
==================================== */}

<div className={styles.statusTimeline}>

  <div className={styles.timelineItem}>

    <span
      className={styles.timelineDot}
    />

    Document Retrieved

  </div>

  <div className={styles.timelineItem}>

    <span
      className={styles.timelineDot}
    />

    Context Ranked

  </div>

  <div className={styles.timelineItem}>

    <span
      className={styles.timelineDot}
    />

    Gemini Processing

  </div>

  <div className={styles.timelineItem}>

    <span
      className={styles.timelineDot}
    />

    Response Generated

  </div>

</div>

{/* ===========================
    PART 5 STARTS HERE
=========================== */}

<div className={styles.bottomSection}>

{/* ===========================
    PART 5/6
    Analytics + Floating Cards
=========================== */}

<Floating delay={0.8}>

  <motion.div
    className={styles.analyticsPanel}
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
    transition={{
      duration: 0.6,
    }}
  >

    <div className={styles.analyticsHeader}>

      <Database size={20} />

      Live Vector Database

    </div>

    <div className={styles.analyticsList}>

      <div className={styles.analyticsItem}>

        <span>Indexed Documents</span>

        <strong>52,184</strong>

      </div>

      <div className={styles.analyticsItem}>

        <span>Embeddings</span>

        <strong>1.82M</strong>

      </div>

      <div className={styles.analyticsItem}>

        <span>Similarity Search</span>

        <strong>8 ms</strong>

      </div>

      <div className={styles.analyticsItem}>

        <span>AI Accuracy</span>

        <strong>99.8%</strong>

      </div>

    </div>

  </motion.div>

</Floating>

<Floating delay={1.2}>

  <motion.div
    className={styles.activityPanel}
    initial={{
      opacity:0,
      x:40,
    }}
    whileInView={{
      opacity:1,
      x:0,
    }}
    viewport={{
      once:true,
    }}
    transition={{
      duration:.6,
    }}
  >

    <div className={styles.activityHeader}>

      Recent Pipeline Activity

    </div>

    <div className={styles.activityFeed}>

      <div className={styles.feedItem}>

        <span className={styles.greenDot}></span>

        HR Policies Indexed

      </div>

      <div className={styles.feedItem}>

        <span className={styles.greenDot}></span>

        Finance Embeddings Updated

      </div>

      <div className={styles.feedItem}>

        <span className={styles.greenDot}></span>

        Legal Repository Synced

      </div>

      <div className={styles.feedItem}>

        <span className={styles.greenDot}></span>

        IT Knowledge Refreshed

      </div>

      <div className={styles.feedItem}>

        <span className={styles.greenDot}></span>

        Marketing Documents Added

      </div>

    </div>

  </motion.div>

</Floating>

{/* ===========================
      FLOATING DECORATIONS
=========================== */}

<div className={styles.glowOne} />

<div className={styles.glowTwo} />

<div className={styles.glowThree} />

<div className={styles.pipelineGrid} />

<div className={styles.pipelineBlur} />

<div className={styles.pipelineParticles}>

  {Array.from({
    length:16,
  }).map((_,index)=>(

    <span
      key={index}
      className={styles.particle}
      style={{
        left:`${Math.random()*100}%`,
        top:`${Math.random()*100}%`,
        animationDelay:`${index*.3}s`,
      }}
    />

  ))}

</div>

{/* ===========================
      PART 6 STARTS HERE
=========================== */}

</div>

{/* ===========================
    PART 6/6
    Final Section
=========================== */}

<motion.div
  className={styles.footerBanner}
  initial={{
    opacity:0,
    y:40,
  }}
  whileInView={{
    opacity:1,
    y:0,
  }}
  viewport={{
    once:true,
  }}
  transition={{
    duration:.7,
    delay:.25,
  }}
>

  <div className={styles.footerContent}>

    <div>

      <h3>

        Enterprise AI Retrieval Pipeline

      </h3>

      <p>

        Secure • Department Isolated •
        Source Cited • Enterprise Ready

      </p>

    </div>

    <motion.div

      className={styles.footerStatus}

      animate={{

        scale:[1,1.08,1],

      }}

      transition={{

        repeat:Infinity,

        duration:2,

      }}

    >

      <span
        className={styles.footerDot}
      />

      System Healthy

    </motion.div>

  </div>

</motion.div>

{/* ===========================
      SVG FLOW
=========================== */}

<svg

className={styles.pipelineSvg}

viewBox="0 0 1600 420"

preserveAspectRatio="none"

>

<motion.path

d="M90 210
C220 210
300 210
420 210

S620 210
760 210

S980 210
1130 210

S1320 210
1510 210"

fill="none"

stroke="url(#pipelineGradient)"

strokeWidth="3"

strokeDasharray="10 12"

initial={{

pathLength:0,

}}

animate={{

pathLength:1,

}}

transition={{

duration:5,

repeat:Infinity,

ease:"linear",

}}

 />

<defs>

<linearGradient

id="pipelineGradient"

x1="0"

y1="0"

x2="1"

y2="0"

>

<stop

offset="0%"

stopColor="#00C2A8"

/>

<stop

offset="50%"

stopColor="#00D4FF"

/>

<stop

offset="100%"

stopColor="#2563EB"

/>

</linearGradient>

</defs>

</svg>

{/* ===========================
      DATA FLOW PARTICLES
=========================== */}

{Array.from({
length:6,
}).map((_,index)=>(

<motion.div

key={index}

className={styles.flowParticle}

initial={{

left:"5%",

opacity:0,

}}

animate={{

left:["5%","95%"],

opacity:[0,1,1,0],

}}

transition={{

duration:5,

repeat:Infinity,

delay:index*.8,

ease:"linear",

}}

 />

))}

{/* ===========================
      BACKGROUND DECORATION
=========================== */}

<div className={styles.meshOne} />

<div className={styles.meshTwo} />

<div className={styles.meshThree} />

<div className={styles.blurCircleOne} />

<div className={styles.blurCircleTwo} />

<div className={styles.blurCircleThree} />

        </div>

      </div>

      </Container>

    </section>
  );
}
