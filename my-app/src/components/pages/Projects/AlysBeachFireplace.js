import React from 'react';
import '../style.css';

export default function AlysBeachFireplace() {
  return (
    <div>
      <br></br>
      <h1>ALYS BEACH | FIREPLACE WALL</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p id="cad-text">INT 175 - CUSTOM DESIGN</p>
            <p id="cad-text">COMPLETED APRIL, 2023</p>
            <p id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={require("../../images/projAlysBeachFireplace.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projAlysBeachFireplaceConcept.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>CONCEPT</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projAlysBeachFireplaceSketches.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>PRELIMINARY SKETCHES</h2>
            <br></br>
            <p>FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projAlysBeachFireplaceElevation.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>ELEVATION</h2>
            <br></br>
            <p>DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projAlysBeachFireplaceMaterials.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>MATERIALS</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}