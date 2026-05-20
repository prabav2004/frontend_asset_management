import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {
  addCategory,
  getAllCategories,
  deleteCategory,
} from "../../api/categoryApi";

function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  function loadCategories() {
    getAllCategories()
      .then((res) => {
        console.log("CATEGORIES:", res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log("LOAD CATEGORY ERROR:", err);

        if (err.response) {
          console.log("LOAD STATUS:", err.response.status);
          console.log("LOAD BACKEND:", err.response.data);
        }
      });
  }

  function handleAdd(e) {
    e.preventDefault();

    if (!categoryName.trim()) {
      alert("Please enter category name");
      return;
    }

    addCategory({ categoryName: categoryName })
      .then((res) => {
        console.log("CATEGORY ADDED:", res.data);

        alert("Category added successfully");

        setCategoryName("");

        loadCategories();
      })
      .catch((err) => {
        console.log("========== CATEGORY ERROR ==========");
        console.log("FULL ERROR:", err);

        if (err.response) {
          console.log("STATUS:", err.response.status);
          console.log("BACKEND DATA:", err.response.data);
          console.log("HEADERS:", err.response.headers);

          alert(
            "STATUS: " +
              err.response.status +
              "\nERROR: " +
              JSON.stringify(err.response.data)
          );
        } else if (err.request) {
          console.log("NO RESPONSE RECEIVED:", err.request);

          alert("Backend server not responding");
        } else {
          console.log("ERROR MESSAGE:", err.message);

          alert(err.message);
        }

        console.log("====================================");
      });
  }

  function handleDelete(id) {
    deleteCategory(id)
      .then(() => {
        alert("Category deleted");

        loadCategories();
      })
      .catch((err) => {
        console.log("DELETE ERROR:", err);

        if (err.response) {
          console.log("DELETE STATUS:", err.response.status);
          console.log("DELETE BACKEND:", err.response.data);
        }

        alert("Failed to delete category");
      });
  }

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Manage Categories</h1>

          <form className="inline-form" onSubmit={handleAdd}>
            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />

            <button type="submit">Add</button>
          </form>

          <div className="list-card">
            {categories.length > 0 ? (
              categories.map((c) => (
                <div className="list-row" key={c.id}>
                  <span>{c.categoryName}</span>

                  <button
                    type="button"
                    className="danger"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p>No categories found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageCategories;