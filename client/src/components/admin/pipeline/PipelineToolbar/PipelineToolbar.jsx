import {

    Search,

    Building2,

    RefreshCw,

    RotateCcw

} from "lucide-react";

import styles from "./PipelineToolbar.module.css";

const departments = [

    "All",

    "Information Technology",

    "Human Resources",

    "Finance",

    "Administration"

];

export default function PipelineToolbar({

    search,

    department,

    onSearch,

    onDepartmentChange,

    onRefresh,

    onReindexAll

}) {

    return (

        <div className={styles.toolbar}>

            {/* Search */}

            <div className={styles.searchBox}>

                <Search size={18}/>

                <input

                    type="text"

                    placeholder="Search documents..."

                    value={search}

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

            {/* Refresh */}

            <button

                className={styles.secondary}

                onClick={onRefresh}

            >

                <RefreshCw size={18}/>

                Refresh

            </button>

            {/* Re-index */}

            <button

                className={styles.primary}

                onClick={onReindexAll}

            >

                <RotateCcw size={18}/>

                Re-index All

            </button>

        </div>

    );

}