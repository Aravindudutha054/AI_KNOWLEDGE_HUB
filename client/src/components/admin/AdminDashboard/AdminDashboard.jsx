import { motion } from "framer-motion";

import StatCards from "../StatCards";
import QuickActions from "../QuickActions";
import RecentUploads from "../RecentUploads";
import DepartmentStatus from "../DepartmentStatus";
import AIStatus from "../AIStatus";
import ActivityFeed from "../ActivityFeed";

import styles from "./AdminDashboard.module.css";

const container = {

    hidden: {},

    show: {

        transition: {

            staggerChildren: .08

        }

    }

};

const item = {

    hidden: {

        opacity: 0,

        y: 20

    },

    show: {

        opacity: 1,

        y: 0,

        transition: {

            duration: .45

        }

    }

};

export default function AdminDashboard({

    admin,

    stats,

    recentUploads,

    departments,

    activities,

    aiStatus,

    loading,

    onRefresh,

    onQuickAction

}) {

    return (

        <motion.div

            variants={container}

            initial="hidden"

            animate="show"

            className={styles.dashboard}

        >

            {/* ====================================== */}
            {/* Welcome */}
            {/* ====================================== */}

            <motion.section

                variants={item}

                className={styles.hero}

            >

                <div>

                    <h1>

                        Welcome back, {admin.name}

                    </h1>

                    <p>

                        Monitor employees, departments, documents and AI knowledge pipeline.

                    </p>

                </div>

                <button

                    className={styles.refresh}

                    onClick={onRefresh}

                >

                    Refresh Dashboard

                </button>

            </motion.section>

            {/* ====================================== */}
            {/* Statistics */}
            {/* ====================================== */}

            <motion.section variants={item}>

                <StatCards

                    stats={stats}

                    loading={loading}

                />

            </motion.section>

            {/* ====================================== */}
            {/* Quick Actions */}
            {/* ====================================== */}

            <motion.section variants={item}>

                <QuickActions

                    onAction={onQuickAction}

                />

            </motion.section>

            {/* ====================================== */}
            {/* Content */}
            {/* ====================================== */}

            <motion.div

                variants={item}

                className={styles.grid}

            >

                <div className={styles.left}>

                    <RecentUploads

                        uploads={recentUploads}

                        loading={loading}

                    />

                    <ActivityFeed

                        activities={activities}

                        loading={loading}

                    />

                </div>

                <div className={styles.right}>

                    <DepartmentStatus

                        departments={departments}

                        loading={loading}

                    />

                    <AIStatus

                        status={aiStatus}

                        loading={loading}

                    />

                </div>

            </motion.div>

        </motion.div>

    );

}