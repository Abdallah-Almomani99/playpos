import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="tabs">
            {["normal", "snooker", "regular"].map((tab) => (
                <div
                    key={tab}
                    className={`tab ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab === "normal" ? "Billiardo Normal" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
