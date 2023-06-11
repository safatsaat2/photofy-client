import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useStudent from "../../hooks/useStudent";

const DashMenu = () => {
    // const isAdmin = true;


    const [isAdmin,] = useAdmin()
    const [isStudent,] = useStudent()


    return (
        <div className="w-1/4 h-screen bg-slate-700 text-white">
            {
                isAdmin.admin === true ? <>
                    <ul>
                        <li className="pt-10 px-10">Manage Classes</li>
                        <li className="pt-10 px-10">Manage Users</li>
                    </ul>
                </>
                    :
                    isStudent.student === true ? <>
                        <ul>
                            <Link to='selected-classes'><li className="pt-10 px-10">My Selected Classes</li></Link>
                            <li className="pt-10 px-10">My Enrolled Classes</li>
                            <li className="pt-10 px-10">Payment History</li>
                        </ul>
                    </>
                        : <>
                            <ul>
                                <li className="pt-10 px-10">Add a Class</li>
                                <li className="pt-10 px-10">My Classes</li>
                            </ul>

                        </>
            }
        </div>
    );
};

export default DashMenu;