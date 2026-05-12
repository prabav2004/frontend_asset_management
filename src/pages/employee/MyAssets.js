import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function MyAssets() {

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>My Assets</h1>
            <p>Assets allocated to you.</p>
          </div>

          <div className="table-card">

            <table className="company-table">

              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Model</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Dell Laptop</td>
                  <td>Latitude 5420</td>

                  <td>
                    <span className="badge allocated">
                      ALLOCATED
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyAssets;