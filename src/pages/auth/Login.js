import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import { saveLoginData } from "../../utils/authStorage";

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

    loginUser(form)
      .then((res) => {
        saveLoginData(res.data);

        if (res.data.role === "ADMIN") {
          navigate("/admin/dashboard");
        } else {
          navigate("/employee/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid email or password");
      });
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>

        <p className="auth-link">
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;