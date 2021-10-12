import React, { Component } from 'react';
import AdminPropertyCards from './AdminPropertyCards';

const Admin = (props) => {

    if (props.loggedInStatus){
        return (
            <div className="container">
                <AdminPropertyCards properties={props.properties}/>
            </div>
        );
    }else{
        return <h1>Oops!</h1>
    }
   
}

export default Admin;