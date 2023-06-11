import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ClassesPageCard = ({ data }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate(null);
    const [axiosSecure] = useAxiosSecure();
    console.log(data)

    const handleSelection = () => {
        const img = data.image;
        const name = data.name;
        const instructorName = data.instructorName;
        const price = data.price;
        const seats = data.seats;
        const items = {img, name, instructorName, price, seats, email: user?.email}
        if (user) {
            axiosSecure.post('/selected-classes', items)
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
        else {
            Swal.fire({
                title: 'You have to Log in to select this',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }



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
                    <button onClick={handleSelection} className={data.seats === 0? "btn btn-disabled border-none text-white" : "btn bg-[#20A8CC] hover:bg-[#20A8CC] border-none text-white"}>Select this Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesPageCard;