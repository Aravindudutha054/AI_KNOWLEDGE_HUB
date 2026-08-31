import {

    Bot,

    User,

    Clock,

    Copy

} from "lucide-react";

import SourceList from "../SourceList/SourceList";

import styles from "./ChatMessage.module.css";

export default function ChatMessage({

    message

}) {

    const copy = () => {

        navigator.clipboard.writeText(

            message.content

        );

    };

    return (

        <div

            className={`${styles.message} ${

                message.role === "user"

                    ? styles.user

                    : styles.assistant

            }`}

        >

            <div className={styles.avatar}>

                {

                    message.role === "user"

                        ?

                        <User size={18}/>

                        :

                        <Bot size={18}/>

                }

            </div>

            <div className={styles.body}>

                <div className={styles.content}>

                    {message.content}

                </div>

                {

                    message.role === "assistant" && (

                        <>

                            <div className={styles.meta}>

                                <span>

                                    <Clock size={14}/>

                                    {message.responseTime} ms

                                </span>

                                <button

                                    onClick={copy}

                                >

                                    <Copy size={14}/>

                                    Copy

                                </button>

                            </div>

                            {

                                message.sources?.length > 0 && (

                                    <SourceList

                                        sources={

                                            message.sources

                                        }

                                    />

                                )

                            }

                        </>

                    )

                }

            </div>

        </div>

    );

}