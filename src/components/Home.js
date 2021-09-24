import React from 'react';
import {Link} from 'react-router-dom'
import PropertyCards from './PropertyCards';

class Home extends React.Component {

   
        render(){    
               return (
                       <PropertyCards properties={this.props.properties}/>
                )}
};

export default Home;