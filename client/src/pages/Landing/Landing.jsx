import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LandingLayout from "../../layouts/LandingLayout";

import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import RagPipeline from "../../components/landing/RagPipeline";
import DepartmentIsolation from "../../components/landing/DepartmentIsolation";
import Workflow from "../../components/landing/Workflow";
import FeatureGrid from "../../components/landing/FeatureGrid";
import Architecture from "../../components/landing/Architecture";
import Analytics from "../../components/landing/Analytics";
import Footer from "../../components/landing/Footer";
import DepartmentSelection from "./DepartmentSelection";
import Login from "./Login";
import WorkspaceLoader from "./WorkspaceLoader";

import RoleSelection from "./RoleSelection";

const PAGES = {
    LANDING: "landing",
    ROLE: "role",
    DEPARTMENT: "department",
    LOGIN: "login",
    WORKSPACE: "workspace",
};

export default function Landing() {

    const navigate = useNavigate();

    const [page, setPage] = useState(PAGES.LANDING);

    const [role, setRole] = useState(null);

    const [department, setDepartment] = useState(null);

    if (page === PAGES.ROLE) {
    return (
      <RoleSelection
    onBack={() => setPage(PAGES.LANDING)}
    onSelect={(selectedRole) => {
        setRole(selectedRole);
        setPage(PAGES.DEPARTMENT);
    }}
/>
    

    );
  }

    if (page === PAGES.DEPARTMENT) {
    return (
        <DepartmentSelection
            role={role}
            onBack={() => setPage(PAGES.ROLE)}
            onDepartmentSelect={(selectedDepartment) => {

    setDepartment(selectedDepartment);

    setPage(PAGES.LOGIN);

}}
        />
    );
}

    if (page === PAGES.LOGIN) {

    return (

        <Login
            role={role}
            department={department}

            onBack={() =>
                setPage(PAGES.DEPARTMENT)
            }

            onLogin={(user) => {

    if (user.role === "admin") {

        navigate("/admin/dashboard");

    }

    else {

        navigate("/employee/dashboard");

    }

}}

        />

    );

}

    if (page === PAGES.WORKSPACE) {

    return (

        <WorkspaceLoader

            role={role}

            department={department}

            onComplete={() => {

                console.log("Workspace Ready");

                // Later

                // if(role==="employee"){

                //     setPage(PAGES.EMPLOYEE_DASHBOARD);

                // }

                // else{

                //     setPage(PAGES.ADMIN_DASHBOARD);

                // }

            }}

        />

    );

}
    

  return (
    <LandingLayout>

     <Navbar
    onGrantAccess={() => setPage(PAGES.ROLE)}
/>

<Hero
    onGrantAccess={() => setPage(PAGES.ROLE)}
/>

      <RagPipeline />

      <DepartmentIsolation />

      <Workflow />

      <FeatureGrid />

      <Architecture />

      <Analytics />

      <Footer />

    </LandingLayout>
  );
}