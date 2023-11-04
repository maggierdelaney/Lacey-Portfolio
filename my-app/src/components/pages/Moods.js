import React from 'react';
import './style.css';

export default function Moods() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">MOOD BOARDS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../images/eastCoastCottage.PNG")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">EAST COAST COTTAGE</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN PHOTOSHOP</p>
            <p className="paragraph-font">INT 122 - DIGITAL VISUALIZATION</p>
            <p className="paragraph-font">MARCH 2022</p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}