import { Navigate } from "react-router-dom";

import {
  getCurrentUser,
  getRole,
} from "../utils/authStorage";

function ProtectedRoute({
  children,
  allowedRole,
}) {

  const user = getCurrentUser();

  const role = getRole();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role !== allowedRole) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;