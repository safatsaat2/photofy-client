import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const loaction = useLocation();
    const price = loaction.state;
    const amount = parseFloat(price.toFixed(2))
    return (
        <div className="w-full">
            <h1 className="text-4xl text-center mt-20 font-semibold">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={amount}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;