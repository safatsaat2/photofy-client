import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const DashHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="flex justify-center items-center w-full">
           <p className="w-full text-center text-7xl"> Welcome {user?.displayName},</p>
        </div>
    );
};

export default DashHome;