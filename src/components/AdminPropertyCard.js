import React from "react";
import { Link } from 'react-router-dom'


const AdminPropertyCard = (props) =>{


    return(
        <div className="col align-item-center">
               <div className="card mb-3">
                        <h3 className="card-header">{props.property.name}</h3>
                        <div className="card-body">
                            <h5 className="card-title">{props.property.location}</h5>
                            <h6 className="card-subtitle text-muted">Pending Bookings:</h6>
                        </div>
                       <img src="/Placeholder.jpg"/>
                        <div className= "btn-group">
                            <Link className="book-btn btn btn-outline-info" to={{pathname:`property/${props.property.id}`, state:{property:props.property} }}>Book Now!</Link>
                        </div>
              </div>
        </div>
    
    );
}

export default AdminPropertyCard;