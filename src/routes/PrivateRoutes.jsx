import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { BarLoader } from "react-spinner-animated";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)


    if (loading) {
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }
    if(user){
        return children;
    }

    return  <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;