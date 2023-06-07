
import { Link } from 'react-router-dom';
const Login = () => {
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#20A8CC] text-white hover:bg-[#20A8CC]">Login</button>
                            </div>
                            <p className='font-medium pt-2 px-3'>New to PHOTOFY? <Link to='/signup' className='text-[#20A8CC] font-bold'>Sign up</Link></p>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;