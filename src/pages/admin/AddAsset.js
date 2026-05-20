import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { addAsset } from "../../api/assetApi";
import { getAllCategories } from "../../api/categoryApi";

function AddAsset() {
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    assetNo: "",
    assetName: "",
    model: "",
    description: "",
    imageUrl: "",
    assetValue: "",
    manufacturingDate: "",
    expiryDate: "",
    status: "AVAILABLE",
    categoryId: "",
  });

  useEffect(() => {
    loadCategories();
  }, []);

  function loadCategories() {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      ...form,
      assetValue: Number(form.assetValue),
      categoryId: Number(form.categoryId),
    };

    addAsset(data)
      .then(() => {
        alert("Asset added successfully");
        setForm({
          assetNo: "",
          assetName: "",
          model: "",
          description: "",
          imageUrl: "",
          assetValue: "",
          manufacturingDate: "",
          expiryDate: "",
          status: "AVAILABLE",
          categoryId: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add asset");
      });
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Add Asset</h1>

          <form className="form-card" onSubmit={handleSubmit}>
            <input name="assetNo" placeholder="Asset Number" value={form.assetNo} onChange={handleChange} />
            <input name="assetName" placeholder="Asset Name" value={form.assetName} onChange={handleChange} />
            <input name="model" placeholder="Model" value={form.model} onChange={handleChange} />
            <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} />
            <input name="assetValue" placeholder="Asset Value" value={form.assetValue} onChange={handleChange} />
            <input name="manufacturingDate" type="date" value={form.manufacturingDate} onChange={handleChange} />
            <input name="expiryDate" type="date" value={form.expiryDate} onChange={handleChange} />

            <select name="status" value={form.status} onChange={handleChange}>
              <option value="AVAILABLE">AVAILABLE</option>
              <option value="ALLOCATED">ALLOCATED</option>
              <option value="UNDER_MAINTENANCE">UNDER_MAINTENANCE</option>
              <option value="RETIRED">RETIRED</option>
            </select>

            <select name="categoryId" value={form.categoryId} onChange={handleChange}>
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.categoryName}
                </option>
              ))}
            </select>

            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>

            <button type="submit">Add Asset</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddAsset;