import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function ManageCategories() {

  const [categoryName, setCategoryName] = useState("");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  function loadCategories() {

    let data = JSON.parse(localStorage.getItem("categories")) || [];

    setCategories(data);
  }

  function handleAdd(e) {

    e.preventDefault();

    let newCategory = {
      id: Date.now(),
      categoryName: categoryName,
    };

    let updated = [...categories, newCategory];

    localStorage.setItem(
      "categories",
      JSON.stringify(updated)
    );

    setCategories(updated);

    setCategoryName("");
  }

  function handleDelete(id) {

    let updated = categories.filter(
      (c) => c.id !== id
    );

    localStorage.setItem(
      "categories",
      JSON.stringify(updated)
    );

    setCategories(updated);
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>Categories</h1>
            <p>Manage company asset categories.</p>
          </div>

          <form className="inline-form" onSubmit={handleAdd}>

            <input
              placeholder="Enter Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />

            <button>
              Add Category
            </button>

          </form>

          <div className="table-card">

            <table className="company-table">

              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {categories.map((c) => (

                  <tr key={c.id}>

                    <td>{c.categoryName}</td>

                    <td>

                      <button
                        className="danger"
                        onClick={() => handleDelete(c.id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

                {categories.length === 0 && (
                  <tr>
                    <td colSpan="2">
                      No categories found
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

export default ManageCategories;