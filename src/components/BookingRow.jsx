const BookingRow = ({ bookingData }) => {
    const { image, email, date, customerName, price, service } = bookingData;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;