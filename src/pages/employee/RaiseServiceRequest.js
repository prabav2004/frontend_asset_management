import { useState } from "react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function RaiseServiceRequest() {

  const [form, setForm] = useState({
    assetName: "",
    description: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {

    e.preventDefault();

    let requests =
      JSON.parse(localStorage.getItem("serviceRequests")) || [];

    requests.push({
      id: Date.now(),
      employeeName: "Employee",
      assetName: form.assetName,
      description: form.description,
      status: "PENDING",
    });

    localStorage.setItem(
      "serviceRequests",
      JSON.stringify(requests)
    );

    alert("Service Request Sent");

    setForm({
      assetName: "",
      description: "",
    });
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-section">

        <Navbar />

        <div className="content">

          <div className="page-title">
            <h1>Raise Service Request</h1>
            <p>Report maintenance or repair issues.</p>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>

            <input
              name="assetName"
              placeholder="Asset Name"
              value={form.assetName}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Issue Description"
              value={form.description}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Submit Request
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default RaiseServiceRequest;