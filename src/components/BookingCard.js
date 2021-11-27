import React, {useState} from 'react';
import ModalMessage from './ModalMessage';

const BookingCard = (props) =>{

        const [booked,setBooked] = useState(false)
        const confirmBooking = () =>{
                fetch(`https://immense-lake-22245.herokuapp.com/properties/${props.booking.property_id}/bookings/${props.booking.id}`,{
             //   fetch(`http://localhost:3000/properties/${props.booking.property_id}/bookings/${props.booking.id}`,{
                        method:'PATCH',
                        headers:{
                          'Content-type':'application/json',
                          'Accept':'application/json'
                        },
                        body: JSON.stringify({
                            booked: true
                        })
                    }).then(()=>setBooked(true))
        }
        return (
                
            <div className="booking-card card text-white bg-secondary mb-3" >
            {booked? <ModalMessage msg="This Booking has been confirmed" title="All Set!" setBooked={setBooked}/>:null}
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
                    <button disabled={booked} onClick={confirmBooking} type="button" className="book-btn btn btn-success">{booked ? "Booking Confirmed!" : "Confirm Booking"}</button>
            </div>
          </div>
        );
    
}

export default BookingCard;