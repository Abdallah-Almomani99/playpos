import React from "react";
import { Routes, Route } from "react-router-dom";  // لا داعي لـ Router هنا
import App from "../App";  // استيراد صفحة المستخدم (App)

const UserLayout = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    );
};

export default UserLayout;
