import React from "react";
import { Link } from "react-router-dom"; // React Router
import logo from "../images/logo.png";
import profileImg from "../images/profile-img.jpg"; // Profile image
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
import '../scripts/default.js'; // Import JS functionality

const Header = () => {

  const toggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <header className="header d-flex align-items-center justify-content-between fixed-top px-3">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="Logo" />
          <span className="d-none d-lg-block">NiceAdmin</span>
        </Link>
        <i className="bi bi-list toggle-sidebar-btn ms-5" onClick={toggleSidebar}></i>
      </div>

      <ul className="d-flex align-items-center mb-0">
        {/* Profile Dropdown */}
        <li className="nav-item dropdown pe-3">
          <a
            className="nav-link nav-profile d-flex align-items-center pe-0"
            href="#"
            data-bs-toggle="dropdown"
          >
            <img src={profileImg} alt="Profile" className="rounded-circle w-25" />
            <span className="d-none d-md-block dropdown-toggle ps-2">
              K. Anderson
            </span>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header text-center">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="/users-profile"
              >
                <i className="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="/account-settings"
              >
                <i className="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="/help"
              >
                <i className="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="/logout"
              >
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
