import React from 'react';
import '../style.css';

export default function CADMgrOffice() {
  return (
    <div>
      <br></br>
      <h1>CAD MANAGER'S OFFICE</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p id="cad-text">ARC 142 - CAD PLANS & ELEVATIONS</p>
            <p id="cad-text">ALL PLANS DEVELOPED IN AUTOCAD</p>
            <p id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadMgrOfficeFloorPlan.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>ANNOTATED FLOOR PLAN</h2>
            <br></br>
            <p>02.01.2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadMgrOfficeFurniturePlan.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>FURNITURE PLAN</h2>
            <br></br>
            <p>02.08.2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadMgrOfficeElectricalPlan.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>ELECTRICAL PLAN</h2>
            <br></br>
            <p>02.21.2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadMgrOfficeCeilingPlan.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>REFLECTED CEILING PLAN</h2>
            <br></br>
            <p>02.16.2023</p>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}