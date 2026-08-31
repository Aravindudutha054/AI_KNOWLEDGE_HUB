import { useState } from "react";

import {
    Bell,
    Search,
    ShieldCheck,
    ChevronDown
} from "lucide-react";

import styles from "./AdminTopbar.module.css";

export default function AdminTopbar({

    admin = {

        name: "Administrator",

        role: "System Admin"

    }

}) {

    const [search, setSearch] = useState("");

    return (

        <header className={styles.topbar}>

            {/* ===================================== */}
            {/* Left */}
            {/* ===================================== */}

            <div className={styles.left}>

                <div className={styles.searchBox}>

                    <Search size={18} />

                    <input

                        type="text"

                        value={search}

                        placeholder="Search employees, documents, departments..."

                        onChange={(event)=>

                            setSearch(event.target.value)

                        }

                    />

                </div>

            </div>

            {/* ===================================== */}
            {/* Right */}
            {/* ===================================== */}

            <div className={styles.right}>

                <button className={styles.notification}>

                    <Bell size={20} />

                    <span className={styles.badge}>

                        5

                    </span>

                </button>

                <div className={styles.profile}>

                    <div className={styles.avatar}>

                        <ShieldCheck size={18} />

                    </div>

                    <div className={styles.info}>

                        <strong>

                            {admin.name}

                        </strong>

                        <span>

                            {admin.role}

                        </span>

                    </div>

                    <ChevronDown size={18} />

                </div>

            </div>

        </header>

    );

}