import { useEffect, useState } from "react";

import AnalyticsHome from "../../../components/admin/analytics/AnalyticsHome";

import { analyticsApi } from "../../../api/analytics.api";

const PageLoader = () => <div>Loading analytics...</div>;

const ErrorState = () => <div>Unable to load analytics right now.</div>;

export default function Analytics() {

    const [analytics, setAnalytics] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);
    

    useEffect(() => {

        async function loadAnalytics() {

            try {

            const response = await analyticsApi.getEmployeeAnalytics();

            console.log("Analytics API:", response.data);
            console.log("Search Insights:", response.data.data.searchInsights);

            setAnalytics(response.data.data);

        }

        catch (err) {

            console.error("Analytics Error:", err);
            setError(err);

        }

            finally {

                setLoading(false);

            }

        }

        loadAnalytics();

    },[]);

    

    if (loading) {

        return <PageLoader />;

    }

    if (error) {

        return <ErrorState />;

    }

    return <AnalyticsHome analytics={analytics} />;

}