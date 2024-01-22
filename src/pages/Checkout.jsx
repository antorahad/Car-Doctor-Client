import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
const Checkout = () => {
    const loadService = useLoaderData();
    const { title, _id, price, img } = loadService;
    const {user} = useContext(AuthContext);
    const handleOrderConfirm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            image: img,
            customerName : name,
            email : email,
            date: date,
            service: title,
            service_id: _id,
            price: price
        }

        console.log(order);

        fetch('http://localhost:4000/bookings', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Confirmed",
                    text: "Your order has been confirmed",
                    icon: "success"
                  });
            }
        })
    }
    return (
        <div className="max-w-7xl mx-auto py-10 px-5">
            <center>
                <h1 className="text-4xl font-bold">Service: {title}</h1>
            </center>

            <div className="card shrink-0 w-2/3 mx-auto  border bg-base-100 mt-10">
                <form onSubmit={handleOrderConfirm} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" defaultValue={user?.displayName} name="name" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$'+price} className="input input-bordered"/>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Order Confrim" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;