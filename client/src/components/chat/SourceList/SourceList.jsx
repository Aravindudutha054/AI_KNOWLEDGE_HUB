import {

    FileText,

    BookOpen

} from "lucide-react";

import styles from "./SourceList.module.css";

export default function SourceList({

    sources

}) {

    return (

        <div className={styles.container}>

            <h4>

                Sources

            </h4>

            {

                sources.map((source,index)=>(

                    <div

                        key={index}

                        className={styles.card}

                    >

                        <FileText size={16}/>

                        <div>

                            <strong>

                                {source.document}

                            </strong>

                            <p>

                                Page {source.page}

                            </p>

                        </div>

                        <span>

                            {(source.score*100).toFixed(0)}%

                        </span>

                    </div>

                ))

            }

        </div>

    );

}