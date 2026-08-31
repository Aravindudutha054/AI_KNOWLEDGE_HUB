import { useEffect, useState } from "react";

import * as dashboardService from "../../../services/adminDashboard.service";
import PipelineStatus from "../../../components/admin/dashboard/PipelineStatus/PipelineStatus";


import DashboardStats from "../../../components/admin/dashboard/DashboardStats";
import RecentEmployees from "../../../components/admin/dashboard/RecentEmployees";
import RecentDocuments from "../../../components/admin/dashboard/RecentDocuments";

import styles from "./Dashboard.module.css";

export default function Dashboard() {

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

    try {

        const data = await dashboardService.getDashboard();

        console.log(JSON.stringify(data, null, 2));

        setDashboard(data);

    } catch (error) {

        console.error(error);

    }

};

    if (!dashboard) {

        return <h2>Loading Dashboard...</h2>;

    }

    return (

        <div className={styles.container}>

            <DashboardStats

                stats={dashboard.stats}

            />

            <div className={styles.grid}>

    <RecentEmployees

        employees={dashboard.recentEmployees}

    />

    <RecentDocuments

        documents={dashboard.recentDocuments}

    />

    <PipelineStatus

        pipeline={dashboard.pipeline}

    />

</div>

        </div>

    );

}