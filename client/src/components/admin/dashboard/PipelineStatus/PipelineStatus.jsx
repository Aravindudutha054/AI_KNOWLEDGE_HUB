import styles from "./PipelineStatus.module.css";

export default function PipelineStatus({

    pipeline = {}

}) {

    const pipelineStatus = {

        indexedDocuments: 0,

        processingDocuments: 0,

        failedDocuments: 0,

        ...pipeline

    };

    const items = [

        {

            name: "Indexed Documents",

            value: pipelineStatus.indexedDocuments

        },

        {

            name: "Processing Documents",

            value: pipelineStatus.processingDocuments

        },

        {

            name: "Failed Documents",

            value: pipelineStatus.failedDocuments

        }

    ];

    return (

        <div className={styles.card}>

            <h3>

                Document Pipeline Status

            </h3>

            {

                items.map(item => (

                    <div

                        key={item.name}

                        className={styles.row}

                    >

                        <span>

                            {item.name}

                        </span>

                        <span className={styles.status}>

                            {item.value}

                        </span>

                    </div>

                ))

            }

        </div>

    );

}