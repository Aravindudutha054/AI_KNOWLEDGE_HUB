import { motion } from "framer-motion";

import EmployeeToolbar from "../EmployeeToolbar";
import EmployeeTable from "../EmployeeTable";
import EmployeeModal from "../EmployeeModal";
import EmptyEmployees from "../EmptyEmployees";

import styles from "./EmployeesHome.module.css";

const container = {

    hidden:{},

    show:{

        transition:{

            staggerChildren:.08

        }

    }

};

const item={

    hidden:{

        opacity:0,

        y:20

    },

    show:{

        opacity:1,

        y:0,

        transition:{

            duration:.4

        }

    }

};

export default function EmployeesHome({

    employees,

    page,

    totalPages,

    loading,

    search,

    departmentName,

    role,

    showModal,

    selectedEmployee,

    onSearch,

    onRoleChange,

    onAdd,

    onEdit,

    onView,

    onDelete,

    onNext,

    onPrevious,

    onSave,

    onClose

}){

    return(

        <motion.div

            variants={container}

            initial="hidden"

            animate="show"

            className={styles.container}

        >

            {/* Header 

            <motion.div

                variants={item}

                className={styles.header}

            >

                <div>

                    <h1>

                        Employee Management

                    </h1>

                    <p>

                        Manage employees, departments and roles.

                    </p>

                </div>

            </motion.div>  */}

            {/* Department banner */}

            <motion.div variants={item}>

                <div className={styles.departmentBanner}>

                    <div>

                        <h2>

                            Employee Management

                        </h2>

                        <p>

                            Department: {departmentName}

                        </p>

                    </div>

                </div>

            </motion.div>

            {/* Toolbar */}

            <motion.div variants={item}>

                <EmployeeToolbar

                    search={search}

                    role={role}

                    onSearch={onSearch}

                    onRoleChange={onRoleChange}

                    onAdd={onAdd}

                />

            </motion.div>

            {/* Table */}

            <motion.div variants={item}>

                {

                    employees.length>0

                    ?

                    <EmployeeTable

                        employees={employees}

                        loading={loading}

                        onEdit={onEdit}

                        onView={onView}

                        onDelete={onDelete}

                    />

                    :

                    <EmptyEmployees

    onAdd={onAdd}

/>

                }

            </motion.div>

            {/* Modal */}

            {

                showModal &&

                <EmployeeModal

                    employee={selectedEmployee}

                    onSave={onSave}

                    onClose={onClose}

                />

            }

            <div className={styles.pagination}>

                <button

                    disabled={page === 1}

                    onClick={onPrevious}

                >

                    Previous

                </button>

                <span>

                    Page {page} of {totalPages}

                </span>

                <button

                    disabled={page === totalPages}

                    onClick={onNext}

                >

                    Next

                </button>

            </div>

        </motion.div>

    );

}