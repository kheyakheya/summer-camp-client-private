import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CheckoutForm = ({price,lesson}) => {
    const stripe= useStripe();
     const elements= useElements();
     const {user}=useContext(AuthContext);
     const [axiosSecure]=useAxiosSecure()
    const [cardError, setCardError]=useState('');
    const [clientSecret, setClientSecret]= useState('');
    const [processing,setProcessing]= useState(false);
    const [transactionId,setTransactionId]=useState('');

    useEffect(()=>{
        if(price>0){
            axiosSecure.post('/create-payment-intent',{price})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);

        })
        }
    },[price,axiosSecure])

    const handleSubmit=async (event)=>{
        event.preventDefault();
        if(!stripe || !elements || price <= 0){
            return
        }
        const card= elements.getElement(CardElement);
        if(card === null ){
            return
        }
        const {error}= await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log(error)
            setCardError(error.message);
        }
        else{
            setCardError('');
        }
        setProcessing(true);
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError)
          }
          console.log("payment intent", paymentIntent);
          setProcessing(false);
          if(paymentIntent.status === "succeeded"){
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);
            const payment= {
                email: user?.email,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartId: lesson._id,
                classId: lesson.classId,
                className: lesson.name,
                enrolled: lesson.enrolled,
                seats: lesson.seats,
                price: lesson.price,
                status: 'service pending',
                    }
            axiosSecure.post('/enrolled',lesson)
            .then(res=>{
               if(res.data.insertedId){
                console.log("enrolled");
               }
            })
            axiosSecure.post('/payments', payment)
            .then(res=>{
                if(res.data.insertedId){
                    Swal.fire('You are Enrolled')
                }
            })

          }
    }
    return (
        <>
        <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
       
       <button className="btn bg-red-700 border-none btn-sm  mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
         Pay
       </button>
      
     </form>
     {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
     {transactionId && <p className="text-green-700">Transaction Completed with transaction id: {transactionId}</p>}
      </>
    );
};

export default CheckoutForm;