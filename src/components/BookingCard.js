import React from 'react';

const BookingCard = (props) =>{
        const confirmBooking = () =>{
                fetch(`http://localhost:3000/properties/${props.booking.property_id}/bookings/${props.booking.id}`,{
                        method:'PATCH',
                        headers:{
                          'Content-type':'application/json',
                          'Accept':'application/json'
                        },
                        body: JSON.stringify({
                            booked: true
                        })
                    })
        }
        return (
            <div className="booking-card card text-white bg-secondary mb-3" >
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
          <div className= "btn-group">
                    <button onClick={confirmBooking} type="button" className="book-btn btn btn-success">Confirm Booking</button>
            </div>
          </div>
        );
    
}

export default BookingCard;