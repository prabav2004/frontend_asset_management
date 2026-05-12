import { Link } from "react-router-dom";
import { getRole } from "../utils/authStorage";

function Sidebar() {
  const role = getRole();

  return (
    <div className="sidebar">
      <div className="logo">
        Asset<span>Pro</span>
      </div>

      {role === "ADMIN" && (
        <>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/assets">Assets</Link>
          <Link to="/admin/assets/add">Add Asset</Link>
          <Link to="/admin/categories">Categories</Link>
          <Link to="/admin/asset-requests">Asset Requests</Link>
          <Link to="/admin/service-requests">Service Tickets</Link>
          <Link to="/admin/audits">Audits</Link>
          <Link to="/admin/employees">Employees</Link>
        </>
      )}

      {role === "EMPLOYEE" && (
        <>
          <Link to="/employee/dashboard">Dashboard</Link>
          <Link to="/employee/available-assets">Available Assets</Link>
          <Link to="/employee/my-assets">My Assets</Link>
          <Link to="/employee/my-requests">My Requests</Link>
          <Link to="/employee/service-request">Service Request</Link>
          <Link to="/employee/audits">Audits</Link>
        </>
      )}
    </div>
  );
}

export default Sidebar;