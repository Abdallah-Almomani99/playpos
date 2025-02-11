import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/App";
import TableLayout from "./admin/BilliardsTablePage.jsx";
import UsersLayout from "./admin/UsersPage.jsx";
import OrdersLayout from "./admin/OrdersPage.jsx";
import DrinksLayout from "./admin/DrinksPage.jsx";
import UserLayout from "./users/index.jsx";
import SignIn from "./admin/SignIn.jsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>

                <Route path="/admin/*" element={<AdminLayout />} />
                <Route path="/admin/dashboard" element={<AdminLayout />} />
                <Route path="/admin/users" element={<UsersLayout />} />
                <Route path="/admin/tables" element={<TableLayout />} />
                <Route path="/admin/drinks" element={<DrinksLayout />} />
                <Route path="/admin/orders" element={<OrdersLayout />} />


                <Route path="/signin" element={<SignIn />} />
                <Route path="/user" element={<UserLayout />} />
                <Route path="/*" element={<UserLayout />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
