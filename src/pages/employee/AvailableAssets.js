import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function AvailableAssets() {

  const [assets, setAssets] = useState([]);

  useEffect(() => {

    let data =
      JSON.parse(localStorage.getItem("assets")) || [];

    let available =
      data.filter((a) => a.status === "AVAILABLE");

    setAssets(available);

  }, []);

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>Available Assets</h1>
            <p>View company assets available for allocation.</p>
          </div>

          <div className="table-card">

            <table className="company-table">

              <thead>
                <tr>
                  <th>Asset No</th>
                  <th>Asset</th>
                  <th>Model</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {assets.map((a) => (

                  <tr key={a.id}>

                    <td>{a.assetNo}</td>

                    <td>{a.assetName}</td>

                    <td>{a.model}</td>

                    <td>
                      <span className="badge available">
                        AVAILABLE
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AvailableAssets;