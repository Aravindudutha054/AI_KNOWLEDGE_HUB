import {
    Search,
    Shield,
    Plus
} from "lucide-react";

import styles from "./EmployeeToolbar.module.css";
const roles = [

    "All",

    "admin",

    "employee"

];

export default function EmployeeToolbar({

    search,

    role,

    onSearch,

    onRoleChange,

    onAdd

}) {

    return (

        <div className={styles.toolbar}>

            {/* Search */}

            <div className={styles.searchBox}>

                <Search size={18} />

                <input

                    type="text"

                    placeholder="Search employees..."

                    value={search}

                    onChange={(event) =>

                        onSearch(event.target.value)

                    }

                />

            </div>

            {/* Role */}

            <div className={styles.selectBox}>

                <Shield size={18} />

                <select

                    value={role}

                    onChange={(event) =>

                        onRoleChange(event.target.value)

                    }

                >

                    {

                        roles.map(role => (

                            <option

                                key={role}

                                value={role}

                            >

                                {role}

                            </option>

                        ))

                    }

                </select>

            </div>

            {/* Add */}

            <button

                className={styles.addButton}

                onClick={onAdd}

            >

                <Plus size={18} />

                Add Employee

            </button>

        </div>

    );

}