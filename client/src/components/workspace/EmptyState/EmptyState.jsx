import { motion } from "framer-motion";
import {
    Sparkles,
    ShieldCheck,
    Building2,
    FileSearch,
    MessageSquare,
    Upload
} from "lucide-react";

import SuggestedPrompts from "../SuggestedPrompts";

import styles from "./EmptyState.module.css";

export default function EmptyState({

    department = "Information Technology",

    onPromptSelect

}) {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: .45
            }}

            className={styles.container}

        >

            {/* ==========================================
                Hero
            =========================================== */}

            <div className={styles.hero}>

                <div className={styles.icon}>

                    <Sparkles size={34} />

                </div>

                <h1>

                    Enterprise AI Assistant

                </h1>

                <p>

                    Ask questions about your department knowledge,
                    policies, SOPs, internal documentation,
                    procedures and enterprise resources.

                </p>

            </div>

            {/* ==========================================
                Information Cards
            =========================================== */}

            <div className={styles.infoGrid}>

                <div className={styles.card}>

                    <Building2 size={22} />

                    <div>

                        <h3>

                            Department

                        </h3>

                        <p>

                            {department}

                        </p>

                    </div>

                </div>

                <div className={styles.card}>

                    <ShieldCheck size={22} />

                    <div>

                        <h3>

                            Secure Access

                        </h3>

                        <p>

                            Department level permissions enabled

                        </p>

                    </div>

                </div>

                <div className={styles.card}>

                    <FileSearch size={22} />

                    <div>

                        <h3>

                            Enterprise RAG

                        </h3>

                        <p>

                            Answers are generated only from approved company documents.

                        </p>

                    </div>

                </div>

                <div className={styles.card}>

                    <Upload size={22} />

                    <div>

                        <h3>

                            Upload Documents

                        </h3>

                        <p>

                            Expand your department knowledge base.

                        </p>

                    </div>

                </div>

            </div>

            {/* ==========================================
                Suggested Prompts
            =========================================== */}

            <div className={styles.section}>

                <div className={styles.heading}>

                    <MessageSquare size={18} />

                    <h2>

                        Suggested Questions

                    </h2>

                </div>

                <SuggestedPrompts

                    onPromptSelect={onPromptSelect}

                />

            </div>

        </motion.div>

    );

}