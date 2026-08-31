import AdminSidebar from "../AdminSidebar";
import AdminTopbar from "../AdminTopbar";
import { Outlet } from "react-router-dom";

import styles from "./AdminLayout.module.css";

export default function AdminLayout({

    children,
    admin

}){

    return(

        <div className={styles.layout}>

            {/* ========================= */}
            {/* Sidebar */}
            {/* ========================= */}

            <aside className={styles.sidebar}>

                <AdminSidebar />

            </aside>

            {/* ========================= */}
            {/* Main Area */}
            {/* ========================= */}

            <div className={styles.main}>

                <header className={styles.header}>

                    <AdminTopbar admin={admin} />

                </header>

                <main className={styles.content}>

                    {children ? children : <Outlet />}

                </main>

            </div>

        </div>

    );

}