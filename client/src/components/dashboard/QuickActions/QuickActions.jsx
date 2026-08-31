import { motion } from "framer-motion";

import {
    MessageSquare,
    Upload,
    BookOpen,
    History,
    ArrowRight
} from "lucide-react";

import styles from "./QuickActions.module.css";

const actions = [

    {
        id: "chat",
        title: "Ask AI",
        description: "Ask questions from your department knowledge.",
        icon: MessageSquare
    },

    {
        id: "upload",
        title: "Upload Document",
        description: "Upload files to your department workspace.",
        icon: Upload
    },

    {
        id: "knowledge-base",
        title: "Knowledge Base",
        description: "Browse all approved department documents.",
        icon: BookOpen
    },

    {
        id: "recent",
        title: "Recent Files",
        description: "View your recently accessed documents.",
        icon: History
    }

];

export default function QuickActions({

    onAction

}){

    return(

        <div className={styles.grid}>

            {

                actions.map((action,index)=>{

                    const Icon=action.icon;

                    return(

                        <motion.button

                            key={action.id}

                            initial={{

                                opacity:0,

                                y:20

                            }}

                            animate={{

                                opacity:1,

                                y:0

                            }}

                            transition={{

                                delay:index*.08,

                                duration:.45

                            }}

                            whileHover={{

                                y:-5

                            }}

                            whileTap={{

                                scale:.98

                            }}

                            className={styles.card}

                            onClick={()=>

                                onAction?.(action)

                            }

                        >

                            <div className={styles.top}>

                                <div className={styles.icon}>

                                    <Icon size={22}/>

                                </div>

                            </div>

                            <div className={styles.content}>

                                <h3>

                                    {action.title}

                                </h3>

                                <p>

                                    {action.description}

                                </p>

                            </div>

                            <div className={styles.footer}>

                                <span>

                                    Open

                                </span>

                                <div className={styles.arrow}>

                                    <ArrowRight size={18}/>

                                </div>

                            </div>

                        </motion.button>

                    );

                })

            }

        </div>

    );

}