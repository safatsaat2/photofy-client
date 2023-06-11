import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSelectedClasses from "../../hooks/useAxiosSelectedClasses";
import { BarLoader } from 'react-spinner-animated';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import Swal from "sweetalert2";

const SelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    console.log(email)

    const [axiosSecure] = useAxiosSecure()
    const [classes, loading, refetch] = useAxiosSelectedClasses(email)

    const handleDelete = (cls) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`http://localhost:5000/selected-classes/${cls._id}`)
                .then(res => {
                    const deleted = res;
                    console.log(res)
                    if(deleted === undefined){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        refetch()
                    }
                })
              
            }
          })
       
    }

    if (loading) {
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }
    console.log(classes)
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
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Payment</th>
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
                                            <img src={cls.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">{cls.name}</p>
                            </td>
                            <td>${cls.price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Pay</button>
                            </th>
                            <th>
                                <button onClick={() => handleDelete(cls)} className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;