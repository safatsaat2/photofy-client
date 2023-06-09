import { FaPeopleCarry } from "react-icons/fa";

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/mCWDr1x/image.png" className="w-full  opacity-80 object-cover" />
                    <div className="absolute flex flex-col">
                        <h1 className="lg:text-5xl font-semibold w-1/2 my-16 mx-28"><span className="text-[#20A8CC]">Unleash the beauty </span> through the lens: Capturing lifes moments with passion.</h1>
                        <div className="lg:w-1/3 mx-28 grid grid-cols-2 gap-6">
                            <div className="bg-[#80d9f1] rounded-md">
                                <div className="px-5 py-2 text-center text-white">
                                    <p className="font-semibold"><FaPeopleCarry className="inline"></FaPeopleCarry> Students</p>
                                    <p className="font-semibold">100</p>
                                </div>
                            </div>
                            <div className="bg-[#80d9f1] rounded-sm">
                                <div className="px-5 py-2 text-center text-white">
                                    <p className="font-semibold"><FaPeopleCarry className="inline"></FaPeopleCarry> Intructors</p>
                                    <p className="font-semibold">10</p>
                                </div>
                            </div>
                            <div className="bg-[#80d9f1] rounded-sm">
                                <div className="px-5 py-2 text-center text-white">
                                    <p className="font-semibold"><FaPeopleCarry className="inline"></FaPeopleCarry> Scolarship</p>
                                    <p className="font-semibold">54</p>
                                </div>
                            </div>
                            <div className="bg-[#80d9f1] rounded-sm">
                                <div className="px-5 py-2 text-center text-white">
                                    <p className="font-semibold"><FaPeopleCarry className="inline"></FaPeopleCarry> Scolarship</p>
                                    <p className="font-semibold">54</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QvRnsqL/image.png" className="w-full opacity-90" />

                    <div className="absolute left-32 my-20">
                        <h1 className="text-6xl text-center font-semibold">Capturing Moments, Preserving Memories.</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9T7894R/image.png" className="w-full opacity-90" />
                    <div className="absolute my-20">
                        <h1 className="text-6xl text-white text-border text-center font-semibold">Capturing Life`s Beauty: Explore the World of Photography.</h1>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/B3FH2yc/image.png" className="w-full opacity-90" />
                    <div className="absolute my-20">
                        <h1 className="text-6xl text-white text-border text-center font-semibold">Through the Lens: Explore the Artistry of Photography</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;