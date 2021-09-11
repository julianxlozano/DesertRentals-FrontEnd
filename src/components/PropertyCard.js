import React from "react";
import { Link } from 'react-router-dom'


const PropertyCard = (props) =>{


    return(
        <div className="col align-item-center">
               <div className="card mb-3">
                        <h3 className="card-header">Card header</h3>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                        </div>
                       <img src="/Placeholder.jpg"/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        <div className= "btn-group">
                            <Link className="book-btn btn btn-outline-info" to="property/:id">Book Now!</Link>
                        </div>
              </div>
        </div>
    
    );
}

export default PropertyCard;