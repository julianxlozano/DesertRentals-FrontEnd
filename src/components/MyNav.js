import React from "react";
import {Navbar, Nav} from 'react-bootstrap';


 const MyNav = (props) =>{

    const handleClick = () =>{

    }


    return(
            <Navbar  expand="lg" className="navbarTop">
                <Navbar.Brand href="/">
                <img src={'/DR Rough Crop.png'} style={{width:222, marginTop: -7}} alt="Desert Rentals"/>
              
                </Navbar.Brand>
             
                {<Nav.Link href='/admin'className="adminlink" onClick={handleClick}>Admin</Nav.Link>}
            </Navbar> 
          )
}



export default MyNav