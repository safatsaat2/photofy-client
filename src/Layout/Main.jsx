import { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    const [dark, setDark] = useState(false)
    return (
        <div className={dark? 'bg-slate-900': ''}>
            <button className="absolute text-center" onClick={()=>setDark(!dark)}>dakr</button>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;