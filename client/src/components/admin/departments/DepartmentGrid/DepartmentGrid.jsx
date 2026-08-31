import DepartmentCard from "../DepartmentCard";

import styles from "./DepartmentGrid.module.css";

export default function DepartmentGrid({

    departments,

    loading,

    onView

}) {

    if (loading) {

        return (

            <div className={styles.loading}>

                Loading departments...

            </div>

        );

    }

    if (!departments.length) {

        return (

            <div className={styles.empty}>

                No departments found.

            </div>

        );

    }

    return (

        <div className={styles.grid}>

            {

                departments.map(department => (

                    <DepartmentCard

                        key={department._id}

                        department={department}

                        onClick={() =>

                            onView(department)

                        }

                    />

                ))

            }

        </div>

    );

}