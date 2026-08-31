import { motion } from "framer-motion";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

import styles from "./AIUsageChart.module.css";

export default function AIUsageChart({

    data

}) {

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

                    AI Usage Trend

                </h3>

                <span>

                    Last 7 Days

                </span>

            </div>

            <div className={styles.chart}>

                <ResponsiveContainer

                    width="100%"

                    height={300}

                >

                    <LineChart data={data}>

                        <CartesianGrid

                            strokeDasharray="3 3"

                            vertical={false}

                        />

                        <XAxis dataKey="day" />

                        <YAxis />

                        <Tooltip />

                        <Line

                            type="monotone"

                            dataKey="chats"

                            stroke="#2563eb"

                            strokeWidth={3}

                            dot={{

                                r: 5

                            }}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </motion.div>

    );
}
