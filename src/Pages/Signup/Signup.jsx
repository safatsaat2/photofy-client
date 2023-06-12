import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'




const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, userProfileUpdate} = useContext(AuthContext)
    const [err, setErr] = useState(false)
    const navigate = useNavigate()


    const onSubmit = data => {
       const name = data.name;
       const email = data.email;
       const photo = data.photo;
       const password = data.password;
       const conPass = data.conPass;
       const role ="student"
        if(password === conPass){
            createUser(email, password)
            .then(()=>{
                userProfileUpdate(name, photo)
                .then(
                    ()=>{
                        const user ={name, email, role, photo}
                        fetch('https://photofy-server.vercel.app/users', {
                            method: "POST",
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                        .then(res => res.json())
                        .then(
                            data => {
                                if(data.insertedId){
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Thank you for Sign up',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            }
                        )
                    }
                )
                .catch(error => console.log(error))
            })
            .catch(error => {
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'warning',
                //     title: {error.message},
                //     showConfirmButton: false,
                //     timer: 1500
                // })
                console.log("what", error.message)
                alert(error.message)
            })
        }
        else{
            setErr(true)
        }

    };

    return (
        <div>
            <div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-x-20">
                    <div className=" lg:text-left">
                        <img src="https://i.ibb.co/DwGpKpj/Frame-6-1.png" alt="" />
                        <h1 className="pt-6 text-4xl font-bold">Please Sign up!!</h1>
                        <p className="py-6">Unlock Your Visual Potential with PHOTOFY</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} placeholder="Your Photo" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one Uppercase and one special character.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("conPass", { required: true })} placeholder="password" className="input input-bordered" />
                                    {errors.conPass && <span className="text-red-500">Type the password again</span>}
                                    {err ? <p className="text-red-500">Type same Password</p> : " "}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#20A8CC] text-white hover:bg-[#20A8CC]" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='font-medium pt-2 px-3'>Already have an account on PHOTOFY? <Link to='/login' className='text-[#20A8CC] font-bold'>Sign in</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;