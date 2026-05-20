import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {
  getAllServiceRequests,
  updateServiceRequestStatus,
} from "../../api/serviceRequestApi";

function ServiceRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  function loadRequests() {
    getAllServiceRequests()
      .then((res) => {
        console.log("SERVICE REQUESTS:", res.data);
        setRequests(res.data);
      })
      .catch((err) => {
        console.log("LOAD ERROR:", err);
        alert("Failed to load service requests");
      });
  }

  function updateStatus(id, status) {
    const remarks = prompt("Enter admin remarks");

    if (!remarks || !remarks.trim()) {
      alert("Please enter remarks");
      return;
    }

    updateServiceRequestStatus(id, status, remarks)
      .then(() => {
        alert("Service request updated successfully");
        loadRequests();
      })
      .catch((err) => {
        console.log("UPDATE ERROR:", err);
        console.log("STATUS:", err.response?.status);
        console.log("BACKEND:", err.response?.data);

        alert("Failed to update service request");
      });
  }

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Service Requests</h1>

          <div className="list-card">
            {requests.length > 0 ? (
              requests.map((r) => (
                <div className="request-card" key={r.id}>
                  <h3>{r.asset?.assetName || "Asset not available"}</h3>

                  <p>
                    <b>Employee:</b> {r.user?.name || "Unknown"}
                  </p>

                  <p>
                    <b>Issue:</b> {r.issueType}
                  </p>

                  <p>
                    <b>Description:</b> {r.description}
                  </p>

                  <p>
                    <b>Status:</b> {r.status}
                  </p>

                  <p>
                    <b>Admin Remarks:</b>{" "}
                    {r.adminRemarks || r.remarks || "No remarks"}
                  </p>

                  <button
                    type="button"
                    onClick={() => updateStatus(r.id, "IN_PROGRESS")}
                  >
                    In Progress
                  </button>

                  <button
                    type="button"
                    onClick={() => updateStatus(r.id, "RESOLVED")}
                  >
                    Resolve
                  </button>

                  <button
                    type="button"
                    className="danger"
                    onClick={() => updateStatus(r.id, "REJECTED")}
                  >
                    Reject
                  </button>
                </div>
              ))
            ) : (
              <p>No service requests found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceRequests;