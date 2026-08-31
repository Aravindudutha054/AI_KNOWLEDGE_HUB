import {

    Activity,

    Upload,

    MessageSquare,

    AlertTriangle

} from "lucide-react";

import SummaryCard from "../SummaryCard";

import styles from "./ActivitySummary.module.css";

export default function ActivitySummary({

    logs

}) {

    const totalActivities = logs.length;

    const uploads = logs.filter(

        log => log.action === "Upload"

    ).length;

    const aiQueries = logs.filter(

        log => log.action === "Ask AI"

    ).length;

    const failed = logs.filter(

        log => log.status === "Failed"

    ).length;

    return (

        <div className={styles.grid}>

            <SummaryCard

                title="Activities"

                value={totalActivities}

                subtitle="Total Logs"

                icon={Activity}

            />

            <SummaryCard

                title="Uploads"

                value={uploads}

                subtitle="Documents"

                icon={Upload}

            />

            <SummaryCard

                title="AI Queries"

                value={aiQueries}

                subtitle="Questions"

                icon={MessageSquare}

            />

            <SummaryCard

                title="Failed"

                value={failed}

                subtitle="Errors"

                icon={AlertTriangle}

            />

        </div>

    );

}