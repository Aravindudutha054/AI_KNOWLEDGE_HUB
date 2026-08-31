import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import {
    LayoutDashboard,
    Users,
    Building2,
    FileText,
    BrainCircuit,
    BarChart3,
    ClipboardList,
    Settings,
    LogOut,
    ShieldCheck
} from "lucide-react";

import styles from "./AdminSidebar.module.css";

const menu = [

    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin"
    },

    {
        title: "Employees",
        icon: Users,
        path: "/admin/employees"
    },

    {
        title: "Departments",
        icon: Building2,
        path: "/admin/departments"
    },

    {
        title: "Documents",
        icon: FileText,
        path: "/admin/documents"
    },

    {
        title: "Knowledge Pipeline",
        icon: BrainCircuit,
        path: "/admin/pipeline"
    },

    {
        title: "Analytics",
        icon: BarChart3,
        path: "/admin/analytics"
    },

    {
        title: "Audit Logs",
        icon: ClipboardList,
        path: "/admin/logs"
    },

    {
        title: "Settings",
        icon: Settings,
        path: "/admin/settings"
    }

];

export default function AdminSidebar() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    return (

        <aside className={styles.sidebar}>

            {/* ======================================= */}
            {/* Logo */}
            {/* ======================================= */}

            <div className={styles.logo}>

                <ShieldCheck size={32} />

                <div>

                    <h2>

                        Enterprise AI

                    </h2>

                    <span>

                        Admin Portal

                    </span>

                </div>

            </div>

            {/* ======================================= */}
            {/* Navigation */}
            {/* ======================================= */}

            <nav className={styles.navigation}>

                {

                    menu.map(item=>{

                        const Icon = item.icon;

                        return(

                            <NavLink

                                key={item.path}

                                to={item.path}

                                end={item.path==="/admin"}

                                className={({isActive})=>

                                    isActive

                                        ? `${styles.link} ${styles.active}`

                                        : styles.link

                                }

                            >

                                <Icon size={20}/>

                                <span>

                                    {item.title}

                                </span>

                            </NavLink>

                        );

                    })

                }

            </nav>

            {/* ======================================= */}
            {/* Footer */}
            {/* ======================================= */}

            <div className={styles.footer}>

                <button

                    className={styles.logout}
                    onClick={() => {
                        logout();
                        navigate("/");
                    }}

                >

                    <LogOut size={18}/>

                    Logout

                </button>

            </div>

        </aside>

    );

}