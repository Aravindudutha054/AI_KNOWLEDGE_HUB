import { motion } from "framer-motion";

import {
    Building2,
    Users,
    FileText,
    Database,
    CheckCircle2
} from "lucide-react";

import styles from "./DepartmentStatus.module.css";

export default function DepartmentStatus({

    departments = [],

    loading = false

}) {

    if (loading) {

        return (

            <div className={styles.container}>

                <h2>

                    Department Status

                </h2>

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

        <div className={styles.container}>

            <div className={styles.header}>

                <h2>

                    Department Status

                </h2>

                <span>

                    {departments.length} Departments

                </span>

            </div>

            <div className={styles.list}>

                {

                    departments.map((department, index) => (

                        <motion.div

                            key={department.id}

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

                            className={styles.card}

                        >

                            <div className={styles.top}>

                                <div className={styles.department}>

                                    <Building2 size={20}/>

                                    <h3>

                                        {department.name}

                                    </h3>

                                </div>

                                <span className={styles.active}>

                                    {department.status}

                                </span>

                            </div>

                            <div className={styles.stats}>

                                <div>

                                    <Users size={16}/>

                                    <span>

                                        {department.employees}

                                    </span>

                                </div>

                                <div>

                                    <FileText size={16}/>

                                    <span>

                                        {department.documents}

                                    </span>

                                </div>

                                <div>

                                    <Database size={16}/>

                                    <span>

                                        Indexed

                                    </span>

                                </div>

                            </div>

                            <div className={styles.health}>

                                <CheckCircle2 size={16}/>

                                AI Ready

                            </div>

                        </motion.div>

                    ))

                }

            </div>

        </div>

    );

}