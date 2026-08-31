import { motion } from "framer-motion";

import {

    Users,

    Building2,

    FileText,

    BrainCircuit

} from "lucide-react";

import styles from "./StatCards.module.css";

const icons = {

    employees: Users,

    departments: Building2,

    documents: FileText,

    queries: BrainCircuit

};

export default function StatCards({

    stats = [],

    loading = false

}) {

    if (loading) {

        return (

            <div className={styles.grid}>

                {

                    Array.from({ length: 4 }).map((_, index) => (

                        <div

                            key={index}

                            className={styles.skeleton}

                        />

                    ))

                }

            </div>

        );

    }

    return (

        <div className={styles.grid}>

            {

                stats.map((card, index) => {

                    const Icon = icons[card.type];

                    return (

                        <motion.div

                            key={card.id}

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

                            className={styles.card}

                        >

                            <div className={styles.top}>

                                <div className={styles.icon}>

                                    <Icon size={22}/>

                                </div>

                                <span className={styles.change}>

                                    {card.change}

                                </span>

                            </div>

                            <div className={styles.content}>

                                <h2>

                                    {card.value}

                                </h2>

                                <p>

                                    {card.title}

                                </p>

                            </div>

                            <div className={styles.progress}>

                                <div

                                    className={styles.fill}

                                    style={{

                                        width:

                                            index===0

                                            ? "84%"

                                            : index===1

                                            ? "62%"

                                            : index===2

                                            ? "92%"

                                            : "75%"

                                    }}

                                />

                            </div>

                        </motion.div>

                    );

                })

            }

        </div>

    );

}