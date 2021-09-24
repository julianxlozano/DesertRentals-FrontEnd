import React from "react";
import { Link } from 'react-router-dom'


const PropertyCard = (props) =>{


    return(
        <div className="col align-item-center">
               <div className="card mb-3">
                        <h3 className="card-header">{props.property.name}</h3>
                        <div className="card-body">
                            <h5 className="card-title">{props.property.location}</h5>
                            <h6 className="card-subtitle text-muted">Available Now!</h6>
                        </div>
                       <img src="/Placeholder.jpg"/>
                        <div className="card-body">
                            <p className="card-text">{props.property.blurb}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Winter Price: {props.property.pricing_winter}</li>
                            <li className="list-group-item">Spring Price: {props.property.pricing_spring}</li>
                            <li className="list-group-item">Fall Price: {props.property.pricing_fall}</li>
                            <li className="list-group-item">Summer Price: {props.property.pricing_summer}</li>
                        </ul>
                        <div className= "btn-group">
                            <Link className="book-btn btn btn-outline-info" to={`property/${props.property.id}`}>Book Now!</Link>
                        </div>
              </div>
        </div>
    
    );
}

export default PropertyCard;