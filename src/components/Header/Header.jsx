import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="navbar sticky top-0 bg-base-200 font-semibold text-3xl px-8 bebas">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/instructors">Instructors</Link></li>
                            <li><Link>Blogs</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                    <p>Pagla High <span className="text-primary">School</span></p>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-2xl"><Link>Home</Link></li>
                        <li className="text-2xl"><Link to="/about">About</Link></li>
                        <li className="text-2xl"><Link to="/instructors">Instructors</Link></li>
                        <li className="text-2xl"><Link>Blogs</Link></li>
                        <li className="text-2xl"><Link>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;