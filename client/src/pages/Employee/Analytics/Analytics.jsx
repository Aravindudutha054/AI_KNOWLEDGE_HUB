import { useEffect, useState } from "react";

import AnalyticsHome from "../../../components/analytics/AnalyticsHome";
import { analyticsApi } from "../../../api/analytics.api";

export default function Analytics() {

    const [analytics, setAnalytics] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const [period, setPeriod] = useState("Last 30 Days");

    useEffect(() => {

        async function loadAnalytics() {

            try {

                const response = await analyticsApi.getEmployeeAnalytics();

                setAnalytics(response.data.data);

            }

            catch (err) {

                console.error(err);

                setError(err);

            }

            finally {

                setLoading(false);

            }

        }

        loadAnalytics();

    }, []);

    if (loading) {

        return <div>Loading Analytics...</div>;

    }

    if (error) {

        return <div>Failed to load analytics.</div>;

    }

    return (

        <AnalyticsHome

            employee={analytics.employee}

            department={analytics.department}

            period={period}

            stats={analytics.stats}

            usageTrend={analytics.usageTrend}

            knowledgeCategories={analytics.knowledgeCategories}

            topDocuments={analytics.topDocuments}

            searchInsights={analytics.searchInsights}

            activityTimeline={analytics.activityTimeline}

            aiPerformance={analytics.aiPerformance}

            productivityInsights={analytics.productivityInsights}

            onPeriodChange={setPeriod}

            onExport={() => console.log("Export")}

        />

    );

}