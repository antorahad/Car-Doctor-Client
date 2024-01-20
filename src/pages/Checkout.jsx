import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const loadedServiceData = useLoaderData();
    const { title } = loadedServiceData;
    return (
        <div className="max-w-7xl mx-auto py-10 px-5">
            <center>
                <h2 className="text-4xl font-bold">Book Service: {title}</h2>
            </center>
            <div className="card w-[70%] mx-auto border bg-white rounded-md mt-10">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                       <input type="submit" value="Order Confirm" className="px-7 py-3 font-semibold text-sm bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-white hover:text-white focus:text-white rounded-md"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;