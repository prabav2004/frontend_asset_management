import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function ServiceRequests() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  function loadRequests() {

    let data =
      JSON.parse(localStorage.getItem("serviceRequests")) || [];

    setRequests(data);
  }

  function updateStatus(id, status) {

    let updated = requests.map((r) =>
      r.id === id
        ? { ...r, status: status }
        : r
    );

    localStorage.setItem(
      "serviceRequests",
      JSON.stringify(updated)
    );

    setRequests(updated);
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>Service Requests</h1>
            <p>Track maintenance and repair tickets.</p>
          </div>

          <div className="table-card">

            <table className="company-table">

              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Asset</th>
                  <th>Issue</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {requests.map((r) => (

                  <tr key={r.id}>

                    <td>{r.employeeName}</td>

                    <td>{r.assetName}</td>

                    <td>{r.description}</td>

                    <td>
                      <span className={"badge " + r.status.toLowerCase()}>
                        {r.status}
                      </span>
                    </td>

                    <td>

                      <div className="action-buttons">

                        <button
                          className="success"
                          onClick={() =>
                            updateStatus(r.id, "RESOLVED")
                          }
                        >
                          Resolve
                        </button>

                        <button
                          className="danger"
                          onClick={() =>
                            updateStatus(r.id, "REJECTED")
                          }
                        >
                          Reject
                        </button>

                      </div>

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

export default ServiceRequests;