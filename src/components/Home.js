import React from 'react';
import {Link} from 'react-router-dom'
import PropertyCards from './PropertyCards';

class Home extends React.Component {

   
        render(){    
               return (
                       <>
                       <div className="container radio-btns">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked=""/>
                                        <label className="btn btn-outline-primary" for="btnradio1">Desert Rentals</label>
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked=""/>
                                        <label className="btn btn-outline-primary" for="btnradio2">Mountain Rentals</label>
                                </div>
                        </div>
        
                        
                                <PropertyCards properties={this.props.properties}/>
                        </>
                )}
};

export default Home;