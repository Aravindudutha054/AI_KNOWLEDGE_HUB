import {

    Bot,

    MessageSquare,

    FileSearch,

    Sparkles

} from "lucide-react";

import styles from "./EmptyState.module.css";

export default function EmptyState() {

    return (

        <div className={styles.container}>

            <div className={styles.logo}>

                <Bot size={46} />

            </div>

            <h2>

                Welcome to Enterprise AI

            </h2>

            <p>

                Ask questions about your department documents.

                Answers are generated only from your organization's knowledge base.

            </p>

            <div className={styles.cards}>

                <div className={styles.card}>

                    <MessageSquare size={22} />

                    <span>

                        Ask IT policies

                    </span>

                </div>

                <div className={styles.card}>

                    <FileSearch size={22} />

                    <span>

                        Search documents

                    </span>

                </div>

                <div className={styles.card}>

                    <Sparkles size={22} />

                    <span>

                        AI-powered answers

                    </span>

                </div>

            </div>

        </div>

    );

}