import {

    MessageSquare,

    Search,

    FileText,

    Clock3

} from "lucide-react";

import StatCard from "../StatCard";

import styles from "./StatsOverview.module.css";

export default function StatsOverview({

    stats

}) {

    return (

        <div className={styles.grid}>

            <StatCard

                icon={<MessageSquare size={24} />}

                title="AI Chats"

                value={stats.aiChats}

                change="+18% vs last month"

            />

            <StatCard

                icon={<Search size={24} />}

                title="Searches"

                value={stats.searches}

                change="+12% vs last month"

            />

            <StatCard

                icon={<FileText size={24} />}

                title="Docs Viewed"

                value={stats.documentsViewed}

                change="+8% vs last month"

            />

            <StatCard

                icon={<Clock3 size={24} />}

                title="Time Saved"

                value={`${stats.timeSaved} hrs`}

                change="+2.1 hrs"

            />

        </div>

    );

}