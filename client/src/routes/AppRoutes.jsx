import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing";

import ProtectedRoute from "./ProtectedRoute";

/* ===========================
   Admin Pages
=========================== */

import AdminLayoutPage from "../pages/Admin/AdminLayoutPage";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Employees from "../pages/Admin/Employees/Employees";
import Departments from "../pages/Admin/Departments/Departments";
import Documents from "../pages/Admin/Documents/Documents";
import Pipeline from "../pages/Admin/Pipeline/Pipeline";
import Logs from "../pages/Admin/Logs/Logs";
import AdminAnalytics from "../pages/Admin/Analytics/Analytics";

/* ===========================
   Employee Pages
=========================== */

import EmployeeLayoutPage from "../pages/Employee/EmployeeLayoutPage";
import DashboardEmployee from "../pages/Employee/Dashboard/Dashboard";
import Chat from "../pages/Employee/Chat/Chat";
import EmployeeDocuments from "../pages/Employee/Documents/Documents";
import KnowledgeBase from "../pages/Employee/KnowledgeBase/KnowledgeBase";
import EmployeeAnalytics from "../pages/Employee/Analytics/Analytics";
import Notifications from "../pages/Employee/Notifications/Notifications";
import Settings from "../pages/Employee/Settings/Settings";
import AdminSettings from "../pages/Admin/Settings/Settings";

export default function AppRoutes() {

    return (

        <Routes>

            {/* ===========================
                Landing
            =========================== */}

            <Route

                path="/"

                element={<Landing />}

            />

            {/* ===========================
                Admin Routes
            =========================== */}

            <Route

                path="/admin"

                element={

                    <ProtectedRoute>

                        <AdminLayoutPage />

                    </ProtectedRoute>

                }

            >

                <Route

                    index

                    element={<Navigate to="dashboard" replace />}

                />

                <Route

                    path="dashboard"

                    element={<Dashboard />}

                />

                <Route

                    path="employees"

                    element={<Employees />}

                />

                <Route

                    path="departments"

                    element={<Departments />}

                />

                <Route

                    path="documents"

                    element={<Documents />}

                />

                <Route

                    path="pipeline"

                    element={<Pipeline />}

                />

                <Route

                    path="analytics"

                    element={<AdminAnalytics />}

                />

                <Route

    path="logs"

    element={<Logs />}

/>

<Route

    path="settings"

    element={<AdminSettings />}

/>

            </Route>

            

            {/* ===========================
                Employee Routes
            =========================== */}

            <Route

                path="/employee"

                element={

                    <ProtectedRoute>

                        <EmployeeLayoutPage />

                    </ProtectedRoute>

                }

            >

                <Route

                    index

                    element={<Navigate to="dashboard" replace />}

                />

                <Route

                    path="dashboard"

                    element={<DashboardEmployee />}

                />

                <Route

                    path="chat"

                    element={<Chat />}

                />

                <Route

                    path="documents"

                    element={<EmployeeDocuments />}

                />

                <Route

                    path="knowledge-base"

                    element={<KnowledgeBase />}

                />

                <Route

                    path="analytics"

                    element={<EmployeeAnalytics />}

                />

                <Route

                    path="notifications"

                    element={<Notifications />}

                />

                <Route

                    path="settings"

                    element={<Settings />}

                />

            </Route>

        </Routes>

    );

}