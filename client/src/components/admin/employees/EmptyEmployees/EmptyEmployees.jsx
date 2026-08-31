import { Users, Plus } from "lucide-react";

import styles from "./EmptyEmployees.module.css";

export default function EmptyEmployees({

    onAdd

}) {

    return (

        <div className={styles.container}>

            <div className={styles.icon}>

                <Users size={52} />

            </div>

            <h2>

                No Employees Found

            </h2>

            <p>

                There are no employees available.
                Start by adding your first employee.

            </p>

            <button

                onClick={onAdd}

                className={styles.button}

            >

                <Plus size={18} />

                Add Employee

            </button>

        </div>

    );

}