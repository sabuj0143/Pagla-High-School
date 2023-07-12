import { Link } from 'react-router-dom';
import bannerImg from '../../../public/School-banner.jpg';
// import { TypeAnimation } from 'react-type-animation';
import { FaPhone } from "react-icons/fa";


const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-2 text-white text-7xl font-bold bebas">Pagla  High  School</h1>
                        {/* <TypeAnimation
                            sequence={[
                                "Pagla High School",
                                2000,
                                "JavaScript Developer",
                                2000,
                                "Pagla High School",
                                2000,
                                "ReactJs Developer",
                                2000,
                            ]}
                            speed={50}
                            className="text-black"
                            wrapper="span"
                            repeat={Infinity}></TypeAnimation> */}
                        <p className="mb-3 text-white font-semibold p-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/contact">
                            <button className="btn btn-primary text-white font-bold">
                                Contact Us <FaPhone className='ml-1' /> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;