import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../assets/back/backgroundhorse.jpg';
import bg2 from '../../assets/back/backgroundjump.jpg'
import bg3 from '../../assets/back/backgroundkids.jpg'
import bg4 from '../../assets/back/backgroundswim.jpg'
const Banner = () => {
    return (
        <Carousel className="-mt-4">
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.1.373721687.1666840502&semt=ais")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-6xl font-bold ">Sporting Star</h1>
                            <p className="mb-5 text-xl italic">A Summer School for Fitness and Fun. Boost your Fitness and start Fresh... </p>
                            {/* <button className="btn bg-red-600">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/football-concept-with-slate_23-2147832083.jpg?size=626&ext=jpg&ga=GA1.2.373721687.1666840502&semt=ais")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-6xl font-bold ">Sporting Star</h1>
                            <p className="mb-5 text-xl italic">A Summer School for Fitness and Fun. Boost your Fitness and start Fresh... </p>
                            {/* <button className="btn bg-red-600">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/water-bottle-red-sport-shoes-dumbbells-green-turf_23-2147924669.jpg?size=626&ext=jpg&ga=GA1.2.373721687.1666840502&semt=ais")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-6xl font-bold ">Sporting Star</h1>
                            <p className="mb-5 text-xl italic">A Summer School for Fitness and Fun. Boost your Fitness and start Fresh... </p>
                            {/* <button className="btn bg-red-600">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/ping-pong-balls-shuttlecocks-badminton-rackets-green-turf_23-2147924675.jpg?size=626&ext=jpg&ga=GA1.1.373721687.1666840502&semt=ais")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-6xl font-bold ">Sporting Star</h1>
                            <p className="mb-5 text-xl italic">A Summer School for Fitness and Fun. Boost your Fitness and start Fresh... </p>
                            {/* <button className="btn bg-red-600">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
            
        </Carousel>
    );
};

export default Banner;