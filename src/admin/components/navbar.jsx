import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand bg-light navbar-light sticky px-4 ">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
            </a>
            <a href="#" className="sidebar-toggler flex-shrink-0">
                <i className="fa fa-bars"></i>
            </a>
            <form className="d-none d-md-flex ms-4">
                <input className="form-control border-0" type="search" placeholder="Search" />
            </form>

            <div className="nav-item dropdown ms-auto">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <img className="rounded-circle me-lg-2" src="../../assets/img/user.jpg" alt="User" style={{ width: 40, height: 40 }} />
                    <span className="d-none d-lg-inline-flex">John Doe</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                    <a href="#" className="dropdown-item">My Profile</a>
                    <a href="#" className="dropdown-item">Settings</a>
                    <a href="#" className="dropdown-item">Log Out</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
