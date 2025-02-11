import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
    return (
        <div className={`sidebar pb-3 ${isSidebarOpen ? "" : "d-none"}`}>
            <nav className="navbar bg-light navbar-light">
                <a href="/" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary">
                        <i className="fa fa-hashtag me-2"></i>DASHMIN
                    </h3>
                </a>
                <div className="navbar-nav w-100">
                    <Link to="/admin" className="nav-item nav-link">
                        <i className="fa fa-tachometer-alt me-2"></i> Dashboard
                    </Link>
                    <Link to="/admin/users" className="nav-item nav-link">
                        <i className="fa fa-users me-2"></i> Users
                    </Link>
                    <Link to="/admin/tables" className="nav-item nav-link">
                        <i className="fa fa-table me-2"></i> Billiards Table
                    </Link>
                    <Link to="/admin/drinks" className="nav-item nav-link">
                        <i className="fa fa-coffee me-2"></i> Drinks
                    </Link>
                    <Link to="/admin/orders" className="nav-item nav-link">
                        <i className="fa fa-shopping-cart me-2"></i> Orders
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;