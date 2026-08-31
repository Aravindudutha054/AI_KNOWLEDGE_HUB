import styles from "./PipelineFilters.module.css";

export default function PipelineFilters({

    search,

    status,

    onSearchChange,

    onStatusChange

}) {

    return (

        <div className={styles.container}>

            <input
                type="text"
                value={search}
                placeholder="Search documents..."
                onChange={(e) =>
                    onSearchChange(e.target.value)
                }
                className={styles.search}
            />

            <select
                value={status}
                onChange={(e) =>
                    onStatusChange(e.target.value)
                }
                className={styles.select}
            >

                <option value="">
                    All Status
                </option>

                <option value="Uploaded">
                    Uploaded
                </option>

                <option value="Processing">
                    Processing
                </option>

                <option value="Indexed">
                    Indexed
                </option>

                <option value="Failed">
                    Failed
                </option>

            </select>

        </div>

    );

}