import React from "react";
import { Link } from 'react-router-dom'
import Carosel from "./Carosel";


const PropertyCard = (props) =>{


    return(
        <div className="col align-item-center">
               <div className="property-card card mb-3">
                        <h3 className="card-header">{props.property.name}</h3>
                        <div className="card-body">
                            <h5 className="card-title">{props.property.location}</h5>
                            <h6 className="card-subtitle text-muted" style={{marginBottom:3}}>{props.property.region === 'mountain' ? 'Located in the Spokane, WA area.' :""}</h6>
                            <h6 className="card-subtitle text-muted">{props.property.available ? 'Available Now!' : "Currently Unavailable - Happy Renters!"}</h6>
                            <h6  className="card-subtitle text-muted" style={{paddingTop:3, opacity:0.7}}>One Renter in Group must be 55+</h6>
                        </div>
                        <Carosel propId={props.property.id}/>
                        <div className="card-body">
                            <ul>
                                <li>WiFi Included!</li>
                                <li>Pet Friendly!</li>
                                <li>Utilities included for the first 6 months!</li>
                                <li>After 6 months renters must pay utilities</li>
                                <li>No Smoking</li>
                                {props.property.region === 'mountain' &&
                                <>
                                <li>Must have a 4x4 vehicle and be willing to chain up tires in the winter</li>
                                <li>Preference given to year around renters</li>
                                </>
                                    }
                            </ul>
                            <p className="card-text">{props.property.blurb}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Winter Price: {props.property.pricing_winter}</li>
                            <li className="list-group-item">Spring Price: {props.property.pricing_spring}</li>
                            <li className="list-group-item">Fall Price: {props.property.pricing_fall}</li>
                            <li className="list-group-item">Summer Price: {props.property.pricing_summer}</li>
                        </ul>
                        <div className= "btn-group">
                            <Link className="book-btn btn btn-outline-info" to={{pathname:`property/${props.property.id}`, state:{property:props.property} }}>Book Now!</Link>
                        </div>
              </div>
        </div>
    
    );
}

export default PropertyCard;