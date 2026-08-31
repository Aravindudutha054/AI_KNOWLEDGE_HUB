import { useEffect, useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import AdminDashboard from "../../components/admin/AdminDashboard";

export default function Admin() {

    /* ==========================================================
       ADMIN
    ========================================================== */

    const [admin] = useState({

        id: 1,

        name: "Administrator",

        role: "System Admin",

        department: "Enterprise"

    });

    /* ==========================================================
       DASHBOARD DATA
    ========================================================== */

    const [stats, setStats] = useState([]);

    const [recentUploads, setRecentUploads] = useState([]);

    const [departments, setDepartments] = useState([]);

    const [activities, setActivities] = useState([]);

    const [aiStatus, setAiStatus] = useState(null);

    const [loading, setLoading] = useState(true);

    /* ==========================================================
       INITIAL LOAD
    ========================================================== */

    useEffect(() => {

        loadDashboard();

    }, []);

    /* ==========================================================
       LOAD DASHBOARD
    ========================================================== */

    const loadDashboard = () => {

        setLoading(true);

        setTimeout(() => {

            setStats([

                {

                    id:1,

                    title:"Employees",

                    value:248,

                    change:"+12",

                    type:"employees"

                },

                {

                    id:2,

                    title:"Departments",

                    value:8,

                    change:"+1",

                    type:"departments"

                },

                {

                    id:3,

                    title:"Documents",

                    value:1284,

                    change:"+37",

                    type:"documents"

                },

                {

                    id:4,

                    title:"AI Queries Today",

                    value:564,

                    change:"+89",

                    type:"queries"

                }

            ]);

            setRecentUploads([

                {

                    id:1,

                    title:"VPN Policy.pdf",

                    department:"Information Technology",

                    uploadedBy:"IT Admin",

                    uploadedAt:"Today"

                },

                {

                    id:2,

                    title:"Leave Policy.docx",

                    department:"Human Resources",

                    uploadedBy:"HR Manager",

                    uploadedAt:"Yesterday"

                },

                {

                    id:3,

                    title:"Finance SOP.pdf",

                    department:"Finance",

                    uploadedBy:"Finance Admin",

                    uploadedAt:"Yesterday"

                }

            ]);

            setDepartments([

                {

                    id:1,

                    name:"Information Technology",

                    employees:54,

                    documents:186,

                    status:"Active"

                },

                {

                    id:2,

                    name:"Human Resources",

                    employees:22,

                    documents:94,

                    status:"Active"

                },

                {

                    id:3,

                    name:"Finance",

                    employees:18,

                    documents:121,

                    status:"Active"

                },

                {

                    id:4,

                    name:"Administration",

                    employees:16,

                    documents:73,

                    status:"Active"

                }

            ]);

            setActivities([

                {

                    id:1,

                    type:"upload",

                    action:"VPN Policy uploaded",

                    user:"IT Admin",

                    time:"5 mins ago"

                },

                {

                    id:2,

                    type:"employee",

                    action:"New employee invited",

                    user:"HR Admin",

                    time:"25 mins ago"

                },

                {

                    id:3,

                    type:"ai",

                    action:"Knowledge Base re-indexed",

                    user:"System",

                    time:"1 hour ago"

                },

                {

                    id:4,

                    type:"department",

                    action:"Finance department updated",

                    user:"Admin",

                    time:"2 hours ago"

                },

                {

                    id:5,

                    type:"security",

                    action:"Role permissions modified",

                    user:"Super Admin",

                    time:"Today"

                }

            ]);

            setAiStatus({

                model:"Gemini",

                vectorDatabase:"Ready",

                embeddings:"Healthy",

                documentsIndexed:1284,

                status:"Online"

            });

            setLoading(false);

        },600);

    };

    /* ==========================================================
       ACTIONS
    ========================================================== */

    const handleRefresh = () => {

        loadDashboard();

    };

    const handleQuickAction = (action) => {

        console.log(action);

    };

    /* ==========================================================
       UI
    ========================================================== */

    return (

        <AdminLayout admin={admin}>

            <AdminDashboard

                admin={admin}

                stats={stats}

                recentUploads={recentUploads}

                departments={departments}

                activities={activities}

                aiStatus={aiStatus}

                loading={loading}

                onRefresh={handleRefresh}

                onQuickAction={handleQuickAction}

            />

        </AdminLayout>

    );

}