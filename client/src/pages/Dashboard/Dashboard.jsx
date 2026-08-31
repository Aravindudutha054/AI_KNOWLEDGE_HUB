import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import DashboardHome from "../../components/dashboard/DashboardHome";

export default function Dashboard() {

    const navigate = useNavigate();

    /* ==========================================
       USER
    ========================================== */

    const [user] = useState({

        id: 1,

        name: "Balaji",

        role: "Employee",

        department: "Information Technology"

    });

    /* ==========================================
       DASHBOARD DATA
    ========================================== */

    const [stats, setStats] = useState([]);

    const [recentChats, setRecentChats] = useState([]);

    const [recentDocuments, setRecentDocuments] = useState([]);

    const [activities, setActivities] = useState([]);

    const [announcements, setAnnouncements] = useState([]);

    const [loading, setLoading] = useState(true);

    /* ==========================================
       INITIAL LOAD
    ========================================== */

    useEffect(() => {

        loadDashboard();

    }, []);

    /* ==========================================
       LOAD DASHBOARD
    ========================================== */

    const loadDashboard = () => {

        setLoading(true);

        setTimeout(() => {

            setStats([

    {
        id:1,
        title:"Documents",
        value:"248",
        change:"+14 Today"
    },

    {
        id:2,
        title:"AI Chats",
        value:"127",
        change:"+28 Today"
    },

    {
        id:3,
        title:"Saved Answers",
        value:"92",
        change:"+6 Today"
    },

    {
        id:4,
        title:"Department Files",
        value:"2.4 GB",
        change:"68% Used"
    }

]);

            setRecentChats([

    {

        id:1,

        title:"How to configure VPN?",

        department:"Information Technology",

        time:"2 minutes ago"

    },

    {

        id:2,

        title:"Leave Policy",

        department:"Human Resources",

        time:"Yesterday"

    },

    {

        id:3,

        title:"Password Reset Procedure",

        department:"Information Technology",

        time:"Monday"

    },

    {

        id:4,

        title:"Company Holidays 2026",

        department:"Administration",

        time:"Last Week"

    }

]);

            setRecentDocuments([

    {

        id: 1,

        name: "Employee Handbook.pdf",

        department: "Human Resources",

        updated: "2 minutes ago"

    },

    {

        id: 2,

        name: "IT Security Policy.pdf",

        department: "Information Technology",

        updated: "Yesterday"

    },

    {

        id: 3,

        name: "Leave Policy.docx",

        department: "Human Resources",

        updated: "Monday"

    },

    {

        id: 4,

        name: "Company Guidelines.pdf",

        department: "Administration",

        updated: "Last Week"

    }

]);

            setActivities([

    {

        id:1,

        title:"VPN Security Policy uploaded",

        department:"Information Technology",

        time:"09:40 AM",

        type:"upload",

        status:"Completed"

    },

    {

        id:2,

        title:"Leave Policy updated",

        department:"Human Resources",

        time:"10:15 AM",

        type:"edit",

        status:"Completed"

    },

    {

        id:3,

        title:"Expense Guidelines approved",

        department:"Finance",

        time:"11:30 AM",

        type:"approved",

        status:"Approved"

    },

    {

        id:4,

        title:"Holiday Notice published",

        department:"Administration",

        time:"01:10 PM",

        type:"announcement",

        status:"Published"

    }

]);

            setAnnouncements([

    {

        id:1,

        title:"Scheduled Maintenance",

        time:"Tomorrow • 10:00 PM",

        type:"maintenance"

    },

    {

        id:2,

        title:"Company Holiday",

        time:"Friday",

        type:"holiday"

    },

    {

        id:3,

        title:"Security Update",

        time:"Today",

        type:"security"

    },

    {

        id:4,

        title:"HR Policy Updated",

        time:"Yesterday",

        type:"policy"

    }

]);

            setLoading(false);

        },500);

    };

    /* ==========================================
       ACTIONS
    ========================================== */

    const handleRefresh = () => {

        loadDashboard();

    };

    const handleOpenChat = (chat) => {
        navigate("/workspace", {
            state: {
                conversationId: chat.id
            }
        });
    };

    const handleOpenDocument = (document) => {

        console.log(document);

    };

    const handleQuickAction = (action) => {
        switch(action.id){
            case "ask-ai":
                navigate("/workspace");
                break;
            case "upload":
                navigate("/documents");
                break;
            case "knowledge":
                navigate("/knowledge-base");
                break;
            case "recent":
                navigate("/workspace");
                break;
            default:
                break;
        }
    };

    /* ==========================================
       UI
    ========================================== */

    return (

        <DashboardLayout>

            <DashboardHome

                user={user}

                stats={stats}

                recentChats={recentChats}

                recentDocuments={recentDocuments}

                activities={activities}

                announcements={announcements}

                loading={loading}

                onRefresh={handleRefresh}

                onOpenChat={handleOpenChat}

                onOpenDocument={handleOpenDocument}

                onAction={handleQuickAction}

            />

        </DashboardLayout>

    );

}