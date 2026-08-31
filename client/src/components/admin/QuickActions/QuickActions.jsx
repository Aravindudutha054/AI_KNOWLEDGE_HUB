import { motion } from "framer-motion";

import {

    Upload,

    UserPlus,

    Building2,

    BrainCircuit,

    Database,

    BarChart3,

    ArrowRight

} from "lucide-react";

import styles from "./QuickActions.module.css";

const actions = [

    {

        id:"upload",

        title:"Upload Documents",

        description:"Add new knowledge to department repositories.",

        icon:Upload

    },

    {

        id:"employee",

        title:"Invite Employee",

        description:"Create new employee accounts and assign roles.",

        icon:UserPlus

    },

    {

        id:"department",

        title:"Create Department",

        description:"Add a new department workspace.",

        icon:Building2

    },

    {

        id:"pipeline",

        title:"Rebuild Knowledge",

        description:"Re-index documents for the RAG pipeline.",

        icon:BrainCircuit

    },

    {

        id:"vector",

        title:"Sync Vector DB",

        description:"Synchronize document embeddings.",

        icon:Database

    },

    {

        id:"analytics",

        title:"View Analytics",

        description:"Open enterprise analytics dashboard.",

        icon:BarChart3

    }

];

export default function QuickActions({

    onAction

}){

    return(

        <div className={styles.grid}>

            {

                actions.map((action,index)=>{

                    const Icon = action.icon;

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

                                delay:index*.08

                            }}

                            whileHover={{

                                y:-4

                            }}

                            whileTap={{

                                scale:.98

                            }}

                            className={styles.card}

                            onClick={()=>

                                onAction?.(

                                    action.id

                                )

                            }

                        >

                            <div className={styles.icon}>

                                <Icon size={24}/>

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

                                <ArrowRight size={18}/>

                            </div>

                        </motion.button>

                    );

                })

            }

        </div>

    );

}