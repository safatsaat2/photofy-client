import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useStudent from "../../hooks/useStudent";
import useInstructor from "../../hooks/useInstructor";
import { FaAddressBook, FaClinicMedical, FaHeadSideMask, FaHistory, FaUser } from "react-icons/fa";

const DashMenu = () => {
    // const isAdmin = true;


    const [isAdmin, load] = useAdmin()
    const [isStudent,] = useStudent()
    const [isInstructor,] = useInstructor()


    if (load) {
        return <div>Loading....</div>
    }


    return (
        <div className="w-1/4 h-screen bg-slate-700 text-white">
            {
                isAdmin.admin === true ?
                    <>
                        <ul>
                            <Link className=" flex items-center" to='manage-classes'> <li className="pt-10 px-10">Manage Classes <FaClinicMedical></FaClinicMedical></li> </Link>
                            <Link className=" flex items-center" to='manage-users'><li className="pt-10 px-10">Manage Users <FaUser></FaUser></li> </Link>
                        </ul>
                    </>
                    :
                    isStudent.student === true ?
                        <>
                            <ul>
                                <Link className=" flex items-center" to='selected-classes'><li className="pt-10 px-10">My Selected Classes <FaClinicMedical></FaClinicMedical></li></Link>
                                <li className="pt-10 px-10">My Enrolled Classes <FaHeadSideMask></FaHeadSideMask></li>
                                <li className="pt-10 px-10">Payment History <FaHistory></FaHistory></li>
                            </ul>
                        </>
                        :
                        isInstructor.instructor === true ?
                            <>
                                <ul>
                                    <Link className=" flex items-center" to='addaclass'><li className="pt-10 px-10">Add a Class <FaAddressBook></FaAddressBook> </li></Link>
                                    <Link className=" flex items-center" to='instructor-classes'><li className="pt-10 px-10">My Classes <FaClinicMedical></FaClinicMedical></li></Link>
                                </ul>

                            </>
                            :
                            <></>
            }
        </div>
    );
};

export default DashMenu;