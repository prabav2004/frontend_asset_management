import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { getAvailableAssets } from "../../api/assetApi";
import { requestAsset } from "../../api/assetRequestApi";
import { getUserId } from "../../utils/authStorage";

function AvailableAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    loadAssets();
  }, []);

  function loadAssets() {
    getAvailableAssets()
      .then((res) => setAssets(res.data))
      .catch((err) => console.log(err));
  }

  function handleRequest(assetId) {
    const reason = prompt("Enter reason for requesting this asset");

    const data = {
      userId: Number(getUserId()),
      assetId: assetId,
      reason: reason || "Need this asset",
    };

    requestAsset(data)
      .then(() => {
        alert("Asset request sent");
      })
      .catch((err) => {
        console.log(err);
        alert("Request failed");
      });
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Available Assets</h1>

          <div className="card-grid">
            {assets.map((asset) => (
              <div className="asset-card" key={asset.id}>
                <img
                  src={asset.imageUrl || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"}
                  alt={asset.assetName}
                />

                <h3>{asset.assetName}</h3>
                <p><b>Asset No:</b> {asset.assetNo}</p>
                <p><b>Model:</b> {asset.model}</p>
                <p><b>Status:</b> {asset.status}</p>

                <button onClick={() => handleRequest(asset.id)}>Request Asset</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableAssets;