import { motion } from "framer-motion";

import AnalyticsHeader from "../AnalyticsHeader";
import StatsOverview from "../StatsOverview";

import AIUsageChart from "../AIUsageChart";
import KnowledgeCategories from "../KnowledgeCategories";

import TopDocuments from "../TopDocuments";
import SearchInsights from "../SearchInsights";

import ActivityTimeline from "../ActivityTimeline";
import AIPerformance from "../AIPerformance";

import ProductivityInsights from "../ProductivityInsights";

import styles from "./AnalyticsHome.module.css";

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

            duration: .4

        }

    }

};

export default function AnalyticsHome({

    employee,

    department,

    period,

    stats,

    usageTrend,

    knowledgeCategories,

    topDocuments,

    searchInsights,

    activityTimeline,

    aiPerformance,

    productivityInsights,

    onPeriodChange,

    onExport

}) {

    return (

        <motion.div

            className={styles.container}

            variants={container}

            initial="hidden"

            animate="show"

        >

            {/* Header */}

            <motion.div variants={item}>

                <AnalyticsHeader

                    employee={employee}

                    department={department}

                    period={period}

                    onPeriodChange={onPeriodChange}

                    onExport={onExport}

                />

            </motion.div>

            {/* Stats */}

            <motion.div variants={item}>

                <StatsOverview

                    stats={stats}

                />

            </motion.div>

            {/* Row 1 */}

            <motion.div

                variants={item}

                className={styles.gridTwo}

            >

                <AIUsageChart

                    data={usageTrend}

                />

                <KnowledgeCategories

                    categories={knowledgeCategories}

                />

            </motion.div>

            {/* Row 2 */}

            <motion.div

                variants={item}

                className={styles.gridTwo}

            >

                <TopDocuments

                    documents={topDocuments}

                />

                <SearchInsights

                    searches={searchInsights}

                />

            </motion.div>

            {/* Row 3 */}

            <motion.div

                variants={item}

                className={styles.gridTwo}

            >

                <ActivityTimeline

                    timeline={activityTimeline}

                />

                <AIPerformance

                    performance={aiPerformance}

                />

            </motion.div>

            {/* Bottom */}

            <motion.div variants={item}>

                <ProductivityInsights

                    insights={productivityInsights}

                />

            </motion.div>

        </motion.div>

    );

}