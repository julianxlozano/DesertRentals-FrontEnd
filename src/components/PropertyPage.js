import React, { Component } from 'react';
import { useLocation} from 'react-router';
import { useState, useEffect } from 'react';
import Calendar from './Calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalMessage from './ModalMessage';
import Carosel from './Carosel';
import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns'

const PropertyPage = (props) =>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const location = useLocation();
    const property = location.state.property


    const [email,setEmail] = useState();
    const [name,setName] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [details,setDetails] = useState();
    const [booked,setBooked] = useState(false);
    const [excludeDates,setExcludedDates] = useState([])

    const handleSumbit = (e) =>{
        e.preventDefault();
        fetch(`http://localhost:3000/properties/${property.id}/bookings`,{
        method:'POST',
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify({
            booking:{
            email: email,
            name: name,
            phone_number: phoneNumber,
            details: details,
            booked: false,
            property_id: property.id,
            start_date: startDate,
            end_date: endDate
        }
        })
    })
    .then(resp=>{
        setBooked(true)
    })
    }

    const getDates = (newStartDate, newEndDate) => {
        const datesToExclude = [];
        let currentDate = startDate;
        while (currentDate <= newEndDate) {
            datesToExclude.push(currentDate);
            currentDate = addDays(currentDate, 1);
        }
        return datesToExclude
    };

    useEffect(()=>{
        
        async function fetchBookings() {
              const response = await fetch(`http://localhost:3000/properties/${property.id}}/bookings`)
              const fetchedBookings = await response.json(response)
           
              const allBookedBookings = fetchedBookings.filter(booking=>booking.booked === true)
      

            const exDates = allBookedBookings.map(booking=>{
                const newStartDate = new Date(booking.start_date)
                const newEndDate = new Date(booking.end_date);
                return getDates(newStartDate,newEndDate)
            })
            debugger
            return exDates
          }
        
          fetchBookings();
      },[props])

    const excludeBookedDates = () =>{
        //return an array of excluded dates
        debugger
        console.log('')
    }


  




        return (
            <div className="indv-property-cards container col d-flex justify-content-center">
                {booked? <ModalMessage setBooked={setBooked}/>:null}
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col align-item-center">
                        <div className="card mb-3">
                            <h3 className="card-header">{property.name}</h3>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle text-muted"></h6>
                            </div>
                            <Carosel propId={property.id}/>
                            <div className="card-body">
                                <p className="card-text">{property.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Winter Price: {property.pricing_winter} </li>
                                <li className="list-group-item">Spring Price: {property.pricing_spring} </li>
                                <li className="list-group-item">Fall Price:   {property.pricing_fall} </li>
                                <li className="list-group-item">Summer Price: {property.pricing_summer} </li>
                            </ul>
                            <div className= "btn-group">
                            </div>
                        </div>
                 </div>
                 <div className="col align-item-center">
                        <div className="card mb-3">
                            <h3 className="card-header">Book Now!</h3>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle text-muted">Check our availability below</h6>
                            </div>
                       
                            <div className="card-body">
                                <p className="card-text"></p>
                                Start Date
                                <DatePicker
                                    wrapperClassName="datepicker"
                                    selected={startDate}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={date => setStartDate(date)}
                                   // excludeDates={excludeBookedDates()}
                                    />
                                    End Date
                                    <DatePicker
                                    wrapperClassName="datepicker"
                                    selected={endDate}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    onChange={date => setEndDate(date)}
                                    />
                            </div>
                            <form className="booking-form"> 
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input onChange={e=>setName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jane Doe"></input>
                                    <label for="exampleFormControlInput1">Phone Number</label>
                                    <input onChange={e=>setPhoneNumber(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="(xxx)xxx-xxxx"></input>
                                    <label for="exampleFormControlInput1">Please send me an email with the details of your stay.</label>
                                    <textarea onChange={e=>setDetails(e.target.value)} className="form-control" id="exampleFormControlInput1" rows="10"></textarea>
                                </div>
                                <div className="btn-group">
                                 <input onClick={handleSumbit} type="submit" className="btn btn-success email-btn" id="exampleFormControlInput1" placeholder="(xxx)xxx-xxxx"></input>
                                </div>

                            </form>
                           
                        </div>
                 </div>
            </div>
        </div>
 
        );
   
}

export default PropertyPage;