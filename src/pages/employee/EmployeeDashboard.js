import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function EmployeeDashboard() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Employee Dashboard</h1>

          <div className="dashboard-grid">
            <div className="dash-card">
              <h3>Available Assets</h3>
              <p>View and request available company assets.</p>
            </div>

            <div className="dash-card">
              <h3>My Assets</h3>
              <p>Check assets currently assigned to you.</p>
            </div>

            <div className="dash-card">
              <h3>Service Request</h3>
              <p>Raise repair or maintenance requests.</p>
            </div>

            <div className="dash-card">
              <h3>Audit</h3>
              <p>Verify your assigned assets during audit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboard;