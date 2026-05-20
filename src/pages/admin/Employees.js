import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { getAllEmployees, deleteEmployee } from "../../api/adminApi";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    getAllEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }

  function handleDelete(id) {
    deleteEmployee(id)
      .then(() => {
        alert("Employee deleted");
        loadEmployees();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Employees</h1>

          <div className="list-card">
            {employees.map((e) => (
              <div className="list-row" key={e.id}>
                <div>
                  <h3>{e.name}</h3>
                  <p>{e.email}</p>
                  <p>{e.contactNo}</p>
                </div>

                <button className="danger" onClick={() => handleDelete(e.id)}>
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

export default Employees;