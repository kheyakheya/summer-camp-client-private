import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Welcome = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className="text-3xl flex justify-center items-center ">
            <div className="absolute bottom-1/2">
            <h3>Hey <span className="text-red-700 tracking-wider"> {user.displayName} </span> Welcome To Academy Dashboard !!</h3>
            </div>
        </div>
    );
};

export default Welcome;