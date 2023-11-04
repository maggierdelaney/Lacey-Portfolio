import React from 'react';
import './style.css';

export default function SpacePlans() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">SPACE PLANS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandPublicLibrary.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2 className="title-font">PUBLIC LIBRARY</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND WITH PEN</p>
            <p className="paragraph-font">INT 145 - DRAWING AND SKETCHING</p>
            <p className="paragraph-font">JULY 2022</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandVignette.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2 className="title-font">VIGNETTE</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND WITH PEN</p>
            <p className="paragraph-font">INT 145 - DRAWING AND SKETCHING</p>
            <p className="paragraph-font">JULY 2022</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandPresentation.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2 className="title-font">PRESENTATION DRAWING</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND WITH PEN</p>
            <p className="paragraph-font">INT 145 - DRAWING AND SKETCHING</p>
            <p className="paragraph-font">JUNE 2022</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandGuestSuite.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2 className="title-font">GUEST SUITE</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND WITH PEN</p>
            <p className="paragraph-font">INT 190 - SPACE PLANNING</p>
            <p className="paragraph-font">FEBRUARY 2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandNursery.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2 className="title-font">NURSERY</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND WITH PEN</p>
            <p className="paragraph-font">INT 190 - SPACE PLANNING</p>
            <p className="paragraph-font">FEBRUARY 2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandLivingDiningA.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2 className="title-font">LIVING & DINING - “A”</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND WITH PEN</p>
            <p className="paragraph-font">INT 190 - SPACE PLANNING</p>
            <p className="paragraph-font">FEBRUARY 2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../images/freehandLivingDiningB.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <br></br>
            <h2 className="title-font">LIVING & DINING - “B”</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND WITH PEN</p>
            <p className="paragraph-font">INT 190 - SPACE PLANNING</p>
            <p className="paragraph-font">FEBRUARY 2023</p>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}