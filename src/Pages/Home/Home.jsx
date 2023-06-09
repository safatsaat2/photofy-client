import TopClassSection from "../Class/TopClassSection";
import PopularInstrustors from "../Instructor/PopularInstrustors";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <TopClassSection></TopClassSection>
            <PopularInstrustors></PopularInstrustors>
        </div>
    );
};

export default Home;