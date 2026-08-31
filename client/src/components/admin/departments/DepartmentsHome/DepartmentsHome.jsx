import { motion } from "framer-motion";

import DepartmentToolbar from "../DepartmentToolbar";
import DepartmentTable from "../DepartmentTable";
import DepartmentModal from "../DepartmentModal";
import EmptyDepartments from "../EmptyDepartments";

import styles from "./DepartmentsHome.module.css";

const container = {

    hidden: {},

    show: {

        transition: {

            staggerChildren: 0.08

        }

    }

};

const item = {

    hidden: {

        opacity: 0,

        y: 20

    },

    show: {

        opacity: 1,

        y: 0,

        transition: {

            duration: 0.4

        }

    }

};

export default function DepartmentsHome({

    departments,

    loading,

    search,

    showModal,

    selectedDepartment,

    onSearch,

    onAdd,

    onEdit,

    onDelete,

    onSave,

    onClose

}) {

    return (

        <motion.div

            variants={container}

            initial="hidden"

            animate="show"

            className={styles.container}

        >

            {/* Header */}

            <motion.div

                variants={item}

                className={styles.header}

            >

                <div>

                    <h1>

                        Department Management

                    </h1>

                    <p>

                        Create and manage organization departments.

                    </p>

                </div>

            </motion.div>

            {/* Toolbar */}

            <motion.div variants={item}>

                <DepartmentToolbar

                    search={search}

                    onSearch={onSearch}

                    onAdd={onAdd}

                />

            </motion.div>

            {/* Table */}

            <motion.div variants={item}>

                {

                    departments.length > 0

                        ?

                        <DepartmentTable

                            departments={departments}

                            loading={loading}

                            onEdit={onEdit}

                            onDelete={onDelete}

                        />

                        :

                        <EmptyDepartments

                            onAdd={onAdd}

                        />

                }

            </motion.div>

            {/* Modal */}

            {

                showModal && (

                    <DepartmentModal

                        department={selectedDepartment}

                        onSave={onSave}

                        onClose={onClose}

                    />

                )

            }

        </motion.div>

    );

}