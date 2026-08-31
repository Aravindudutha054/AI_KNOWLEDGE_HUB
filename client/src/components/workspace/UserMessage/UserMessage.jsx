import { motion } from "framer-motion";
import { User, Copy, Check } from "lucide-react";
import { useState } from "react";

import styles from "./UserMessage.module.css";

export default function UserMessage({

    message

}){

    const [copied,setCopied]=useState(false);

    const copyMessage=async()=>{

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

                <User size={18}/>

            </div>

            <div className={styles.content}>

                <div className={styles.header}>

                    <span className={styles.name}>

                        You

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

                <button

                    className={styles.copy}

                    onClick={copyMessage}

                >

                    {

                        copied

                        ?

                        <Check size={15}/>

                        :

                        <Copy size={15}/>

                    }

                    <span>

                        {

                            copied

                            ?

                            "Copied"

                            :

                            "Copy"

                        }

                    </span>

                </button>

            </div>

        </motion.div>

    );

}