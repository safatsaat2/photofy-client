import { BarLoader } from "react-spinner-animated";
import useClasses from "../../hooks/useClasses";
import ClassCard from "./ClassCard";

const TopClassSection = () => {
    const [classes, loading] = useClasses()

    if (loading) {
        return <div className="flex justify-center">
            <BarLoader text={"Please Wait..."} />
        </div>
    }
    return (
        <div>
            <div data-aos="zoom-in" data-aos-duration="10000">
                <h1 className="text-5xl text-center font-bold text-[#208ACC] mt-20 mb-10">Popular Classes</h1>
            </div>

            <div className="lg:grid lg:mx-10 grid-cols-3 gap-10">
                {classes.slice(0, 6).map(cls => <ClassCard key={cls._id} classes={cls}></ClassCard>)}
            </div>
        </div>
    );
};

export default TopClassSection;