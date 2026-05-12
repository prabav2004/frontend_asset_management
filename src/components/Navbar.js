import { useNavigate } from "react-router-dom";
import { logout, getName, getRole } from "../utils/authStorage";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="navbar">
      <h2>Company Asset Management</h2>

      <div className="nav-right">
        <span>{getName()}</span>
        <span className="role-badge">{getRole()}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;