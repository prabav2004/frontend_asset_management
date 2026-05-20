import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { getEmployeeAudits, submitEmployeeAuditRemarks } from "../../api/auditApi";
import { getUserId } from "../../utils/authStorage";

function MyAudits() {
  const [audits, setAudits] = useState([]);

  useEffect(() => {
    loadAudits();
  }, []);

  function loadAudits() {
    getEmployeeAudits(getUserId())
      .then((res) => setAudits(res.data))
      .catch((err) => console.log(err));
  }

  function submitRemarks(id) {
    const remarks = prompt("Enter asset condition / problem");

    if (!remarks || !remarks.trim()) {
      alert("Please enter remarks");
      return;
    }

    submitEmployeeAuditRemarks(id, remarks)
      .then(() => {
        alert("Remarks submitted. Waiting for admin verification.");
        loadAudits();
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to submit remarks");
      });
  }

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>My Audits</h1>

          <div className="list-card">
            {audits.length > 0 ? (
              audits.map((a) => (
                <div className="request-card" key={a.id}>
                  <h3>{a.asset?.assetName}</h3>

                  <p>
                    <b>Status:</b> {a.status}
                  </p>

                  <p>
                    <b>Employee Remarks:</b> {a.employeeRemarks || "Not submitted"}
                  </p>

                  <p>
                    <b>Admin Remarks:</b> {a.adminRemarks || "Waiting for admin"}
                  </p>

                  {a.status === "PENDING" && (
                    <button onClick={() => submitRemarks(a.id)}>
                      Submit Remarks
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p>No audits found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAudits;