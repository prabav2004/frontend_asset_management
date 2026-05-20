import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { getAllAssets, deleteAsset } from "../../api/assetApi";

function ManageAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    loadAssets();
  }, []);

  function loadAssets() {
    getAllAssets()
      .then((res) => setAssets(res.data))
      .catch((err) => console.log(err));
  }

  function handleDelete(id) {
    deleteAsset(id)
      .then(() => {
        alert("Asset deleted");
        loadAssets();
      })
      .catch((err) => {
        console.log(err);
        alert("Delete failed");
      });
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Manage Assets</h1>

          <div className="card-grid">
            {assets.map((asset) => (
              <div className="asset-card" key={asset.id}>
                <img
                  src={asset.imageUrl || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"}
                  alt={asset.assetName}
                />

                <h3>{asset.assetName}</h3>
                <p><b>Asset No:</b> {asset.assetNo}</p>
                <p><b>Model:</b> {asset.model}</p>
                <p><b>Status:</b> {asset.status}</p>
                <p><b>Value:</b> ₹{asset.assetValue}</p>

                <button className="danger" onClick={() => handleDelete(asset.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageAssets;