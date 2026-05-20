import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Admin Dashboard</h1>

          <div className="dashboard-grid">
            <div className="dash-card">
              <h3>Manage Assets</h3>
              <p>Add, update and delete company assets.</p>
            </div>

            <div className="dash-card">
              <h3>Asset Requests</h3>
              <p>Approve or reject employee asset requests.</p>
            </div>

            <div className="dash-card">
              <h3>Service Requests</h3>
              <p>Track repair and maintenance requests.</p>
            </div>

            <div className="dash-card">
              <h3>Audits</h3>
              <p>Send audit requests and verify asset status.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;