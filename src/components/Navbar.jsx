import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"


const Navbar = () => {
    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl mx-auto px-5 py-3">
                <div className="navbar-start">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="w-16 h-16" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center justify-center text-lg font-semibold">
                        <li className="px-3">
                            <Link>
                                Home
                            </Link>
                        </li>
                        <li className="px-3">
                            <Link>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-2">
                    <ul className="flex items-center justify-center">
                        <li className="px-2">
                            <Link>
                                <button className="px-5 py-3 font-semibold text-sm bg-none hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-orange-500 hover:text-white focus:text-white rounded-md">Appointment</button>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex lg:hidden">
                        <button className="btn">Menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;