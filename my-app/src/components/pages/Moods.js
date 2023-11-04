import React from 'react';
import './style.css';

export default function Moods() {
  return (
    <div>
      <br></br>
      <h1>MOOD BOARDS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../images/eastCoastCottage.PNG")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>EAST COAST COTTAGE</h2>
            <br></br>
            <p>DEVELOPED IN PHOTOSHOP</p>
            <p>INT 122 - DIGITAL VISUALIZATION</p>
            <p>MARCH 2022</p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}