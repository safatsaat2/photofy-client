import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdateAClass = () => {

    const location = useLocation()
    const id = location.state;
    console.log(id)

    const token = localStorage.getItem("access-token")

    const {data: clas = [],} = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
         const res = await fetch(`http://localhost:5000/classes/${id}`, {headers:{
            authorization : `bearer ${token}`
         }});
        return res.json();
        }
    })
    console.log(clas)






    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()
    const { register, handleSubmit,  } = useForm();
    const onSubmit = data => {
        const className = data.className;
        const classImage = data.classImage;
        const name = data.name;
        const email = data.email;
        const seats = data.seats;
        const price = data.price;

        const info = {name: className ,image: classImage,instructorName: name, email, seats: parseFloat(seats), price: parseFloat(price), status: 'pending', student: 0}

        axiosSecure.patch(`pending-classes/edit/${id}`, info)
        .then(res => {
            if(res.data){
                Swal.fire(
                    'Updated',
                    'success'
                  )
            }
        })   
    };




    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body grid grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" defaultValue={clas.name} placeholder="Class Name" {...register("className")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" defaultValue={clas.image} placeholder="Class Image" {...register("classImage")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly placeholder="Class Image" {...register("name")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} readOnly placeholder="Class Image" {...register("email")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" defaultValue={clas.seats} placeholder="Available Seats" {...register("seats")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={clas.price} placeholder="Price" {...register("price")} className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6 col-span-2">
                        <input className="bg-[#20A8CC] text-white py-2 px-3 rounded-md cursor-pointer" type="submit" value="Update Class" />
                    </div>


                </div>
            </form>
        </div>
    );
};

export default UpdateAClass;