import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function AddAsset() {
  const [form, setForm] = useState({
    assetNo: "",
    assetName: "",
    model: "",
    description: "",
    imageUrl: "",
    assetValue: "",
    status: "AVAILABLE",
    categoryName: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let assets = JSON.parse(localStorage.getItem("assets")) || [];

    let newAsset = {
      id: Date.now(),
      ...form,
    };

    assets.push(newAsset);

    localStorage.setItem("assets", JSON.stringify(assets));

    alert("Asset Added Successfully");

    setForm({
      assetNo: "",
      assetName: "",
      model: "",
      description: "",
      imageUrl: "",
      assetValue: "",
      status: "AVAILABLE",
      categoryName: "",
    });
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-section">
        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>Add Asset</h1>
            <p>Create and manage company inventory assets.</p>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>

            <div className="form-title">
              <h3>Asset Information</h3>
              <p>Enter complete asset details</p>
            </div>

            <input
              name="assetNo"
              placeholder="Asset Number"
              value={form.assetNo}
              onChange={handleChange}
            />

            <input
              name="assetName"
              placeholder="Asset Name"
              value={form.assetName}
              onChange={handleChange}
            />

            <input
              name="model"
              placeholder="Model"
              value={form.model}
              onChange={handleChange}
            />

            <input
              name="categoryName"
              placeholder="Category"
              value={form.categoryName}
              onChange={handleChange}
            />

            <input
              name="assetValue"
              placeholder="Asset Value"
              value={form.assetValue}
              onChange={handleChange}
            />

            <input
              name="imageUrl"
              placeholder="Image URL"
              value={form.imageUrl}
              onChange={handleChange}
            />

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="AVAILABLE">AVAILABLE</option>
              <option value="ALLOCATED">ALLOCATED</option>
              <option value="UNDER_MAINTENANCE">UNDER MAINTENANCE</option>
              <option value="RETIRED">RETIRED</option>
            </select>

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Add Asset
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAsset;