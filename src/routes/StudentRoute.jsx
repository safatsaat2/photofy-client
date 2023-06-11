import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isStudent, load] = useStudent();
    const location = useLocation();

    if(loading || load){
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent.student=== true) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;