import { BarLoader } from "react-spinner-animated";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "./InstructorCard";
import { Fade } from "react-awesome-reveal";

const InstructorPage = () => {
    const [instructors, loading] = useInstructors()

    if (loading) {
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }
    return (
        <Fade>
            <div>
                <p className="text-lg text-center my-10 mx-auto lg:w-1/2 font-medium">Ignite your photography passion with confidence as our exceptional course brings together a community of caring instructors who are renowned experts in their field, ensuring an unparalleled learning experience for our students.</p>
                <h1 className="text-5xl text-center font-bold text-[#208ACC] mt-10 mb-10">Our Instructors</h1>
                <div className="lg:grid lg:mx-32 grid-cols-2 gap-10">
                    {instructors.map(instructor => <InstructorCard key={instructor._id} data={instructor}></InstructorCard>)}
                </div>
            </div>
        </Fade>
    );
};

export default InstructorPage;