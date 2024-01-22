const BookingRow = ({ bookingData, handleDelete, handleConfirm }) => {
    const {_id, image, email, date, customerName, price, service, status } = bookingData;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-neutral bg-opacity-70 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        {
                            image &&
                            <img src={image} />
                        }
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>
                <div className="flex flex-col gap-2">
                    <div>{customerName}</div>
                    <div>{email}</div>
                </div>
            </td>
            <td>{date}</td>
            <td>{'$' + price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold">Confirmed</span> :
                    <button onClick={() => handleConfirm(_id)} className="btn btn-xs rounded-sm">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;