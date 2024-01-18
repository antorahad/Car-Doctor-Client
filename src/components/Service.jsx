import { FaArrowRightLong } from "react-icons/fa6";

const Service = ({ service }) => {
    const { title, img, price } = service
    return (
        <div>
            <div className="card bg-base-50 shadow-md rounded-md">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-[314px] h-[210px]" />
                </figure>
                <div className="card-body space-y-4">
                    <h2 className="card-title text-[25px] font-[700]">{title}</h2>
                    <div className="card-actions items-center justify-between">
                        <p className="text-orange-500 text-[20px] font-[600]">Price: ${price}</p>
                        <button className="bg-none text-orange-500 border-none outline-none"><FaArrowRightLong size={20}></FaArrowRightLong></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;