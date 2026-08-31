import { motion } from "framer-motion";

import {

    Shield,

    Laptop,

    FileText,

    Users,

    Search,

    Sparkles

} from "lucide-react";

import styles from "./SuggestedPrompts.module.css";

const prompts = [

    {

        id:1,

        icon:Shield,

        title:"IT Security",

        prompt:"Explain the latest IT security policy."

    },

    {

        id:2,

        icon:Laptop,

        title:"VPN Setup",

        prompt:"How do I configure VPN on my laptop?"

    },

    {

        id:3,

        icon:FileText,

        title:"Leave Policy",

        prompt:"Explain the employee leave policy."

    },

    {

        id:4,

        icon:Users,

        title:"HR Guidelines",

        prompt:"Show HR onboarding process."

    },

    {

        id:5,

        icon:Search,

        title:"Find Document",

        prompt:"Find Network Security Guide."

    },

    {

        id:6,

        icon:Sparkles,

        title:"AI Summary",

        prompt:"Summarize our company security standards."

    }

];

export default function SuggestedPrompts({

    onPromptSelect

}){

    return(

        <div className={styles.grid}>

            {

                prompts.map((item,index)=>{

                    const Icon=item.icon;

                    return(

                        <motion.button

                            key={item.id}

                            initial={{

                                opacity:0,

                                y:15

                            }}

                            animate={{

                                opacity:1,

                                y:0

                            }}

                            transition={{

                                delay:index*.06,

                                duration:.35

                            }}

                            whileHover={{

                                y:-4,

                                scale:1.02

                            }}

                            whileTap={{

                                scale:.98

                            }}

                            className={styles.card}

                            onClick={()=>

                                onPromptSelect?.(

                                    item.prompt

                                )

                            }

                        >

                            <div className={styles.icon}>

                                <Icon size={22}/>

                            </div>

                            <h3>

                                {item.title}

                            </h3>

                            <p>

                                {item.prompt}

                            </p>

                        </motion.button>

                    );

                })

            }

        </div>

    );

}