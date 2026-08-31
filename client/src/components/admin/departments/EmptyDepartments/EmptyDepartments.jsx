import { Building2, Plus } from "lucide-react";

import styles from "./EmptyDepartments.module.css";

export default function EmptyDepartments({

    onAdd

}) {

    return (

        <div className={styles.container}>

            <div className={styles.icon}>

                <Building2 size={52} />

            </div>

            <h2>

                No Departments Found

            </h2>

            <p>

                No departments are available yet.
                Create your first department to start organizing employees and documents.

            </p>

            <button

                className={styles.button}

                onClick={onAdd}

            >

                <Plus size={18} />

                Add Department

            </button>

        </div>

    );

}