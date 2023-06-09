import { BarLoader } from "react-spinner-animated";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "./InstructorCard";


const PopularInstrustors = () => {
    const [instructors, loading] = useInstructors()

    if (loading) {
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }


    return (
        <div>
            <div data-aos="zoom-in" data-aos-duration="10000">
                <h1 className="text-5xl text-center font-bold text-[#208ACC] mt-20 mb-10">Popular Instructors</h1>
            </div>

            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="lg:grid lg:mx-32 grid-cols-2 gap-10">
                    {instructors.map(instructor => <InstructorCard key={instructor._id} data={instructor}></InstructorCard>)}
                </div>
            </div>

        </div>
    );
};

export default PopularInstrustors;