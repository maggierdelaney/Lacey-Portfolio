import React from 'react';
import '../style.css';

export default function SantaAnaPrimary() {
  return (
    <div>
      <br></br>
      <h1>SANTA ANA PRIMARY BEDROOM</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p id="cad-text">INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p id="cad-text">COMPLETED MAY 09, 2022</p>
            <p id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projSantaAnaPrimaryConcept.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
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
            <img src={require("../../images/projSantaAnaPrimaryFloorPlan.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>FLOOR PLAN</h2>
            <br></br>
            <p>DEVELOPED IN ILLUSTRATOR</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projSantaAnaPrimaryElectrical.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>ELECRTICAL PLAN</h2>
            <br></br>
            <p>FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projSantaAnaPrimaryElevation.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>ELEVATION</h2>
            <br></br>
            <p>FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projSantaAnaPrimaryFurniture.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>FURNITURE</h2>
            <br></br>
            <p>DEVELOPED IN ILLUSTRATOR</p>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}