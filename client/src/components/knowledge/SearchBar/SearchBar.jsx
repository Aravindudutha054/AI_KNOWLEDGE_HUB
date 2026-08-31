import { Search, X, Mic } from "lucide-react";

import styles from "./SearchBar.module.css";

export default function SearchBar({

    value,

    onChange

}) {

    const clearSearch = () => {

        onChange("");

    };

    return (

        <div className={styles.container}>

            <div className={styles.searchBox}>

                <Search

                    size={20}

                    className={styles.searchIcon}

                />

                <input

                    type="text"

                    value={value}

                    placeholder="Search documents, policies, SOPs, manuals..."

                    className={styles.input}

                    onChange={(event) =>

                        onChange(event.target.value)

                    }

                />

                {

                    value && (

                        <button

                            className={styles.iconButton}

                            onClick={clearSearch}

                        >

                            <X size={18} />

                        </button>

                    )

                }

                <button

                    className={styles.iconButton}

                >

                    <Mic size={18} />

                </button>

            </div>

        </div>

    );

}