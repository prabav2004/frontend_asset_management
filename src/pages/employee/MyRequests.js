import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function MyRequests() {

  const requests =
    JSON.parse(localStorage.getItem("assetRequests")) || [];

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>My Requests</h1>
            <p>Track your asset requests.</p>
          </div>

          <div className="table-card">

            <table className="company-table">

              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {requests.map((r) => (

                  <tr key={r.id}>

                    <td>{r.assetName}</td>

                    <td>{r.reason}</td>

                    <td>
                      <span className={"badge " + r.status.toLowerCase()}>
                        {r.status}
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

export default MyRequests;