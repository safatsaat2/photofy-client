import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAClass = () => {
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

        axiosSecure.post('pending-classes', info)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire('Your Class is in pending')
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
                        <input type="text" placeholder="Class Name" {...register("className")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" placeholder="Class Image" {...register("classImage")} className="input input-bordered" />
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
                        <input type="text" placeholder="Available Seats" {...register("seats")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" {...register("price")} className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6 col-span-2">
                        <input className="bg-[#20A8CC] text-white py-2 px-3 rounded-md cursor-pointer" type="submit" value="Add A Class" />
                    </div>


                </div>
            </form>
        </div>
    );
};

export default AddAClass;