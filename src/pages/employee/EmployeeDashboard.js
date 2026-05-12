import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function EmployeeDashboard() {

  const requests =
    JSON.parse(localStorage.getItem("assetRequests")) || [];

  const services =
    JSON.parse(localStorage.getItem("serviceRequests")) || [];

  const audits =
    JSON.parse(localStorage.getItem("audits")) || [];

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>Employee Dashboard</h1>
            <p>Track assets, requests and audit status.</p>
          </div>

          <div className="stats-grid">

            <div className="stat-card blue">
              <p>My Requests</p>
              <h2>{requests.length}</h2>
            </div>

            <div className="stat-card orange">
              <p>Service Requests</p>
              <h2>{services.length}</h2>
            </div>

            <div className="stat-card green">
              <p>Audits</p>
              <h2>{audits.length}</h2>
            </div>

          </div>

          <div className="table-card">

            <h3>Recent Requests</h3>

            <table className="company-table">

              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {requests.slice(0, 5).map((r) => (

                  <tr key={r.id}>

                    <td>{r.assetName}</td>

                    <td>{r.reason}</td>

                    <td>
                      <span className={"badge " + r.status.toLowerCase()}>
                        {r.status}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeDashboard;