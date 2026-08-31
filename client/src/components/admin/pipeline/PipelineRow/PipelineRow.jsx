import {

    CheckCircle2,

    Loader2,

    XCircle,

    RotateCcw,

    Eye

} from "lucide-react";

import styles from "./PipelineRow.module.css";

const StatusIcon = ({ value }) => {

    if (value)

        return (

            <CheckCircle2

                size={18}

                className={styles.success}

            />

        );

    return (

        <Loader2

            size={18}

            className={styles.pending}

        />

    );

};

export default function PipelineRow({

    document

}) {

    const processing =

        document.processing || {};

    const indexedAt =

        document.lastIndexedAt

            ? new Date(

                document.lastIndexedAt

            ).toLocaleDateString(

                "en-IN"

            )

            : "--";

    return (

        <tr>

            <td>

                {document.name}

            </td>

            <td>

                {document.uploadedBy?.fullName || "--"}

            </td>

            <td>

                {document.chunkCount}

            </td>

            <td>

                <StatusIcon

                    value={processing.textExtracted}

                />

            </td>

            <td>

                <StatusIcon

                    value={processing.embedded}

                />

            </td>

            <td>

                <StatusIcon

                    value={processing.indexed}

                />

            </td>

            <td>

                <span

                    className={`${styles.badge} ${styles[document.status.toLowerCase()]}`}

                >

                    {document.status}

                </span>

            </td>

            <td>

                {indexedAt}

            </td>

            <td>

                <div className={styles.actions}>

                    <button>

                        <Eye size={16} />

                    </button>

                    <button>

                        <RotateCcw size={16} />

                    </button>

                </div>

            </td>

        </tr>

    );

}