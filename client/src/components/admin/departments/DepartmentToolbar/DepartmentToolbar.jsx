import { Search, Plus } from "lucide-react";

import styles from "./DepartmentToolbar.module.css";

export default function DepartmentToolbar({

    search,

    onSearch,

    onAdd

}) {

    return (

        <div className={styles.toolbar}>

            {/* Search */}

            <div className={styles.searchBox}>

                <Search size={18} />

                <input

                    type="text"

                    placeholder="Search departments..."

                    value={search}

                    onChange={(event) =>

                        onSearch(

                            event.target.value

                        )

                    }

                />

            </div>

            {/* Add Button */}

            <button

                className={styles.addButton}

                onClick={onAdd}

            >

                <Plus size={18} />

                Add Department

            </button>

        </div>

    );

}