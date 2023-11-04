import React from 'react';
import '../style.css';

export default function HomeOffice() {
  return (
    <div>
      <br></br>
      <h1>NY HOME OFFICE</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p id="cad-text">INT 175 - CUSTOM DESIGN</p>
            <p id="cad-text">COMPLETED FEB 16, 2023</p>
            <p id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={require("../../images/projNYAptHomeOffice.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projNYAptHomeOfficeConcept.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
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
            <img src={require("../../images/projNYAptHomeOfficeMaterials.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>MATERIALS</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projNYAptHomeOfficeSketches.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>PRELIMINARY SKETHCES</h2>
            <br></br>
            <p>FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projNYAptHomeOfficeFloorPlan.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>FLOOR PLAN</h2>
            <br></br>
            <p>DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projNYAptHomeOfficeElevation1.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
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
            <img src={require("../../images/projNYAptHomeOfficeElevation2.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>ELEVATION</h2>
            <br></br>
            <p>DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}