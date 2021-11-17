import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import BookingCard from "./BookingCard";
import BookedCard from "./BookedCard";

const AdminPropertyCard = (props) =>{

    const [bookings,setBookings] = useState([]);
  
    
    useEffect(()=>{

      async function fetchBookings() {
            const response = await fetch(`http://localhost:3000/properties/${props.property.id}}/bookings`)
            const fetchedBookings = await response.json(response)
            setBookings(fetchedBookings)
        }
        fetchBookings();

    },[props,bookings])

    

    return(
        <div className="col align-item-center">
               <div className="cards card mb-3">
                        <h3 className="card-header">{props.property.name}</h3>
                        <div className="card-body">
                            <h5 className="card-title">{props.property.location}</h5>
                        </div>
                       <img className="prop-img" src={`/property${props.property.id}/1.jpg`}/>
                       <div className="card-body">
                            <h5 id="pend-book" className="card-subtitle text-muted">Pending Bookings:</h5>
                            { bookings.map(booking=> booking.booked ? null : <BookingCard booking={booking} />) }
                            <h5 id="pend-book" className="card-subtitle text-muted">Confirmed Bookings:</h5>
                            { bookings.map(booking=> booking.booked ?  <BookedCard booking={booking}/> : null) }
                        </div>
                     
              </div>
        </div>
    
    );
}

export default AdminPropertyCard;