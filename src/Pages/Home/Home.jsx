import TopClassSection from "../Class/TopClassSection";
import PopularInstrustors from "../Instructor/PopularInstrustors";
import Slider from "../Slider/Slider";
import WhyUs from "../Whyus/WhyUs";

const Home = () => {
    return (
        <div >
            
            <Slider></Slider>
            <TopClassSection></TopClassSection>
            <PopularInstrustors></PopularInstrustors>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;