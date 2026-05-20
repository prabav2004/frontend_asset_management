import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {
  sendAuditToAllEmployees,
  getAllAudits,
  updateAdminRemarks,
} from "../../api/auditApi";

function Audits() {
  const [audits, setAudits] = useState([]);

  useEffect(() => {
    loadAudits();
  }, []);

  function loadAudits() {
    getAllAudits()
      .then((res) => setAudits(res.data))
      .catch((err) => console.log(err));
  }

  function sendAudit() {
    sendAuditToAllEmployees()
      .then(() => {
        alert("Audit request sent to all employees");
        loadAudits();
      })
      .catch((err) => console.log(err));
  }

  function addRemarks(id) {
    const remarks = prompt("Enter admin remarks");

    updateAdminRemarks(id, remarks || "")
      .then(() => {
        alert("Remarks updated");
        loadAudits();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Audits</h1>

          <button onClick={sendAudit}>Send Audit To All Employees</button>

          <div className="list-card">
            {audits.map((a) => (
              <div className="request-card" key={a.id}>
                <h3>{a.asset?.assetName}</h3>
                <p><b>Employee:</b> {a.user?.name}</p>
                <p><b>Status:</b> {a.status}</p>
                <p><b>Employee Remarks:</b> {a.employeeRemarks}</p>
                <p><b>Admin Remarks:</b> {a.adminRemarks}</p>

                <button onClick={() => addRemarks(a.id)}>Add Admin Remarks</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Audits;