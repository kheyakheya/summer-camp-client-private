import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { BiShow } from 'react-icons/bi';

import SocialLogin from "../Compontents/SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {logIn}=useContext(AuthContext)
    const [show,setShow]=useState(false);
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state ?. from ?. pathname || '/'; 

    const handleLogin=(event)=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password=form.password.value;
        console.log(email,password)
        setError('');
        setSuccess('');
        logIn(email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess("Login successful!");
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })
        
    }
    
    return (
        <div className="hero min-h-screen bg-white pt-6">
             <Helmet>
                <title>Sporting Star || Login </title>
            </Helmet>
        <div className="hero-content flex-col ">
            <div className="text-center py-6">
                <h1 className="text-5xl tracking-wide  text-red-700 mt-6">Please Login</h1>
            </div>
            <div className='grid md:grid-cols-2 place-items-center'>
                <div className='hidden md:block md:w-3/4'>
                   
                    <img src="https://thumbs.dreamstime.com/b/important-part-26968932.jpg" alt="" />
                    
                </div>
            <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body pb-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={show ? "text" : "password" } name='password' placeholder="password" className="input input-bordered" required />
                        {show ? <p className="pt-4" onClick={()=>{setShow(!show)}}><BiShow></BiShow></p> : <p className="pt-4"  onClick={()=>{setShow(!show)}}><BiShow></BiShow></p> }
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-700 border-none">Login</button>
                    </div>
                </form>
                <p className='text-red-700 text-xl px-8 py-4'><small>{error}</small></p>
                <p className='text-green-700 text-xl px-8'><small >{success}</small></p>
                
                <Link className='px-8 -mt-6' to="/register" ><span>New to <Link to='/'><span className='text-red-700'>Sporting Star</span></Link>?</span><button className=" px-2 btn btn-link">Register</button></Link>
                <SocialLogin></SocialLogin>
                {/* <div className="divider text-secondary">login with GOOGlE</div>
                <div className='text-center'>
                     <button  className='btn btn-secondary btn-outline mb-8' onClick={handleGoogleLogin} ><FcGoogle></FcGoogle></button>
                </div> */}
                
                

            </div>
            </div>
            
        </div>
    </div>
    );
};

export default Login;