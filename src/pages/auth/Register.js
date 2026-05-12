import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
    contactNo: "",
    address: "",
    role: "EMPLOYEE",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleRegister(e) {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.find((u) => u.email === form.email);

    if (exists) {
      alert("User already exists");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");
    navigate("/login");
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Join AssetPro</h1>
        <p>
          Register as an admin or employee and manage company assets through a
          clean enterprise dashboard.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Create Account</h2>
          <p>Enter your details to continue</p>

          <form onSubmit={handleRegister}>
            <input name="name" placeholder="Full name" onChange={handleChange} />

            <select name="gender" onChange={handleChange}>
              <option value="">Select gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>

            <input name="email" placeholder="Email address" onChange={handleChange} />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              name="contactNo"
              placeholder="Contact number"
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
            ></textarea>

            <select name="role" value={form.role} onChange={handleChange}>
              <option value="EMPLOYEE">Employee</option>
              <option value="ADMIN">Admin</option>
            </select>

            <button type="submit">Create Account</button>
          </form>

          <p className="auth-link">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;