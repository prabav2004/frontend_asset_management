import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function AdminDashboard() {
  const assets = JSON.parse(localStorage.getItem("assets")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const requests = JSON.parse(localStorage.getItem("assetRequests")) || [];
  const serviceRequests = JSON.parse(localStorage.getItem("serviceRequests")) || [];

  const availableAssets = assets.filter((a) => a.status === "AVAILABLE").length;
  const allocatedAssets = assets.filter((a) => a.status === "ALLOCATED").length;
  const employees = users.filter((u) => u.role === "EMPLOYEE").length;
  const pendingRequests = requests.filter((r) => r.status === "PENDING").length;

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-section">
        <Navbar />

        <div className="content">
          <div className="page-title">
            <h1>Admin Dashboard</h1>
            <p>Overview of company assets, employees and service operations.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card blue">
              <p>Total Assets</p>
              <h2>{assets.length}</h2>
            </div>

            <div className="stat-card green">
              <p>Available Assets</p>
              <h2>{availableAssets}</h2>
            </div>

            <div className="stat-card orange">
              <p>Allocated Assets</p>
              <h2>{allocatedAssets}</h2>
            </div>

            <div className="stat-card red">
              <p>Pending Requests</p>
              <h2>{pendingRequests}</h2>
            </div>

            <div className="stat-card blue">
              <p>Employees</p>
              <h2>{employees}</h2>
            </div>

            <div className="stat-card orange">
              <p>Service Tickets</p>
              <h2>{serviceRequests.length}</h2>
            </div>
          </div>

          <div className="table-card">
            <h3>Recent Asset Requests</h3>

            <table className="company-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Asset</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {requests.slice(0, 5).map((r) => (
                  <tr key={r.id}>
                    <td>{r.employeeName}</td>
                    <td>{r.assetName}</td>
                    <td>{r.reason}</td>
                    <td>
                      <span className={"badge " + r.status.toLowerCase()}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {requests.length === 0 && (
                  <tr>
                    <td colSpan="4">No recent requests found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;