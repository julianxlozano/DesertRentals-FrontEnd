import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/journal/bootstrap.css';
import MyNav from './components/MyNav';


const App = () => {
  return (
    <div className="App" style={{backgroundImage:`url(/BGPreview.jpeg)`,
    height: "1000px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"}}>
      <MyNav/>
     <h1>Shis</h1>
    </div>
  );
}

export default App;
