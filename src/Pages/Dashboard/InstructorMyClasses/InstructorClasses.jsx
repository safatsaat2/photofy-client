import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const InstructorClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [classes, setClasses] = useState([])

    axiosSecure.get(`pending-classes/${user?.email}`)
        .then(res => setClasses(res.data))


    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Photo</th>
                            <th>Class Name</th>
                            <th>Available Seats</th>
                            <th>Enrolled Student</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((cls, index) => <tr key={cls._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">{cls.className}</p>
                            </td>
                            <td>
                                <p className="font-bold">{cls.seats}</p>
                            </td>
                            <td>
                                <p className="font-bold">{cls.student}</p>
                            </td>
                            <td>
                                <p className="font-bold">{cls.name}</p>
                            </td>
                            <td>
                                <p className="font-bold">{cls.email}</p>
                            </td>
                            <td>${cls.price}</td>
                            <th>
                               <p>{cls.status}</p>
                            </th>
                            <th>
                                <button  className="btn btn-ghost btn-xs">Update</button>
                            </th>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default InstructorClasses;