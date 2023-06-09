
const InstructorCard = ({ data }) => {

    return (
        
            <div className="card lg:h-[300px] card-side items-center bg-blue-50 shadow-xl">
                <figure><img className="w-[200px] h-[300px]" src={data.photo} alt="Movie" /></figure>
                <div className="card-body">
                    <div className="my-8">
                        <h2 className="card-title font-semibold">{data.name}</h2>
                        <p className=""> {data.email}</p>
                    </div>

                    <button className="btn bg-[#20A8CC] hover:bg-[#20A8CC] text-white">See All instructors</button>
                </div>
            </div>

    );
};

export default InstructorCard;