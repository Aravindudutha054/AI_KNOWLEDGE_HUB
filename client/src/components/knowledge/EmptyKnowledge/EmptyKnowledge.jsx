import { SearchX } from "lucide-react";

import styles from "./EmptyKnowledge.module.css";

export default function EmptyKnowledge() {

    return (

        <div className={styles.container}>

            <div className={styles.icon}>

                <SearchX size={54}/>

            </div>

            <h2>

                No Documents Found

            </h2>

            <p>

                Try changing your search keyword, category or department filter.

            </p>

        </div>

    );

}