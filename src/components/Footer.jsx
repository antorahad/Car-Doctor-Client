import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="bg-[#151515] text-neutral-content ">
            <footer className="footer p-10 max-w-7xl mx-auto">
                <aside className="space-y-3">
                    <div className="flex flex-col gap-2">
                        <img src={logo} alt="logo" className="w-16 h-10" />
                        <p className="text-sm font-bold">Car Doctor</p>
                    </div>
                    <p className="w-[310px]">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className="flex items-center gap-3">
                        <Link>
                            <div className="w-[50px] h-[50px] bg-slate-800 bg-opacity-30 flex items-center justify-center rounded-full">
                                <AiFillFacebook size={20} />
                            </div>
                        </Link>
                        <Link>
                        <div className="w-[50px] h-[50px] bg-slate-800 bg-opacity-30 flex items-center justify-center rounded-full">
                                <AiOutlineTwitter size={20} />
                            </div>
                        </Link>
                        <Link>
                        <div className="w-[50px] h-[50px] bg-slate-800 bg-opacity-30 flex items-center justify-center rounded-full">
                                <AiOutlineInstagram size={20} />
                            </div>
                        </Link>
                        <Link>
                            <div className="w-[50px] h-[50px] bg-slate-800 bg-opacity-30 flex items-center justify-center rounded-full">
                                <AiFillLinkedin size={20} />
                            </div>

                        </Link>

                    </div>
                </aside>
                <nav>
                    <header className="footer-title text-white">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;