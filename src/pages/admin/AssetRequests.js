import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function AssetRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  function loadRequests() {
    let data = JSON.parse(localStorage.getItem("assetRequests")) || [];
    setRequests(data);
  }

  function updateStatus(id, status) {
    let updated = requests.map((r) =>
      r.id === id ? { ...r, status: status } : r
    );

    localStorage.setItem("assetRequests", JSON.stringify(updated));
    setRequests(updated);
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-section">
        <Navbar />

        <div className="content">
          <div className="page-title">
            <h1>Asset Requests</h1>
            <p>Approve or reject employee asset requests.</p>
          </div>

          <div className="table-card">
            <table className="company-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Asset</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((r) => (
                  <tr key={r.id}>
                    <td>{r.employeeName}</td>
                    <td>{r.assetName}</td>
                    <td>{r.reason}</td>
                    <td>
                      <span className={"badge " + r.status.toLowerCase()}>
                        {r.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="success"
                          onClick={() => updateStatus(r.id, "APPROVED")}
                        >
                          Approve
                        </button>

                        <button
                          className="danger"
                          onClick={() => updateStatus(r.id, "REJECTED")}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {requests.length === 0 && (
                  <tr>
                    <td colSpan="5">No asset requests found</td>
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

export default AssetRequests;