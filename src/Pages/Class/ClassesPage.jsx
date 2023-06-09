import { BarLoader } from "react-spinner-animated";
import useClasses from "../../hooks/useClasses";
import ClassesPageCard from "./ClassesPageCard";

const ClassesPage = () => {
    const [classes, loading] = useClasses()

    if (loading) {
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }
    return (
        <div>
            <p className="text-lg text-center my-10 mx-auto lg:w-1/2 font-medium">Immerse yourself in a world of unparalleled education as we strive to deliver exceptional quality in every aspect of our photography courses, empowering students to unleash their creativity and reach new heights in their artistic journey.</p>
            <h1 className="text-5xl text-center font-bold text-[#208ACC] mt-10 mb-10">Our All Classes</h1>
            <div className="lg:grid lg:mx-32 grid-cols-3 gap-10">
                {classes.map(cls => <ClassesPageCard key={cls._id} data={cls}></ClassesPageCard>)}
            </div>
        </div>
    );
};

export default ClassesPage;