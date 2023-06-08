import { FaPeopleCarry } from "react-icons/fa";

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/mCWDr1x/image.png" className="w-full" />
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
                    <img src="https://i.ibb.co/QvRnsqL/image.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
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