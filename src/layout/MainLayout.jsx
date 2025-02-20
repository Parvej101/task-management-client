import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;