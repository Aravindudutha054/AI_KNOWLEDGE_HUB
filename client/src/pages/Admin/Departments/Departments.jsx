import { useEffect, useState } from "react";

import * as departmentService from "../../../services/department.service";

import DepartmentGrid from "../../../components/admin/departments/DepartmentGrid";

import DepartmentDrawer from "../../../components/admin/departments/DepartmentDrawer";

import styles from "./Departments.module.css";

export default function Departments() {

    const [departments, setDepartments] = useState([]);

    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDepartments();

    }, []);

    const loadDepartments = async () => {

        setLoading(true);

        try {

            const data =

                await departmentService.getDepartmentDashboard();

            setDepartments(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    const handleView = department => {

        setSelectedDepartment(department);

        setDrawerOpen(true);

    };

    return (

        <div className={styles.container}>

            <div className={styles.header}>

                <div>

                    <h1>

                        Department Management

                    </h1>

                    <p>

                        Manage enterprise departments and monitor activity.

                    </p>

                </div>

                <button>

                    + Add Department

                </button>

            </div>

            <DepartmentGrid

                loading={loading}

                departments={departments}

                onView={handleView}

            />

            <DepartmentDrawer

                open={drawerOpen}

                department={selectedDepartment}

                onClose={() =>

                    setDrawerOpen(false)

                }

            />

        </div>

    );

}