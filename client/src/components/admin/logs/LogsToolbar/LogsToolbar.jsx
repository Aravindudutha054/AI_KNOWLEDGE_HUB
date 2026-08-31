import styles from "./LogsToolbar.module.css";

export default function LogsToolbar({

    search,

    module,

    action,

    status,

    onSearchChange,

    onModuleChange,

    onActionChange,

    onStatusChange

}) {

    return (

        <div className={styles.toolbar}>

            <input

                type="text"

                placeholder="Search user, target..."

                value={search}

                onChange={(e) =>

                    onSearchChange(

                        e.target.value

                    )

                }

                className={styles.search}

            />

            <select

                value={module}

                onChange={(e) =>

                    onModuleChange(

                        e.target.value

                    )

                }

                className={styles.select}

            >

                <option value="">

                    All Modules

                </option>

                <option value="Documents">

                    Documents

                </option>

                <option value="Pipeline">

                    Pipeline

                </option>

                <option value="Employees">

                    Employees

                </option>

                <option value="Chat">

                    Chat

                </option>

                <option value="Authentication">

                    Authentication

                </option>

            </select>

            <select

                value={action}

                onChange={(e) =>

                    onActionChange(

                        e.target.value

                    )

                }

                className={styles.select}

            >

                <option value="">

                    All Actions

                </option>

                <option value="Upload">

                    Upload

                </option>

                <option value="Delete">

                    Delete

                </option>

                <option value="Update">

                    Update

                </option>

                <option value="Login">

                    Login

                </option>

                <option value="Ask AI">

                    Ask AI

                </option>

                <option value="Reindex">

                    Re-index

                </option>

            </select>

            <select

                value={status}

                onChange={(e) =>

                    onStatusChange(

                        e.target.value

                    )

                }

                className={styles.select}

            >

                <option value="">

                    All Status

                </option>

                <option value="Success">

                    Success

                </option>

                <option value="Failed">

                    Failed

                </option>

            </select>

        </div>

    );

}