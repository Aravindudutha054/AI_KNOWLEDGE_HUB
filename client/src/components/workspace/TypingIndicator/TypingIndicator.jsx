import { motion } from "framer-motion";

import {

    Bot,

    Sparkles

} from "lucide-react";

import styles from "./TypingIndicator.module.css";

export default function TypingIndicator(){

    return(

        <motion.div

            initial={{

                opacity:0,

                y:12

            }}

            animate={{

                opacity:1,

                y:0

            }}

            exit={{

                opacity:0

            }}

            transition={{

                duration:.25

            }}

            className={styles.wrapper}

        >

            <div className={styles.avatar}>

                <Bot size={20}/>

            </div>

            <div className={styles.content}>

                <div className={styles.header}>

                    <span>

                        Enterprise AI

                    </span>

                    <Sparkles size={15}/>

                </div>

                <div className={styles.bubble}>

                    <span className={styles.dot}></span>

                    <span className={styles.dot}></span>

                    <span className={styles.dot}></span>

                </div>

                <p>

                    Searching documents and generating a response...

                </p>

            </div>

        </motion.div>

    );

}