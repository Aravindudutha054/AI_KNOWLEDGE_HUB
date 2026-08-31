import StatCard from "../../../analytics/StatCard";

export default function StatsOverview({ stats = {} }) {

    const {

        aiChats,

        searches,

        documentsViewed,

        downloads,

        timeSaved

    } = stats;

    return (

        <div>

            <StatCard

                title="AI Chats"

                value={aiChats}

            />

            <StatCard

                title="Searches"

                value={searches}

            />

            <StatCard

                title="Documents"

                value={documentsViewed}

            />

            <StatCard

                title="Downloads"

                value={downloads}

            />

            <StatCard

                title="Hours Saved"

                value={timeSaved}

            />

        </div>

    );
}
