import { motion } from "framer-motion";

import StatsOverview from "../StatsOverview";

import AIUsageChart from "../AIUsageChart";

import KnowledgeCategories from "../KnowledgeCategories";

import TopDocuments from "../TopDocuments";

import SearchInsights from "../SearchInsights";

import ActivityTimeline from "../ActivityTimeline";

import AIPerformance from "../AIPerformance";

import ProductivityInsights from "../ProductivityInsights";

import styles from "./AnalyticsHome.module.css";

export default function AnalyticsHome({ analytics }) {

    return (

        <motion.div

            initial={{

                opacity:0

            }}

            animate={{

                opacity:1

            }}

            className={styles.container}

        >

            <div className={styles.header}>

                <div>

                    <h1>

                        Analytics

                    </h1>

                    <p>

                        Department Insights

                    </p>

                </div>

            </div>

            <StatsOverview

                stats={analytics.stats}

            />

            <AIUsageChart

                data={analytics.usageTrend}

            />

            <KnowledgeCategories

                categories={analytics.knowledgeCategories}

            />

            <TopDocuments

                documents={analytics.topDocuments}

            />

            <SearchInsights

                searches={analytics.searchInsights}

            />

            <ActivityTimeline

                timeline={analytics.activityTimeline}

            />

            <AIPerformance

                performance={analytics.aiPerformance}

            />

            <ProductivityInsights

                insights={analytics.productivityInsights}

            />

        </motion.div>

    );

}