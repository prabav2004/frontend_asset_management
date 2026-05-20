import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { getMyAllocatedAssets } from "../../api/adminApi";
import { raiseServiceRequest } from "../../api/serviceRequestApi";
import { getUserId } from "../../utils/authStorage";

function RaiseServiceRequest() {
  const [allocations, setAllocations] = useState([]);

  const [form, setForm] = useState({
    assetId: "",
    description: "",
    issueType: "REPAIR",
  });

  useEffect(() => {
    loadAllocatedAssets();
  }, []);

  function loadAllocatedAssets() {
    getMyAllocatedAssets(getUserId())
      .then((res) => {
        console.log("ALLOCATIONS:", res.data);
        setAllocations(res.data);
      })
      .catch((err) => {
        console.log("LOAD ASSET ERROR:", err);
      });
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.assetId) {
      alert("Please select asset");
      return;
    }

    if (!form.description.trim()) {
      alert("Please enter description");
      return;
    }

    const data = {
      userId: Number(getUserId()),
      assetId: Number(form.assetId),
      issueType: form.issueType,
      description: form.description,
    };

    console.log("SERVICE REQUEST DATA:", data);

    raiseServiceRequest(data)
      .then((res) => {
        console.log("SUCCESS:", res.data);

        alert("Service request raised successfully");

        setForm({
          assetId: "",
          description: "",
          issueType: "REPAIR",
        });
      })
      .catch((err) => {
        console.log("FULL ERROR:", err);
        console.log("STATUS:", err.response?.status);
        console.log("BACKEND ERROR:", err.response?.data);

        alert(
          err.response?.data?.message ||
            JSON.stringify(err.response?.data) ||
            "Failed to raise request"
        );
      });
  }

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Raise Service Request</h1>

          <form className="form-card" onSubmit={handleSubmit}>
            <select
              name="assetId"
              value={form.assetId}
              onChange={handleChange}
            >
              <option value="">Select Asset</option>

              {allocations.map((a) => (
                <option key={a.id} value={a.asset?.id}>
                  {a.asset?.assetName}
                </option>
              ))}
            </select>

            <select
              name="issueType"
              value={form.issueType}
              onChange={handleChange}
            >
              <option value="REPAIR">REPAIR</option>
              <option value="DAMAGE">DAMAGE</option>
              <option value="MALFUNCTION">MALFUNCTION</option>
              <option value="OTHER">OTHER</option>
            </select>

            <textarea
              name="description"
              placeholder="Describe the issue"
              value={form.description}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Submit Request</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RaiseServiceRequest;