import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [users, refetch] = useUsers()
    const [axiosSecure] = useAxiosSecure()
    // const config = {
        
    //         headers: {authorization:`bearer ${token}`}
        
    //     }

    const handleAdmin = (user) =>{
        axiosSecure.patch(`http://localhost:5000/users/admin/${user._id}`)
        .then(res => console.log(res)
            // {
            //     console.log("res", res);
            //     if(res){
            //         Swal.fire(
            //             'Made successfully',
            //             'Admin Now',
            //             'success'
            //           );
            //           refetch();
            //     }
            // }
            
            )
    }
    const handleInstructor = (user) =>{
        axiosSecure.patch(`http://localhost:5000/users/instructor/${user._id}`)
        .then(res => 
            {
                if(res === undefined){
                    Swal.fire(
                        'Made successfully',
                        'Admin Now',
                        'success'
                      );
                      refetch();
                }
            }
            
            )
    }




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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="font-bold">{user.name}</p>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.role}
                            </td>
                            <th>
                                {
                                    user.role === "instructor" 
                                    ?
                                    <button disabled="disabled">instructor</button>
                                    :
                                    <button onClick={()=>handleInstructor(user)} className="btn bg-[#20A8CC]" >Make Instructor</button>
    
                                }
                                
                            </th>
                            <th>
                            {
                                user.role === "admin"
                                ?
                                <button disabled="disabled">Admin</button>:
                                <button onClick={()=>handleAdmin(user)} className="btn bg-[#20A8CC]" >Make Admin</button>

                                }
                            </th>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;