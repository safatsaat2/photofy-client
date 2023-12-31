// import axios from "axios";
import useAuth from "../../../hooks/useAuth";
// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClasses = () => {
    const { user } = useAuth()
    // const [classes, setClasses] = useState([])
    const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure()


    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
            const res = await fetch(`https://photofy-server.vercel.app/pending-classes/pending/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        }
    })
    console.log(classes)

    // Approve 
    const handleApprove = (cls) => {
        axiosSecure.patch(`pending-classes/${cls._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    axiosSecure.post(`/classes/${cls._id}`)
                        .then(res => {
                            const data = res.data
                            console.log(data)
                            if (res.data.insertedId) {
                                Swal.fire(
                                    'Approved',

                                    'success'
                                )
                                refetch()
                            }
                        })
                }
            })

    }
    // denied

    const handleDeny = id =>{
        axiosSecure.patch(`/feedback/${id}`,)
        .then(res => {
            if (res.data.modifiedCount) {
                Swal.fire(
                    'You denied',
                    'success'
                )
                refetch()
            }
        })
    }


    // axios.get(`https://photofy-server.vercel.app/pending-classes/pending/${user?.email}`, {
    //     headers: {
    //         Authorization: `bearer ${token}`
    //     }
    // })
    //     .then(res => {
    //         setClasses(res.data)})

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
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>
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
                                {
                                    cls.status === "denied"
                                        ?
                                        <button disabled='disabled'>Approved</button>
                                        :
                                        <button onClick={() => handleApprove(cls)} className="btn bg-[#20A8CC]">Approve</button>
                                }
                            </th>
                            <th>
                                {
                                    cls.status === "denied"
                                        ?
                                        <button disabled='disabled'>Deny</button>
                                        :
                                        <button onClick={()=>handleDeny(cls._id)} className="btn bg-[#20A8CC]">Deny</button>
                                }

                            </th>
                            <th>
                                {
                                    cls.status === "denied"
                                        ?
                                        <button disabled='disabled'>Feedback</button>
                                        :
                                        <Link to='feedback' state={cls._id}><button className="btn bg-[#20A8CC]">Feedback</button></Link>
                                }

                            </th>
                        </tr>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;