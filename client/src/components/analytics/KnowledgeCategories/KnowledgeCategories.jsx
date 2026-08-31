import { motion } from "framer-motion";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

import styles from "./KnowledgeCategories.module.css";

const COLORS = [

    "#2563eb",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6"

];

export default function KnowledgeCategories({

    categories = []

}) {

    const normalizedCategories = categories.map(entry => ({

        name: entry.name || entry._id,

        value: entry.value ?? entry.count

    }));

    return (

        <motion.div

            className={styles.card}

            initial={{

                opacity: 0,

                y: 20

            }}

            animate={{

                opacity: 1,

                y: 0

            }}

            transition={{

                duration: .4

            }}

        >

            <div className={styles.header}>

                <h3>

                    Knowledge Categories

                </h3>

                <span>

                    Most Accessed Topics

                </span>

            </div>

            <div className={styles.chart}>

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <PieChart>

                        <Pie

                            data={normalizedCategories}

                            dataKey="value"

                            nameKey="name"

                            innerRadius={70}

                            outerRadius={100}

                            paddingAngle={3}

                        >

                            {

                                normalizedCategories.map((entry, index) => (

                                    <Cell

                                        key={entry.name}

                                        fill={
                                            COLORS[
                                                index % COLORS.length
                                            ]
                                        }

                                    />

                                ))

                            }

                        </Pie>

                        <Tooltip />

                        <Legend
                            verticalAlign="bottom"
                            height={36}
                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </motion.div>

    );

}