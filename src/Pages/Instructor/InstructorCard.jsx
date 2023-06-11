import useUsers from "../../hooks/useUsers";


const InstructorCard = ({ data, children }) => {
    const [users] = useUsers()
    console.log(users)
    return (
        
            <div className="card lg:h-[300px] card-side items-center bg-blue-50 shadow-xl">
                <figure><img className="w-[200px] h-[300px]" src={data.photo} alt="Movie" /></figure>
                <div className="card-body">
                    <div className="my-8">
                        <h2 className="card-title font-semibold">{data.name}</h2>
                        <p className=""> {data.email}</p>
                    </div>
                    {children}
                </div>
            </div>

    );
};

export default InstructorCard;