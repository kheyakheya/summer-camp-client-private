import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../hooks/useCart';
import SectionHeading from '../../Compontents/SectionHeading';
import { Helmet } from 'react-helmet-async';
const stripePromise= loadStripe(import.meta.env.VITE_PAYMENT_PK);


const Payment = () => {
    const [cart]= useCart();
    const  {id}=useParams();
    const lesson= cart.find(lesson=>lesson._id === id);
    const total= lesson?.price;
    const price= parseFloat(total.toFixed(2));

      
    return (
       
       
           <div>
             <Helmet>
                <title>Sporting Star || Payment </title>
            </Helmet>
            <SectionHeading heading={'Payment'}></SectionHeading>
           <h1 className='text-2xl text-center my-12'>pay $ {price} for {lesson?.name} class</h1>
           
           <div className='ml-12'>
           <Elements stripe={stripePromise}>
                <CheckoutForm lesson={lesson} price={price}></CheckoutForm>
            </Elements>
           </div>
            </div>
        
      
    );
};

export default Payment;