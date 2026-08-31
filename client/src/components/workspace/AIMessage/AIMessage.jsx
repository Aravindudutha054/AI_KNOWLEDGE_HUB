import { useState } from "react";

import { motion } from "framer-motion";

import {

    Bot,

    Copy,

    Check,

    RotateCcw,

    ThumbsUp,

    ThumbsDown,

    FileText,

    ShieldCheck

} from "lucide-react";

import styles from "./AIMessage.module.css";

export default function AIMessage({

    message,

    onRegenerate,

    onFeedback

}){

    const [copied,setCopied]=useState(false);

    const copyResponse=async()=>{

        try{

            await navigator.clipboard.writeText(

                message.content

            );

            setCopied(true);

            setTimeout(()=>{

                setCopied(false);

            },1500);

        }

        catch(error){

            console.error(error);

        }

    };

    return(

        <motion.div

            initial={{

                opacity:0,

                y:18

            }}

            animate={{

                opacity:1,

                y:0

            }}

            transition={{

                duration:.35

            }}

            className={styles.wrapper}

        >

            <div className={styles.avatar}>

                <Bot size={20}/>

            </div>

            <div className={styles.content}>

                <div className={styles.header}>

                    <span className={styles.name}>

                        Enterprise AI

                    </span>

                    <span className={styles.time}>

                        {

                            message.time ||

                            new Date().toLocaleTimeString([],{

                                hour:"2-digit",

                                minute:"2-digit"

                            })

                        }

                    </span>

                </div>

                <div className={styles.bubble}>

                    <p>

                        {message.content}

                    </p>

                </div>

                {

                    message.sources?.length>0 &&

                    <div className={styles.sources}>

                        <h4>

                            Sources

                        </h4>

                        {

                            message.sources.map(source=>(

                                <div

                                    key={source.id}

                                    className={styles.source}

                                >

                                    <FileText size={16}/>

                                    <span>

                                        {source.title}

                                    </span>

                                    <span className={styles.page}>

                                        Page {source.page}

                                    </span>

                                </div>

                            ))

                        }

                    </div>

                }

                <div className={styles.footer}>

                    <div className={styles.confidence}>

                        <ShieldCheck size={16}/>

                        <span>

                            Confidence 98%

                        </span>

                    </div>

                    <div className={styles.actions}>

                        <button

                            onClick={copyResponse}

                        >

                            {

                                copied

                                ?

                                <Check size={16}/>

                                :

                                <Copy size={16}/>

                            }

                        </button>

                        <button

                            onClick={onRegenerate}

                        >

                            <RotateCcw size={16}/>

                        </button>

                        <button

                            onClick={()=>

                                onFeedback?.("up")

                            }

                        >

                            <ThumbsUp size={16}/>

                        </button>

                        <button

                            onClick={()=>

                                onFeedback?.("down")

                            }

                        >

                            <ThumbsDown size={16}/>

                        </button>

                    </div>

                </div>

            </div>

        </motion.div>

    );

}