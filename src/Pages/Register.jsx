import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../Compontents/SocialLogin";

const Register = () => {
    const { register, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passError, setPassError] = useState("")
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
            setPassError("Password must be at least 6 characters long");
        }
        else if (!/.*[A-Z].*/.test(passwordInput)) {
            setPassError("Password must have one uppercase");
        }

        else {
            setPassError("");
        }
    }
    const handleRegister = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const confirm = e.target.confirm.value;
        const password = e.target.password.value;
        

        if (passError) {
            e.target.password.focus();
            return;
        }
        // confirm
        if(password !== confirm){
            setError("Confirm Password did not match");
            e.target.confirm.focus();
            return;
        }
        console.log(name, password, email, photo)
        // register
        register(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser)
                setSuccess("Successfully Registered!!");
                e.target.reset();
                profileUpdate(name, photo)
                    .then(() => {
                        const saveUser = { name: name, email: email, image: photo }
                        fetch(`http://localhost:5000/users/${registeredUser.email}`, {
                            method: 'PUT',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                navigate('/');
                            })
                         })
                    .catch((error) => {
                        // An error occurred
                        // ...
                        setError(error.message)
                    });
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })


    };

    return (
        <div className="hero min-h-screen bg-white pt-12">
            <div className="hero-content flex-col ">
                <div className="text-center pb-4">
                    <h1 className="text-5xl tracking-wide my-6 font-bold text-black">Please Register</h1>
                </div>
                <div className='grid md:grid-cols-2 place-items-center'>

                    <div className="card flex-shrink-0 w-full mt-6 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body pb-2 mt-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handleEmail} value={email} type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handlePassword} value={password}
                                    type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                {show ? <p onClick={() => { setShow(!show) }}><small>Hide Password</small></p> : <p onClick={() => { setShow(!show) }}><small>Show Password</small></p>}
                                {password && passError && <span className='text-red-400'>{passError}</span>}

                            </div>
                            {/* confirm */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                    type={show ? "text" : "password"} name='confirm' placeholder="confirm password" className="input input-bordered" required />
                                {show ? <p onClick={() => { setShow(!show) }}><small>Hide Password</small></p> : <p onClick={() => { setShow(!show) }}><small>Show Password</small></p>}

                            </div>
                            {/* confirm end */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn border-none bg-[#f36ea5]">Register</button>
                            </div>
                        </form>

                        <p className='text-green-700 px-8 py-4 text-xl'><small >{success}</small></p>
                        <p className='text-red-400 px-8 py-4 text-xl'><small>{error}</small></p>
                        <Link className='px-8 pb-8' to="/login" ><span>Already Have an Account?</span><button className=" px-2 pb-8 btn btn-link">Login</button></Link>
                        <SocialLogin></SocialLogin>

                    </div>
                    <div className='hidden md:block  w-3/4'>
                        <img src='https://www.getillustrations.com/packs/bloom-vector-illustrations/scenes/_1x/accounts,%20security%20_%20website,%20webpage,%20password,%20lock,%20key,%20user_md.png' alt="" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Register;