import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './../../Pages/Provider/AuthProvider';
import Swal from "sweetalert2";
const Navbar = () => {

    const logo = "https://i.ibb.co/sbmVhc6/Frame-6.png";
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogOut = () =>{
        logOut()
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Come Again',
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

    const navItems = <>
        {user ?
            <>
                <Link to='/'><li className="px-5 font-medium hover:text-[#20A8CC]">Home</li></Link>
                <Link to='/instructor'><li className="px-5 font-medium hover:text-[#20A8CC]">Instructors</li></Link>
                <Link to='/classes'><li className="px-5 font-medium hover:text-[#20A8CC]">Classes</li></Link>
                <Link to='/'><li className="px-5 font-medium hover:text-[#20A8CC]">Dashboard</li></Link></>
            :
            <>
                <Link to='/'><li className="px-5 font-medium hover:text-[#20A8CC]">Home</li></Link>
                <Link to='/instructor'><li className="px-5 font-medium hover:text-[#20A8CC]">Instructors</li></Link>
                <Link to='/classes'><li className="px-5 font-medium hover:text-[#20A8CC]">Classes</li></Link>
            </>
        }
    </>

    const button = <>

        {
            user ?
                <>
                    <img className="w-10 h-10 rounded-full mr-2" src={user?.photoURL} alt="" />
                    <button onClick={handleLogOut} className="btn bg-[#20A8CC] hover:bg-[#20A8CC] text-white">Log Out</button>
                </>
                :
                <>
                    <Link to='login'><button className="btn bg-[#20A8CC] hover:bg-[#20A8CC] text-white">Sign In</button></Link>
                    <Link to='signup'><button className="btn bg-[#20A8CC] hover:bg-[#20A8CC] text-white">Sign Up</button></Link>
                </>        
    }


    </>
    return (
        <>
            <div className="navbar bg-blue-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link><img className="w-3/4" src={logo} alt="LOGO" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {button}
                </div>
            </div>
        </>
    );
};

export default Navbar;