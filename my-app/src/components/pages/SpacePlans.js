import React from 'react';
import './style.css';

export default function SpacePlans() {
  return (
    <div>
      <br></br>
      <h1>SPACE PLANS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandPublicLibrary.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2>PUBLIC LIBRARY</h2>
            <br></br>
            <p>FREEHAND WITH PEN</p>
            <p>INT 145 - DRAWING AND SKETCHING</p>
            <p>JULY 2022</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandVignette.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2>VIGNETTE</h2>
            <br></br>
            <p>FREEHAND WITH PEN</p>
            <p>INT 145 - DRAWING AND SKETCHING</p>
            <p>JULY 2022</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandPresentation.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2>PRESENTATION DRAWING</h2>
            <br></br>
            <p>FREEHAND WITH PEN</p>
            <p>INT 145 - DRAWING AND SKETCHING</p>
            <p>JUNE 2022</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandGuestSuite.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2>GUEST SUITE</h2>
            <br></br>
            <p>FREEHAND WITH PEN</p>
            <p>INT 190 - SPACE PLANNING</p>
            <p>FEBRUARY 2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandNursery.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2>NURSERY</h2>
            <br></br>
            <p>FREEHAND WITH PEN</p>
            <p>INT 190 - SPACE PLANNING</p>
            <p>FEBRUARY 2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandLivingDiningA.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2>LIVING & DINING - “A”</h2>
            <br></br>
            <p>FREEHAND WITH PEN</p>
            <p>INT 190 - SPACE PLANNING</p>
            <p>FEBRUARY 2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandLivingDiningB.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2>LIVING & DINING - “B”</h2>
            <br></br>
            <p>FREEHAND WITH PEN</p>
            <p>INT 190 - SPACE PLANNING</p>
            <p>FEBRUARY 2023</p>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}