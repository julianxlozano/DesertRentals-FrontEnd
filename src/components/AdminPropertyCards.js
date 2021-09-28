import React from "react";
import AdminPropertyCard from "./AdminPropertyCard";


 const AdminPropertyCards = (props) =>{


    return(
      <div className="all-property-cards container col d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {props.properties.map(property=> <AdminPropertyCard key={property.id} property={property}/>)}
        </div>
      </div>
          )
}



export default AdminPropertyCards