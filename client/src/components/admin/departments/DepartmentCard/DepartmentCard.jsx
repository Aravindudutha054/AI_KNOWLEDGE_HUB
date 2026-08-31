import {

    Building2,

    Users,

    FileText,

    MessageSquare,

    ChevronRight

} from "lucide-react";

import styles from "./DepartmentCard.module.css";

export default function DepartmentCard({

    department,

    onClick

}) {

    return (

        <div

            className={styles.card}

            onClick={onClick}

        >

            <div className={styles.header}>

                <div className={styles.icon}>

                    <Building2 size={28}/>

                </div>

                <ChevronRight

                    size={20}

                    className={styles.arrow}

                />

            </div>

            <h2>

                {department.name}

            </h2>

            <p>

                {department.code}

            </p>

            <div className={styles.stats}>

                <div>

                    <Users size={18}/>

                    <span>

                        {department.employeeCount}

                    </span>

                </div>

                <div>

                    <FileText size={18}/>

                    <span>

                        {department.documentCount}

                    </span>

                </div>

                <div>

                    <MessageSquare size={18}/>

                    <span>

                        {department.conversationCount}

                    </span>

                </div>

            </div>

            <div className={styles.footer}>

                <span className={styles.badge}>

                    Active

                </span>

            </div>

        </div>

    );

}