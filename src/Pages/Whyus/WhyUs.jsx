import { FaPeopleCarry } from "react-icons/fa";
import useInstructors from "../../hooks/useInstructors";
import useClasses from "../../hooks/useClasses";
import { Link } from "react-router-dom";

const WhyUs = () => {
    const [instructors] = useInstructors()
    const [classes] = useClasses()
    return (
        <div className="mt-32 lg:flex">
                <div className="relative w-1/2">
                    <img className="rounded-br-lg rounded-tr-lg" src="https://i.ibb.co/WkhYdpx/image.png" alt="" />
                    <div className="bg-[#80d9f1] rounded-md drop-shadow-2xl absolute top-20 -right-10">
                        <div className="px-5 py-2 text-center text-white">
                            <p className="font-semibold"><FaPeopleCarry className="inline"></FaPeopleCarry> Intructors</p>
                            <p className="font-semibold">{instructors.length}</p>
                        </div>
                    </div>
                    <div className="bg-[#80d9f1] rounded-md drop-shadow-2xl absolute bottom-32 -right-6">
                        <div className="px-5 py-2 text-center text-white">
                            <p className="font-semibold"><FaPeopleCarry className="inline"></FaPeopleCarry> classes</p>
                            <p className="font-semibold">{classes.length}</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-1/2 flex flex-col items-center">
                    <h1 className="text-5xl text-center font-bold text-[#208ACC] mt-20 mb-10">Why Us</h1>
                    <p className="mx-10 mb-5">People should join this photography course for the opportunity to acquire valuable skills and knowledge, engage in practical hands-on learning, be part of a supportive community, explore their creativity, and access additional perks and opportunities.</p>
                    <Link to='/classes' className="btn text-white hover:bg-[#20A8CC] bg-[#20A8CC]">See All Classes</Link>
                </div>

        </div>
    );
};

export default WhyUs;