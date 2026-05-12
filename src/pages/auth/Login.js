import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveUser } from "../../utils/authStorage";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    saveUser(user);

    if (user.role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/employee/dashboard");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>AssetPro</h1>
        <p>
          A professional company asset management platform to track assets,
          employee requests, service tickets, audits and allocations.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Login</h2>
          <p>Access your company dashboard</p>

          <form onSubmit={handleLogin}>
            <input name="email" placeholder="Email address" onChange={handleChange} />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button type="submit">Login</button>
          </form>

          <p className="auth-link">
            New user? <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;