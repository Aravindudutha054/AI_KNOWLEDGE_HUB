import { motion } from "framer-motion";

import PipelineOverview from "../PipelineOverview";
import PipelineFilters from "../PipelineFilters";
import PipelineTable from "../PipelineTable";
import PipelineStatus from "../PipelineStatus";
import PipelineTimeline from "../PipelineTimeline";

import styles from "./PipelineHome.module.css";

export default function PipelineHome({

    data,

    loading,

    onRefresh,

    search,

    status,

    setSearch,

    setStatus

}) {

    if (loading) {
    return <h2>Loading...</h2>;
}

if (!data) {
    return (
        <div className={styles.container}>
            <h2>Unable to load pipeline data.</h2>
            <button
                onClick={onRefresh}
                className={styles.refresh}
            >
                Retry
            </button>
        </div>
    );
}

    return (

        <motion.div

            className={styles.container}

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

        >

            <div className={styles.header}>

                <div>

                    <h1>Pipeline</h1>

                    <p>

                        Monitor document ingestion and AI indexing

                    </p>

                </div>

                <button

                    onClick={onRefresh}

                    className={styles.refresh}

                >

                    Refresh

                </button>

            </div>

            <PipelineOverview

                summary={data.summary}

            />

            <PipelineFilters
    search={search}
    status={status}
    onSearchChange={setSearch}
    onStatusChange={setStatus}
/>

            <PipelineTable

                documents={data.documents}

            />

            <div className={styles.bottom}>

                <PipelineStatus />

                <PipelineTimeline />

            </div>

        </motion.div>

    );

}