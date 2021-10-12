import React from 'react';

const BookedCard = (props) =>{


    return (
        <div className="card text-white bg-primary mb-3" >
        <div className="card-header">{props.booking.name} - {props.booking.email}</div>
        <div className="card-body">
        <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tr class="table-primary">
                <th scope="row"></th>
                        <td>{props.booking.start_date}</td>
                        <td>{props.booking.end_date}</td>
                        <td>{props.booking.phone_number}</td>
                </tr>

        </table>
      </div>
      </div>
    );

}

export default BookedCard;