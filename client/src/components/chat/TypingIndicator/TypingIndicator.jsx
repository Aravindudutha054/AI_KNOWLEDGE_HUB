import {

    Bot

} from "lucide-react";

import styles from "./TypingIndicator.module.css";

export default function TypingIndicator() {

    return (

        <div className={styles.message}>

            <div className={styles.avatar}>

                <Bot size={18}/>

            </div>

            <div className={styles.bubble}>

                <span></span>

                <span></span>

                <span></span>

            </div>

        </div>

    );

}