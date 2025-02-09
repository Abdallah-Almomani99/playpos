import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Content from "./components/content";
import BackToTop from "./components/backToTop";

const App = () => {
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
            <Sidebar />
            <div className="content">
                <Navbar />
                <Content />
                <BackToTop />
            </div>
        </div>
    );
};

export default App;
