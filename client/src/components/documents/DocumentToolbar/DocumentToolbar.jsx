import {
    Search,
    Building2,
    FolderOpen,
    RotateCcw
} from "lucide-react";

import styles from "./DocumentToolbar.module.css";

const departments = [

    "All",

    "Information Technology",

    "Human Resources",

    "Finance",

    "Administration"

];

const categories = [

    "All",

    "Policies",

    "Guides",

    "Security",

    "SOP",

    "HR"

];

export default function DocumentToolbar({

    search,

    department,

    category,

    onSearch,

    onDepartmentChange,

    onCategoryChange,

    onRefresh

}){

    return(

        <div className={styles.toolbar}>

            {/* Search */}

            <div className={styles.searchBox}>

                <Search size={18}/>

                <input

                    type="text"

                    value={search}

                    placeholder="Search documents..."

                    onChange={(event)=>

                        onSearch(

                            event.target.value

                        )

                    }

                />

            </div>

            {/* Department */}

            <div className={styles.selectBox}>

                <Building2 size={18}/>

                <select

                    value={department}

                    onChange={(event)=>

                        onDepartmentChange(

                            event.target.value

                        )

                    }

                >

                    {

                        departments.map(item=>(

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

            </div>

            {/* Category */}

            <div className={styles.selectBox}>

                <FolderOpen size={18}/>

                <select

                    value={category}

                    onChange={(event)=>

                        onCategoryChange(

                            event.target.value

                        )

                    }

                >

                    {

                        categories.map(item=>(

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

            </div>

            {/* Refresh */}

            <button

                className={styles.refresh}

                onClick={onRefresh}

            >

                <RotateCcw size={18}/>

                Refresh

            </button>

        </div>

    );

}