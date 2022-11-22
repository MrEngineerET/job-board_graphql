import { Link } from "react-router-dom";
import { logout } from "../auth";
import propTypes from "prop-types";

function NavBar({ loggedIn, onLogout }) {
  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        {loggedIn ? (
          <>
            <Link className="navbar-item" to="/jobs/new">
              Post Job
            </Link>
            <a className="navbar-item" onClick={handleLogout}>
              Logout
            </a>
          </>
        ) : (
          <Link className="navbar-item" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  onLogout: propTypes.func,
  loggedIn: propTypes.bool,
};

export default NavBar;
