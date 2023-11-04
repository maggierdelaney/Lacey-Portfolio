import React from 'react';
import '../style.css';

export default function SantaAnaPrimary() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">SANTA ANA PRIMARY BEDROOM</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p className="paragraph-font" id="cad-text">INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p className="paragraph-font" id="cad-text">COMPLETED MAY 09, 2022</p>
            <p className="paragraph-font" id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
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
            <h2 className="title-font">CONCEPT</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN INDESIGN</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projSantaAnaPrimaryFloorPlan.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">FLOOR PLAN</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN ILLUSTRATOR</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projSantaAnaPrimaryElectrical.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">ELECRTICAL PLAN</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projSantaAnaPrimaryElevation.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">ELEVATION</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projSantaAnaPrimaryFurniture.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">FURNITURE</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN ILLUSTRATOR</p>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}