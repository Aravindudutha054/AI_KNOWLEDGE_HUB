import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import UserMessage from "../UserMessage";
import AIMessage from "../AIMessage";
import TypingIndicator from "../TypingIndicator";

import styles from "./ChatMessages.module.css";

export default function ChatMessages({

    messages = [],

    isTyping = false

}){

    const bottomRef = useRef(null);

    useEffect(()=>{

        bottomRef.current?.scrollIntoView({

            behavior:"smooth"

        });

    },[messages,isTyping]);

    return(

        <div className={styles.container}>

            <div className={styles.messages}>

                <AnimatePresence>

                    {

                        messages.map((message, index)=>(

                            <motion.div

                                key={message.id || message._id || `${message.role || message.type || "message"}-${index}`}

                                initial={{

                                    opacity:0,

                                    y:16

                                }}

                                animate={{

                                    opacity:1,

                                    y:0

                                }}

                                exit={{

                                    opacity:0,

                                    y:-10

                                }}

                                transition={{

                                    duration:.3

                                }}

                            >

                                {

                                    (message.role || message.type)==="user"

                                    ?

                                    <UserMessage

                                        message={message}

                                    />

                                    :

                                    <AIMessage

                                        message={message}

                                    />

                                }

                            </motion.div>

                        ))

                    }

                </AnimatePresence>

                {

                    isTyping &&

                    <TypingIndicator/>

                }

                <div

                    ref={bottomRef}

                />

            </div>

        </div>

    );

}