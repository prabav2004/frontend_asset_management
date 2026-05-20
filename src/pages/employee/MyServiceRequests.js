import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { getEmployeeServiceRequests } from "../../api/serviceRequestApi";
import { getUserId } from "../../utils/authStorage";

function MyServiceRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  function loadRequests() {
    getEmployeeServiceRequests(getUserId())
      .then((res) => {
        console.log("MY SERVICE REQUESTS:", res.data);
        setRequests(res.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
        alert("Failed to load service requests");
      });
  }

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>My Service Requests</h1>

          <div className="list-card">
            {requests.length > 0 ? (
              requests.map((r) => (
                <div className="request-card" key={r.id}>
                  <h3>{r.asset?.assetName}</h3>

                  <p>
                    <b>Issue Type:</b> {r.issueType}
                  </p>

                  <p>
                    <b>Description:</b> {r.description}
                  </p>

                  <p>
                    <b>Status:</b> {r.status}
                  </p>

                  <p>
                    <b>Admin Remarks:</b>{" "}
                    {r.adminRemarks || "Waiting for admin response"}
                  </p>
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

export default MyServiceRequests;