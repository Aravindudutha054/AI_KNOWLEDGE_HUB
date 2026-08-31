import {

    Users,

    Building2,

    FileText,

    MessageSquare

} from "lucide-react";

import styles from "./DashboardStats.module.css";

export default function DashboardStats({

    stats

}) {

    const cards = [

        {

            title: "Employees",

            value: stats.employees,

            icon: <Users size={22} />

        },

        {

            title: "Departments",

            value: stats.departments,

            icon: <Building2 size={22} />

        },

        {

            title: "Documents",

            value: stats.documents,

            icon: <FileText size={22} />

        },

        {

            title: "AI Chats",

            value: stats.conversations,

            icon: <MessageSquare size={22} />

        }

    ];

    return (

        <div className={styles.grid}>

            {

                cards.map(card => (

                    <div

                        key={card.title}

                        className={styles.card}

                    >

                        <div className={styles.icon}>

                            {card.icon}

                        </div>

                        <div>

                            <h4>

                                {card.title}

                            </h4>

                            <h2>

                                {card.value}

                            </h2>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}