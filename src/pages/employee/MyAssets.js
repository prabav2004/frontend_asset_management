import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { getMyAllocatedAssets } from "../../api/adminApi";
import { returnAsset } from "../../api/assetRequestApi";
import { getUserId } from "../../utils/authStorage";

function MyAssets() {
  const [allocations, setAllocations] = useState([]);

  useEffect(() => {
    loadAssets();
  }, []);

  function loadAssets() {
    getMyAllocatedAssets(getUserId())
      .then((res) => setAllocations(res.data))
      .catch((err) => console.log(err));
  }

  function handleReturn(assetId) {
    returnAsset(assetId)
      .then(() => {
        alert("Asset returned");
        loadAssets();
      })
      .catch((err) => {
        console.log(err);
        alert("Return failed");
      });
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>My Allocated Assets</h1>

          <div className="card-grid">
            {allocations.map((a) => (
              <div className="asset-card" key={a.id}>
                <h3>{a.asset?.assetName}</h3>
                <p><b>Asset No:</b> {a.asset?.assetNo}</p>
                <p><b>Model:</b> {a.asset?.model}</p>
                <p><b>Status:</b> {a.asset?.status}</p>

                <button className="danger" onClick={() => handleReturn(a.asset?.id)}>
                  Return Asset
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAssets;