import DocumentCard from "../DocumentCard";
import EmptyKnowledge from "../EmptyKnowledge";

import styles from "./DocumentGrid.module.css";

export default function DocumentGrid({

    documents = [],

    loading = false,

    onOpen,

    onDownload

}) {

    if (loading) {

        return (

            <div className={styles.grid}>

                {

                    Array.from({

                        length: 6

                    }).map((_, index) => (

                        <div

                            key={index}

                            className={styles.skeleton}

                        >

                            <div className={styles.skeletonIcon}></div>

                            <div className={styles.skeletonTitle}></div>

                            <div className={styles.skeletonLine}></div>

                            <div className={styles.skeletonLine}></div>

                            <div className={styles.skeletonButtons}>

                                <div></div>

                                <div></div>

                            </div>

                        </div>

                    ))

                }

            </div>

        );

    }

    if (documents.length === 0) {

        return <EmptyKnowledge />;

    }

    return (

        <div className={styles.grid}>

            {

                documents.map(document => (

                    <DocumentCard

                        key={document.id}

                        document={document}

                        onOpen={onOpen}

                        onDownload={onDownload}

                    />

                ))

            }

        </div>

    );

}