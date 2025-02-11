import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Content from "./components/content";

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState([false]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app-container">
            <div className="main-content">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <div className={`content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
                    <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default App;