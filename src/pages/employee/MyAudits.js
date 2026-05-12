import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function MyAudits() {

  const audits =
    JSON.parse(localStorage.getItem("audits")) || [];

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>My Audits</h1>
            <p>Review your audit records.</p>
          </div>

          <div className="table-card">

            <table className="company-table">

              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {audits.map((a) => (

                  <tr key={a.id}>

                    <td>{a.assetName}</td>

                    <td>
                      <span className={"badge " + a.status.toLowerCase()}>
                        {a.status}
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

export default MyAudits;