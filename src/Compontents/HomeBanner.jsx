

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/64/39/59/1000_F_264395936_2b6Xux9G1axkBix9qE6RlMaalbEuDXl6.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;