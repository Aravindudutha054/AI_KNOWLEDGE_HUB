import {

    Bot,

    ShieldCheck,

    Sparkles

} from "lucide-react";

import styles from "./ChatHeader.module.css";

export default function ChatHeader() {

    return (

        <div className={styles.header}>

            <div className={styles.left}>

                <div className={styles.icon}>

                    <Bot size={28} />

                </div>

                <div>

                    <h1>

                        Enterprise AI Assistant

                    </h1>

                    <p>

                        Ask questions about your department knowledge.

                    </p>

                </div>

            </div>

            <div className={styles.right}>

                <div className={styles.badge}>

                    <ShieldCheck size={16} />

                    Information Technology

                </div>

                <div className={styles.status}>

                    <Sparkles size={14} />

                    Ready

                </div>

            </div>

        </div>

    );

}