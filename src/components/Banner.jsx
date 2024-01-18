import img1 from "../assets/images/banner/5.jpg"
import img2 from "../assets/images/banner/2.jpg"
import img3 from "../assets/images/banner/3.jpg"
import img4 from "../assets/images/banner/4.jpg"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto pb-5 px-5">
            <div className="carousel w-full h-[600px] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-white flex flex-col gap-5 pl-[107px]">
                            <h1 className="text-6xl font-bold w-[453px]">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex items-center gap-5">
                                <button className="px-7 py-3 font-semibold text-sm bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-white rounded-md">Discover More</button>
                                <button className="px-7 py-3 font-semibold text-sm bg-none hover:bg-white focus:bg-white border border-white outline-none text-white hover:text-black focus:black rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle bg-slate-950 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white bg-opacity-50">
                        <FaLongArrowAltLeft size={20}/>
                        </a>
                        <a href="#slide2" className="btn btn-circle bg-slate-950 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white bg-opacity-50">
                        <FaLongArrowAltRight size={20}/>
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-white flex flex-col gap-5 pl-[107px]">
                            <h1 className="text-6xl font-bold w-[453px]">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex items-center gap-5">
                                <button className="px-7 py-3 font-semibold text-sm bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-white rounded-md">Discover More</button>
                                <button className="px-7 py-3 font-semibold text-sm bg-none hover:bg-white focus:bg-white border border-white outline-none text-white hover:text-black focus:black rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-slate-950 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white bg-opacity-50">
                        <FaLongArrowAltLeft size={20}/>
                        </a>
                        <a href="#slide3" className="btn btn-circle bg-slate-950 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white bg-opacity-50">
                        <FaLongArrowAltRight size={20}/>
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-white flex flex-col gap-5 pl-[107px]">
                            <h1 className="text-6xl font-bold w-[453px]">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex items-center gap-5">
                                <button className="px-7 py-3 font-semibold text-sm bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-white rounded-md">Discover More</button>
                                <button className="px-7 py-3 font-semibold text-sm bg-none hover:bg-white focus:bg-white border border-white outline-none text-white hover:text-black focus:black rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-slate-950 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white bg-opacity-50">
                        <FaLongArrowAltLeft size={20}/>
                        </a>
                        <a href="#slide4" className="btn btn-circle bg-slate-950 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white bg-opacity-50">
                        <FaLongArrowAltRight size={20}/>
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-white flex flex-col gap-5 pl-[107px]">
                            <h1 className="text-6xl font-bold w-[453px]">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex items-center gap-5">
                                <button className="px-7 py-3 font-semibold text-sm bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-white rounded-md">Discover More</button>
                                <button className="px-7 py-3 font-semibold text-sm bg-none hover:bg-white focus:bg-white border border-white outline-none text-white hover:text-black focus:black rounded-md">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-slate-950 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white bg-opacity-50">
                        <FaLongArrowAltLeft size={20}/>
                        </a>
                        <a href="#slide1" className="btn btn-circle bg-slate-950 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white bg-opacity-50">
                        <FaLongArrowAltRight size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;