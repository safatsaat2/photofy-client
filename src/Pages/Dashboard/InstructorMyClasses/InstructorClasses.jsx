import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";

const InstructorClasses = () => {
    const token = localStorage.getItem("access-token")
    const { user } = useAuth()
    const [classes, setClasses] = useState([])

    axios.get(`https://photofy-server.vercel.app/pending-classes/${user?.email}`, {
        headers:{
            Authorization: `bearer ${token}`
        }
    })
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
                            <th>Update</th>
                            <th>FeedBack</th>
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
                                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">{cls.name}</p>
                            </td>
                            <td>
                                <p className="font-bold">{cls.seats}</p>
                            </td>
                            <td>
                                <p className="font-bold">{cls.student}</p>
                            </td>
                            <td>
                                <p className="font-bold">{cls.instructorName}</p>
                            </td>
                            <td>
                                <p className="font-bold">{cls.email}</p>
                            </td>
                            <td>${cls.price}</td>
                            <th>
                               <p>{cls.status}</p>
                            </th>
                            <th>
                                <Link to='update-class' state={cls._id}><button  className="btn btn-ghost btn-xs">Update</button></Link>
                            </th>
                            <th>
                                <p className="font-bold">{cls.feed}</p>
                            </th>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default InstructorClasses;