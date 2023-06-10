import { Outlet } from "react-router-dom";
import DashMenu from "../Pages/Dashboard/DashMenu";

const Dashboard = () => {
    return (
        <div className="flex">
            <DashMenu></DashMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;