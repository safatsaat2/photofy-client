import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { BarLoader } from "react-spinner-animated";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)

    console.log("loading", loading)

    const location = useLocation();


    if (loading) {
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }
    if(user?.email){
        return children;
    }

    return  <Navigate to="/login" state={{from: location}} replace>
    </Navigate>;
};

export default PrivateRoute;