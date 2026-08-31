import { Outlet } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function EmployeeLayoutPage() {

    const user = JSON.parse(

        localStorage.getItem("user")

    );

    return (

        <DashboardLayout

            role={user?.role}

            department={user?.department}

            user={user}

        >

            <Outlet />

        </DashboardLayout>

    );

}