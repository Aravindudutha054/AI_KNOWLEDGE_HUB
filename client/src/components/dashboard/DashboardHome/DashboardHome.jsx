import { motion } from "framer-motion";

import WelcomeBanner from "../WelcomeBanner";
import StatsCards from "../StatsCards";
import QuickActions from "../QuickActions";
import RecentDocuments from "../RecentDocuments";
import RecentChats from "../RecentChats";
import ActivityTimeline from "../ActivityTimeline";
import AnnouncementPanel from "../AnnouncementPanel";

import styles from "./DashboardHome.module.css";

const container = {
    hidden: {},

    show: {
        transition: {
            staggerChildren: 0.08
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

export default function DashboardHome({

    user,

    stats,

    recentChats,

    recentDocuments,

    activities,

    announcements,
    loading,
    onRefresh,
    onOpenChat,
    onOpenDocument,
    onAction

}) {

    return (

        <motion.div

            variants={container}

            initial="hidden"

            animate="show"

            className={styles.dashboard}

        >

            {/* ========================================= */}
            {/* Welcome */}
            {/* ========================================= */}

            <motion.div

                variants={item}

                className={styles.hero}

            >

                <WelcomeBanner

                    user={user}

                    department={user.department}

                    role={user.role}

                />

            </motion.div>

            {/* ========================================= */}
            {/* Stats */}
            {/* ========================================= */}

            <motion.div

                variants={item}

                className={styles.stats}

            >

                <StatsCards

                    stats={stats}

                    loading={loading}

                />

            </motion.div>

            {/* ========================================= */}
            {/* Main Grid */}
            {/* ========================================= */}

            <motion.div

                variants={item}

                className={styles.contentGrid}

            >

                {/* Left */}

                <div className={styles.leftColumn}>

                    <section className={styles.section}>

                        <div className={styles.sectionHeader}>

                            <h3>

                                Quick Actions

                            </h3>

                        </div>

                        <QuickActions    onAction={onAction}/>

                    </section>

                    <section className={styles.section}>

                        <div className={styles.sectionHeader}>

                            <h3>

                                Recent Documents

                            </h3>

                        </div>

                        <RecentDocuments

                            documents={recentDocuments}

                            loading={loading}

                            onOpen={onOpenDocument}

                        />

                    </section>

                    <section className={styles.section}>

                        <div className={styles.sectionHeader}>

                            <h3>

                                Recent AI Conversations

                            </h3>

                        </div>

                        <RecentChats

                            chats={recentChats}

                            loading={loading}

                            onOpen={onOpenChat}

                        />

                    </section>

                </div>

                {/* Right */}

                <div className={styles.rightColumn}>

                    <section className={styles.section}>

                        <div className={styles.sectionHeader}>

                            <h3>

                                Department Activity

                            </h3>

                        </div>

                        <ActivityTimeline

                            activities={activities}

                            loading={loading}

                        />

                    </section>

                    <section className={styles.section}>

                        <div className={styles.sectionHeader}>

                            <h3>

                                Announcements

                            </h3>

                        </div>

                        <AnnouncementPanel

    announcements={announcements}

    loading={loading}

    onOpen={onRefresh}

/>

                    </section>

                </div>

            </motion.div>

            {/* ========================================= */}
            {/* Footer */}
            {/* ========================================= */}

            <motion.div

                variants={item}

                className={styles.footer}

            >

                <div className={styles.footerLeft}>

                    <span className={styles.footerTitle}>

                        Enterprise AI Knowledge Hub

                    </span>

                    <span className={styles.footerText}>

                        Secure • Department Aware • Role Based Access

                    </span>

                </div>

                <div className={styles.footerRight}>

                    <div className={styles.status}>

                        <span

                            className={styles.statusDot}

                        />

                        Workspace Active

                    </div>

                </div>

            </motion.div>

        </motion.div>

    );

}