import { Fade } from "react-awesome-reveal";

const NotFound = () => {
    return (
        <Fade>
            <div className="flex flex-col justify-center items-center">
            <img className="w-1/3" src="https://i.ibb.co/YWwDsZ4/cuate.png" alt="" />
            <h1 className="text-9xl text-[#20A8CC]">404</h1>
            </div>
        </Fade>
    );
};

export default NotFound;