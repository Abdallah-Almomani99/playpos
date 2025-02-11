import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <nav className="navbar navbar-expand bg-light navbar-light sticky px-4">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
            </a>
            <a href="#" className="sidebar-toggler flex-shrink-0" onClick={(e) => {
                e.preventDefault(); // لمنع السلوك الافتراضي للرابط
                toggleSidebar();
            }}>
                <i className="fa fa-bars"></i>
            </a>

            <div className="nav-item dropdown ms-auto">
                <button className="nav-link dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="rounded-circle me-lg-2" src="/public/user.jpg" alt="User" style={{ width: 40, height: 40 }} />
                    <span className="d-none d-lg-inline-flex">John Doe</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0" aria-labelledby="userDropdown">
                    <li><a href="#" className="dropdown-item">My Profile</a></li>
                    <li><a href="#" className="dropdown-item">Settings</a></li>
                    <li><a href="#" className="dropdown-item">Log Out</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;