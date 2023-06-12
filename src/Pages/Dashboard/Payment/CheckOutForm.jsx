import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const CheckOutForm = ({ price }) => {

    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState(' ')
    const [clientSecret, setClientSecret] = useState('')
    const token = localStorage.getItem("access-token")

    useEffect(() => {
        console.log(price)
        axios.post('https://photofy-server.vercel.app/create-payment-intent', {
            headers:{
                Authorization:` bearer ${token}`
            },
        }, { price } )
            .then(res => {
                console.log(res.data)
                setClientSecret(res.data)
            })

    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            {
                console.log("error", error)
                setErr(error.message)
            }
        }
        else {
            setErr(' ')
            console.log('payment', paymentMethod)
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "anonymous",
                        email: user?.email || "anonymous",
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError)
        }

        console.log("ee", paymentIntent)

    }

    return (
        <>
            <form className="w-3/4 m-20" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn-sm bg-[#20A8cc] text-white rounded-md mt-6" type="submit" >
                    Pay
                </button>
            </form>
            {err && <p className="text-red-500 ml-20">{err}</p>}
        </>
    );
};

export default CheckOutForm;