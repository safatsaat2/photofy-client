import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useStudent from "../../hooks/useStudent";
import useInstructors from "../../hooks/useInstructors";

const DashMenu = () => {
    // const isAdmin = true;


    const [isAdmin, load] = useAdmin()
    const [isStudent, ] = useStudent()
    const [isInstructor,] = useInstructors()


    if(load){
        return <div>Loading....</div>
    }


    return (
        <div className="w-1/4 h-screen bg-slate-700 text-white">
            {
                isAdmin ? 
                <>
                    <ul>
                        <li className="pt-10 px-10">Manage Classes</li>
                        <Link to='manage-users'><li className="pt-10 px-10">Manage Users</li></Link>
                    </ul>
                </>
                    :
                    isStudent ? 
                    <>
                        <ul>
                            <Link to='selected-classes'><li className="pt-10 px-10">My Selected Classes</li></Link>
                            <li className="pt-10 px-10">My Enrolled Classes</li>
                            <li className="pt-10 px-10">Payment History</li>
                        </ul>
                    </>
                    :
                       isInstructor ? 
                        <>
                            <ul>
                                <li className="pt-10 px-10">Add a Class</li>
                                <li className="pt-10 px-10">My Classes</li>
                            </ul>

                        </>
                        :
                        <></>
            }
        </div>
    );
};

export default DashMenu;