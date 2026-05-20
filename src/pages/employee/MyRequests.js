import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { getEmployeeAssetRequests } from "../../api/assetRequestApi";
import { getUserId } from "../../utils/authStorage";

function MyRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getEmployeeAssetRequests(getUserId())
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>My Asset Requests</h1>

          <div className="list-card">
            {requests.map((r) => (
              <div className="request-card" key={r.id}>
                <h3>{r.asset?.assetName}</h3>
                <p><b>Reason:</b> {r.reason}</p>
                <p><b>Status:</b> {r.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyRequests;