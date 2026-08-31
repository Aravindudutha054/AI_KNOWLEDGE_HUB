import { motion } from "framer-motion";

import ActivitySummary from "../ActivitySummary";
import LogsToolbar from "../LogsToolbar";
import LogsTable from "../LogsTable";

import styles from "./LogsHome.module.css";

export default function LogsHome({

    logs,

    loading,

    onRefresh,

    search,

    module,

    action,

    status,

    setSearch,

    setModule,

    setAction,

    setStatus

}) {

    if (loading)

        return <h2>Loading...</h2>;

    return (

        <motion.div

            className={styles.container}

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

        >

            <div className={styles.header}>

                <div>

                    <h1>

                        Activity Logs

                    </h1>

                    <p>

                        Monitor all administrator activity

                    </p>

                </div>

                <button

                    className={styles.refresh}

                    onClick={onRefresh}

                >

                    Refresh

                </button>

            </div>

            <ActivitySummary

                logs={logs}

            />

            <LogsToolbar

    search={search}

    module={module}

    action={action}

    status={status}

    onSearchChange={setSearch}

    onModuleChange={setModule}

    onActionChange={setAction}

    onStatusChange={setStatus}

/>

            <LogsTable

                logs={logs}

            />

        </motion.div>

    );

}