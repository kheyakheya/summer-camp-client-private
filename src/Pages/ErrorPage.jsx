import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold italic">Oooooopz</h1>
            <p className="mb-5 text-2xl">An Error Occurred !</p>
            <Link to='/'><button className="btn bg-red-700 border-none text-white">Go Home</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;