import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const BannerHome = () => {
    return (
        <div className="-mt-4">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> 
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
            </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
            
            </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default BannerHome;