import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingRow from "../components/BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:4000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/bookings/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== _id)
                            setBookings(remaining);
                        }
                    })
            }
        });
    }

    const handleConfirm = _id => {
        fetch(`http://localhost:4000/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== _id) ;
                    const updated = bookings.find(booking => booking._id === _id) ;
                    updated.status = 'confirm' ;
                    const newBookings = [updated, ...remaining] ;  
                    setBookings(newBookings);                
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto min-h-screen py-10 px-5">
            <h1 className="text-4xl font-bold">Total Bookings: {bookings.length}</h1>
            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table border">
                        {/* head */}
                        <thead className="bg-slate-100">
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Servic</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(bookingData => <BookingRow key={bookingData._id} bookingData={bookingData} handleDelete={handleDelete} handleConfirm={handleConfirm}  ></BookingRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;