import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Feedback = () => {
    const location = useLocation();
    const id = location.state;
    const [axiosSecure] = useAxiosSecure()
    const navigate = useNavigate()

    const handleFeedback= event =>{
        event.preventDefault()
        const feedback = event.target.feedback.value;
        const info ={feedback}
        axiosSecure.patch(`/feedback/${id}`, info)
        .then(res=> {if(res.data.modifiedCount){
            Swal.fire(
                'Feedback Given',
                'success'
              )
              navigate('/')
        }})
    }
    return (
        <div className="w-full">
            <form onSubmit={handleFeedback}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Feedback</span>
                    </label>
                    <input type="text" name="feedback" placeholder="Feedback" className="input input-bordered" />
                </div>
                <div className="form-control mt-6 col-span-2">
                    <input className="bg-[#20A8CC] text-white py-2 px-3 rounded-md cursor-pointer" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Feedback;