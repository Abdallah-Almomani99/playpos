import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/App";
import TableLayout from "./admin/BilliardsTablePage.jsx";
import UsersLayout from "./admin/UsersPage.jsx";
import DrinksLayout from "./admin/DrinksPage.jsx";
import UserLayout from "./users/index.jsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* مسار لوحة التحكم الخاصة بالمشرف */}
                <Route path="/admin/*" element={<AdminLayout />} />
                <Route path="/admin/dashboard" element={<AdminLayout />} />
                <Route path="/admin/users" element={<UsersLayout />} />
                <Route path="/admin/tables" element={<TableLayout />} />
                <Route path="/admin/drinks" element={<DrinksLayout />} />

                {/* مسار صفحة المستخدم */}
                <Route path="/*" element={<UserLayout />} />
                <Route path="/user" element={<UserLayout />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
