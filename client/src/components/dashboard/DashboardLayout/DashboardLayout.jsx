import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

import styles from "./DashboardLayout.module.css";

export default function DashboardLayout({

    children,

    role,

    department,

    user

}){

return(

<div className={styles.layout}>

<Sidebar

role={role}

department={department}

user={user}

/>

<div className={styles.right}>

<Topbar

department={department}

user={user}

/>

<main className={styles.main}>

{children}

</main>

</div>

</div>

);

}