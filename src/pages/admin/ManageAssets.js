import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function ManageAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    loadAssets();
  }, []);

  function loadAssets() {
    let data = JSON.parse(localStorage.getItem("assets")) || [];
    setAssets(data);
  }

  function handleDelete(id) {
    let updatedAssets = assets.filter((a) => a.id !== id);
    localStorage.setItem("assets", JSON.stringify(updatedAssets));
    setAssets(updatedAssets);
  }

  function getBadgeClass(status) {
    if (status === "AVAILABLE") return "badge available";
    if (status === "ALLOCATED") return "badge allocated";
    if (status === "UNDER_MAINTENANCE") return "badge maintenance";
    if (status === "RETIRED") return "badge retired";
    return "badge";
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-section">
        <Navbar />

        <div className="content">
          <div className="page-title">
            <h1>Assets</h1>
            <p>Manage all company assets in one place.</p>
          </div>

          <div className="table-card">
            <table className="company-table">
              <thead>
                <tr>
                  <th>Asset No</th>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Category</th>
                  <th>Value</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id}>
                    <td>{asset.assetNo}</td>
                    <td>{asset.assetName}</td>
                    <td>{asset.model}</td>
                    <td>{asset.categoryName}</td>
                    <td>₹{asset.assetValue}</td>
                    <td>
                      <span className={getBadgeClass(asset.status)}>
                        {asset.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="danger"
                        onClick={() => handleDelete(asset.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {assets.length === 0 && (
                  <tr>
                    <td colSpan="7">No assets found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAssets;