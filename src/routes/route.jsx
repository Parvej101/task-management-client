import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";



const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Dashboard /> }, // Default page is Dashboard
            { path: "/login", element: <LoginPage/> }, // Explicit login route
            // { path: "*", element: <NotFound /> }, // Handles 404 errors
        ],
    },
]);

export default route;