import {

    Search,

    RefreshCw,

    Upload

} from "lucide-react";

import styles from "./DocumentToolbar.module.css";

export default function DocumentToolbar({

    search,

    status,

    fileType,

    onSearch,

    onStatusChange,

    onFileTypeChange,

    onRefresh,

    onUpload

}) {

    return (

        <div className={styles.toolbar}>

            <div className={styles.search}>

                <Search size={18}/>

                <input

                    placeholder="Search documents..."

                    value={search}

                    onChange={event =>

                        onSearch(

                            event.target.value

                        )

                    }

                />

            </div>

            <select

                value={status}

                onChange={event =>

                    onStatusChange(

                        event.target.value

                    )

                }

            >

                <option>All</option>

                <option>Indexed</option>

                <option>Processing</option>

                <option>Failed</option>

            </select>

            <select

                value={fileType}

                onChange={event =>

                    onFileTypeChange(

                        event.target.value

                    )

                }

            >

                <option>All</option>

                <option>PDF</option>

                <option>DOCX</option>

                <option>TXT</option>

                <option>MD</option>

            </select>

            <button

                className={styles.refresh}

                onClick={onRefresh}

            >

                <RefreshCw size={16}/>

                Refresh

            </button>

            <button

                className={styles.upload}

                onClick={onUpload}

            >

                <Upload size={18}/>

                Upload Document

            </button>

        </div>

    );

}