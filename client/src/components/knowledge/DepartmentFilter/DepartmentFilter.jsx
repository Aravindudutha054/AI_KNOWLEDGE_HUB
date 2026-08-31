import { Building2 } from "lucide-react";

import styles from "./DepartmentFilter.module.css";

const departments = [

    "All",

    "Information Technology",

    "Human Resources",

    "Finance",

    "Administration",

    "Operations"

];

export default function DepartmentFilter({

    value,

    onChange

}) {

    return (

        <div className={styles.container}>

            <Building2

                size={18}

                className={styles.icon}

            />

            <select

                value={value}

                onChange={(event)=>

                    onChange(event.target.value)

                }

                className={styles.select}

            >

                {

                    departments.map(department=>(

                        <option

                            key={department}

                            value={department}

                        >

                            {department}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}