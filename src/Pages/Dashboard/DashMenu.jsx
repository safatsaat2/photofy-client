import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { BarLoader } from "react-spinner-animated";

const DashMenu = () => {
    // const isAdmin = true;
    const isInstructor = false;

    const [isAdmin, isAdminLoading] = useAdmin()

    if(isAdminLoading){
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }

    return (
        <div className="w-1/4 h-screen bg-slate-700 text-white">
            {
                isAdmin ? <>
                <ul>
                    <li className="pt-10 px-10">Manage Classes</li>
                    <li className="pt-10 px-10">Manage Users</li>
                </ul>
                </>
                :
                isInstructor ? <>
                <ul>
                    <li className="pt-10 px-10">Add a Class</li>
                    <li className="pt-10 px-10">My Classes</li>
                </ul>
                </>
                : <>
                <ul>
                    <Link to='selected-classes'><li className="pt-10 px-10">My Selected Classes</li></Link>
                    <li className="pt-10 px-10">My Enrolled Classes</li>
                    <li className="pt-10 px-10">Payment History</li>
                </ul>
                
                </>
            }
        </div>
    );
};

export default DashMenu;