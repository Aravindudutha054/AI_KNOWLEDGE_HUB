import { FolderOpen } from "lucide-react";

import styles from "./CategoryFilter.module.css";

const categories = [

    "All",

    "Policies",

    "Guides",

    "SOP",

    "Security",

    "HR",

    "Finance",

    "Administration"

];

export default function CategoryFilter({

    value,

    onChange

}) {

    return (

        <div className={styles.container}>

            <FolderOpen

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

                    categories.map(category=>(

                        <option

                            key={category}

                            value={category}

                        >

                            {category}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}