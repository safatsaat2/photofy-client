
const ClassesPageCard = ({data}) => {
    console.log(data)
    return (
        <div className="card w-80 h-[700px] bg-blue-50 shadow-xl">
            <figure><img className="w-full h-[400px]" src={data.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p className="font-medium">Instructor Name: {data.instructorName}</p>
                <p className="font-medium">Available Seats: {data.seats}</p>
                <p className="font-medium">Students: {data.student}</p>
                <p className="font-medium">Price: ${data.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#20A8CC] hover:bg-[#20A8CC] border-none text-white">Select this Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesPageCard;