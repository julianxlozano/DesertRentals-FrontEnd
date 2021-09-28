import React, { Component } from 'react';

const Admin = (props) => {

    if (props.loggedInStatus){
   
        return (
            <div>
                Admin section
            </div>
        );
    }else{
        return <h1>Nice Try!</h1>
    }
   
}

export default Admin;