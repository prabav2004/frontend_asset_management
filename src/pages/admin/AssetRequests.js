import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {
  getAllAssetRequests,
  approveAssetRequest,
  rejectAssetRequest,
} from "../../api/assetRequestApi";

function AssetRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  function loadRequests() {
    getAllAssetRequests()
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err));
  }

  function approve(id) {
    approveAssetRequest(id).then(() => {
      alert("Request approved");
      loadRequests();
    });
  }

  function reject(id) {
    rejectAssetRequest(id).then(() => {
      alert("Request rejected");
      loadRequests();
    });
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Asset Requests</h1>

          <div className="list-card">
            {requests.map((r) => (
              <div className="request-card" key={r.id}>
                <h3>{r.asset?.assetName}</h3>
                <p><b>Employee:</b> {r.user?.name}</p>
                <p><b>Reason:</b> {r.reason}</p>
                <p><b>Status:</b> {r.status}</p>

                <button onClick={() => approve(r.id)}>Approve</button>
                <button className="danger" onClick={() => reject(r.id)}>Reject</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AssetRequests;