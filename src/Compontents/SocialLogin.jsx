import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";




const SocialLogin = () => {
    const {googleLogin}= useContext(AuthContext);
    const navigate=useNavigate();
    const location= useLocation();
    const from = location.state ?. from ?. pathname || '/'; 
    // google signin
  const handleGoogleLogin=()=>{
   
    googleLogin()
    .then(result=>{
        const loggedUser= result.user;
        console.log("googleUser", loggedUser);
        const saveUser= {name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL}
        fetch(`http://localhost:5000/users/${loggedUser.email}`,{
            method: 'PUT',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(saveUser)
        })
        .then(res=>res.json())
        .then(()=>{
            navigate(from, {replace: true});
        })
        
       

    })
    .catch(error=>{
        console.log(error.message);
       
    })
}
    return (
        <div>
             <div className="divider text-secondary">Sign in with GOOGlE</div>
                <div className='text-center'>
                     <button  className='btn btn-secondary btn-outline mb-8' onClick={handleGoogleLogin} ><FcGoogle></FcGoogle></button>
                </div>
        </div>
    );
};

export default SocialLogin;