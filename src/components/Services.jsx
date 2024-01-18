import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="px-5 py-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-[20px] font-[700] text-orange-500">Service</h1>
                <p className="text-[45px] font-[700]">Our Service Area</p>
                <p className="w-[717px] text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-5 place-items-center mt-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <center className="mt-7">
                <button className="px-7 py-3 font-semibold text-sm bg-none hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-orange-500 hover:text-white focus:text-white rounded-md">More Services</button>
            </center>
        </div>
    );
};

export default Services;