import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import ProtectedRoute from "../components/ProtectedRoute";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageAssets from "../pages/admin/ManageAssets";
import AddAsset from "../pages/admin/AddAsset";
import ManageCategories from "../pages/admin/ManageCategories";
import AssetRequests from "../pages/admin/AssetRequests";
import ServiceRequests from "../pages/admin/ServiceRequests";
import Employees from "../pages/admin/Employees";
import Audits from "../pages/admin/Audits";

import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import AvailableAssets from "../pages/employee/AvailableAssets";
import MyAssets from "../pages/employee/MyAssets";
import MyRequests from "../pages/employee/MyRequests";
import RaiseServiceRequest from "../pages/employee/RaiseServiceRequest";
import MyAudits from "../pages/employee/MyAudits";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ADMIN */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/assets"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <ManageAssets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/assets/add"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AddAsset />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/categories"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <ManageCategories />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/asset-requests"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AssetRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/service-requests"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <ServiceRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/employees"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <Employees />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/audits"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <Audits />
          </ProtectedRoute>
        }
      />

      {/* EMPLOYEE */}

      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute allowedRole="EMPLOYEE">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/available-assets"
        element={
          <ProtectedRoute allowedRole="EMPLOYEE">
            <AvailableAssets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/my-assets"
        element={
          <ProtectedRoute allowedRole="EMPLOYEE">
            <MyAssets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/my-requests"
        element={
          <ProtectedRoute allowedRole="EMPLOYEE">
            <MyRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/service-request"
        element={
          <ProtectedRoute allowedRole="EMPLOYEE">
            <RaiseServiceRequest />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/audits"
        element={
          <ProtectedRoute allowedRole="EMPLOYEE">
            <MyAudits />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;