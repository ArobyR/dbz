import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

const Header = () => {
  const [isNavCollapsed, setisNavCollapsed] = useState(false);

  const history = useHistory()

  const handleLogout = () => {
    history.replace("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h2 className="navbar-brand">DBZ APP</h2>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          type="button"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          onClick={() => setisNavCollapsed(!isNavCollapsed)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="navbar-item">
              <NavLink to="/men" className="nav-link">
                Men
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/women" className="nav-link">
                Women
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/search" className="nav-link">
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
