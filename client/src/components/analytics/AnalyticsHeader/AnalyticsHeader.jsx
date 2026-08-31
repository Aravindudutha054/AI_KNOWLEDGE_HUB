import { motion } from "framer-motion";

import {

    CalendarDays,

    Download,

    Building2,

    User

} from "lucide-react";

import styles from "./AnalyticsHeader.module.css";

export default function AnalyticsHeader({

    employee = "Balaji Bhairwad",

    department = "Information Technology",

    period = "Last 30 Days",

    onPeriodChange,

    onExport

}) {

    return (

        <motion.div

            className={styles.header}

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

            <div className={styles.left}>

                <h1>

                    Employee Analytics

                </h1>

                <div className={styles.meta}>

                    <span>

                        <Building2 size={15} />

                        {department}

                    </span>

                    <span>

                        <User size={15} />

                        {employee}

                    </span>

                </div>

            </div>

            <div className={styles.actions}>

                <div className={styles.period}>

                    <CalendarDays size={16} />

                    <select

                        value={period}

                        onChange={event =>

                            onPeriodChange?.(

                                event.target.value

                            )

                        }

                    >

                        <option>

                            Last 7 Days

                        </option>

                        <option>

                            Last 30 Days

                        </option>

                        <option>

                            Last 90 Days

                        </option>

                        <option>

                            This Year

                        </option>

                    </select>

                </div>

                <button

                    type="button"

                    className={styles.exportButton}

                    onClick={onExport}

                >

                    <Download size={18} />

                    Export Report

                </button>

            </div>

        </motion.div>

    );

}