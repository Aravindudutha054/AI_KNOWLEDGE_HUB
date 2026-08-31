import { useEffect, useState } from "react";

import DashboardHome from "../../../components/dashboard/DashboardHome";
import * as dashboardService from "../../../services/employeeDashboard.service";
export default function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const [data, setData] = useState(null);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

    try {

        const dashboard =
            await dashboardService.getDashboard();

        setData(dashboard);

    }

    catch (error) {

        console.error(error);

    }

};

    return (

        <DashboardHome

            user={user}

            stats={data?.stats || []}

            recentDocuments={data?.recentDocuments || []}

            recentChats={data?.recentChats || []}

            announcements={data?.announcements || []}

            activities={data?.activities || []}

            loading={!data}

            onRefresh={() => console.log("Refresh")}

            onOpenChat={(chat) => console.log(chat)}

            onOpenDocument={(document) => console.log(document)}

            onAction={(action) => console.log(action)}

        />

    );

}