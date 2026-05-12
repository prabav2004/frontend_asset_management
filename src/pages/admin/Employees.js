import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function Employees() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let employeeUsers = users.filter(
      (u) => u.role === "EMPLOYEE"
    );

    setEmployees(employeeUsers);
  }

  function handleDelete(email) {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let updated = users.filter(
      (u) => u.email !== email
    );

    localStorage.setItem("users", JSON.stringify(updated));

    loadEmployees();
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>Employees</h1>
            <p>Manage all registered company employees.</p>
          </div>

          <div className="table-card">

            <table className="company-table">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Gender</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {employees.map((e) => (

                  <tr key={e.email}>

                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.contactNo}</td>
                    <td>{e.gender}</td>

                    <td>
                      <span className="badge allocated">
                        {e.role}
                      </span>
                    </td>

                    <td>

                      <button
                        className="danger"
                        onClick={() => handleDelete(e.email)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

                {employees.length === 0 && (
                  <tr>
                    <td colSpan="6">
                      No employees found
                    </td>
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

export default Employees;