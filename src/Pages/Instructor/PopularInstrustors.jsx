import { BarLoader } from "react-spinner-animated";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "./InstructorCard";
import { Link } from "react-router-dom";


const PopularInstrustors = () => {
    const [instructors, loading] = useInstructors()

    if (loading) {
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }


    return (
        <div className="mt-32">
                <h1 className="text-5xl text-center font-bold text-[#208ACC] mt-20 mb-10">Popular Instructors</h1>

                <div className="lg:grid lg:mx-32 grid-cols-2 gap-10">
                    {instructors.slice(0, 6).map(instructor => <InstructorCard key={instructor._id} data={instructor}><Link to='/instructor' className="btn bg-[#20A8CC] hover:bg-[#20A8CC] text-white">See All instructors</Link></InstructorCard>)}
                </div>

        </div>
    );
};

export default PopularInstrustors;