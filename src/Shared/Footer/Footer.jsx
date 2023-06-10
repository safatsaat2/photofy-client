import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/Provider/AuthProvider";

const Footer = () => {
    const { user } = useContext(AuthContext)
    return (
        <footer className="footer bg-blue-50 pl-10 py-10">
            <img src="https://i.ibb.co/sbmVhc6/Frame-6.png" alt="" />
            <div className="grid grid-flow-col gap-x-4">
                <ul className="menu">
                    {user ?
                        <>
                            <Link to='/'><li className="my-2 font-medium hover:text-[#20A8CC]">Home</li></Link>
                            <Link to='/instructor'><li className="my-2 font-medium hover:text-[#20A8CC]">Instructors</li></Link>
                            <Link to='/classes'><li className="my-2 font-medium hover:text-[#20A8CC]">Classes</li></Link>
                            <Link to='/'><li className="my-2 font-medium hover:text-[#20A8CC]">Dashboard</li></Link></>
                        :
                        <>
                            <Link to='/'><li className="my-2 font-medium hover:text-[#20A8CC]">Home</li></Link>
                            <Link to='/instructor'><li className="my-2 font-medium hover:text-[#20A8CC]">Instructors</li></Link>
                            <Link to='/classes'><li className="my-2 font-medium hover:text-[#20A8CC]">Classes</li></Link>
                        </>}
                </ul>
            </div>

            <div>
                <ul className="menu">
                    <li className="mx-2  hover:text-[#20A8CC] font-medium"><Link to={'/'}>Privacy</Link></li>
                    <li className="mx-2  hover:text-[#20A8CC] font-medium"><Link to={'/alltoys'}>Terms & Condition</Link></li>
                    <li className="mx-2  hover:text-[#20A8CC] font-medium"><Link to={'/blogs'}>Contact us</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span className="bg-[#20A8CC] text-white  font-semibold">Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>
                <Link to='/signup'><div className="bg-[#20A8CC] px-8 py-2 text-white rounded-md cursor-pointer">
                    Sign Up
                </div></Link>
                <p>Copyright © 2023 - All right reserved by PhotoFY</p>
            </div>
        </footer>
    );
};

export default Footer;