import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = data => {
        const email = data.email;
        const pass = data.password;
        signIn(email, pass)
            .then(() => {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thank You for Log In',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(err => {
                console.log("what", err.message)
                alert(err.message)
            })
    };

    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thank You for Log In',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
            )
            .catch(err => {
                console.log("what", err.message)
                alert(err.message)
            })
    }


    return (
        <div>
            <div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-x-20">
                    <div className=" lg:text-left">
                        <img src="https://i.ibb.co/DwGpKpj/Frame-6-1.png" alt="" />
                        <h1 className="pt-6 text-4xl font-bold">Please Login!!</h1>
                        <p className="py-6">Unlock Your Visual Potential with PHOTOFY</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                    {errors.password && <span className="text-red-500">Password is must</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#20A8CC] text-white hover:bg-[#20A8CC]" type="submit" value="Log in" />
                                </div>
                            </form>
                            <button onClick={handleGoogle} className="btn bg-[#20A8CC] text-white hover:bg-[#20A8CC]"> <FaGoogle /> Sign in with Google</button>
                            <p className='font-medium pt-2 px-3'>New to PHOTOFY? <Link to='/signup' className='text-[#20A8CC] font-bold'>Sign up</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;