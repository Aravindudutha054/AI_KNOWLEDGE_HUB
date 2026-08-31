import { useEffect, useMemo, useState } from "react";

import EmployeesHome from "../../../components/admin/employees/EmployeesHome";
import EmployeeDetails from "../../../components/admin/employees/EmployeeDetails";
import * as employeeService from "../../../services/employee.service";

export default function Employees() {

    /* ==========================================================
       FILTERS
    ========================================================== */

    const [search, setSearch] = useState("");

    const [role, setRole] = useState("All");

    /* ==========================================================
       EMPLOYEE STATE
    ========================================================== */

    const [employees, setEmployees] = useState([]);

    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);

    const [detailsOpen, setDetailsOpen] = useState(false);

    const user = JSON.parse(

        localStorage.getItem("user")

    );

    /* ==========================================================
       INITIAL LOAD
    ========================================================== */

    useEffect(() => {

        loadEmployees();

    }, [page]);

    /* ==========================================================
       LOAD EMPLOYEES
    ========================================================== */

    const loadEmployees = async () => {

        setLoading(true);

        try {

            const data = await employeeService.getEmployees(

                page,

                search

            );

            setEmployees(data.employees);

            setTotalPages(data.totalPages);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    /* ==========================================================
       FILTERED EMPLOYEES
    ========================================================== */

    const filteredEmployees = useMemo(() => {

        if (!Array.isArray(employees)) {

            return [];

        }

    return employees.filter(employee => {

        const matchesSearch =

            employee.user?.fullName
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            employee.user?.email
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            employee.employeeId
                ?.toLowerCase()
                .includes(search.toLowerCase());

        const matchesRole =

            role === "All" ||

            employee.user?.role === role;

        return (

            matchesSearch &&

            matchesRole

        );

    });

}, [

    employees,

    search,


    role

]);
    /* ==========================================================
       ACTIONS
    ========================================================== */

    const handleAdd = () => {

        setSelectedEmployee(null);

        setShowModal(true);

    };

    const handleView = (employee) => {

        setSelectedEmployee(employee);

        setDetailsOpen(true);

    };

    const handleEdit = (employee) => {

        setSelectedEmployee(employee);

        setDetailsOpen(false);

        setShowModal(true);

    };

    const handleDelete = async (employee) => {

        await employeeService.deleteEmployee(employee._id);

        loadEmployees();

    };

    const handleSave = async (employee) => {

        try {

            if (selectedEmployee?._id) {

                await employeeService.updateEmployee(

                    selectedEmployee._id,

                    employee

                );

            } else {

                await employeeService.createEmployee({

                    ...employee,

                    department: user.department._id

                });

            }

            await loadEmployees();

            setShowModal(false);

        } catch (error) {

            alert(

                error.response?.data?.message ||

                error.message ||

                "Unable to save employee."

            );

        }

    };

    const handleClose = () => {

        setShowModal(false);

    };

    /* ==========================================================
       UI
    ========================================================== */

    return (

        <>

            <EmployeesHome

                employees={filteredEmployees}

                page={page}

                totalPages={totalPages}

                loading={loading}

                search={search}

                departmentName={user?.department?.name || "Unknown"}

                role={role}

                showModal={showModal}

                selectedEmployee={selectedEmployee}

                onSearch={value => {

                    setSearch(value);

                    setPage(1);

                }}

                onRoleChange={setRole}

                onAdd={handleAdd}

                onEdit={handleEdit}

                onView={handleView}

                onDelete={handleDelete}

                onNext={() => {

                    if (page < totalPages) {

                        setPage(page + 1);

                    }

                }}

                onPrevious={() => {

                    if (page > 1) {

                        setPage(page - 1);

                    }

                }}

                onSave={handleSave}

                onClose={handleClose}

            />

            <EmployeeDetails

                open={detailsOpen}

                employee={selectedEmployee}

                onClose={() => setDetailsOpen(false)}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

        </>

    );

}