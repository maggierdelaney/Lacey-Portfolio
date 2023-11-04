import React from 'react';
import '../style.css';

export default function ManagerOffice() {
  return (
    <div>
      <br></br>
      <h1>MANAGER'S OFFICE</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p id="cad-text">ARC 142 - CAD PLANS & ELEVATIONS</p>
            <p id="cad-text">COMPLETED MAY, 2023</p>
            <p id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projMgrOfficeCoverSheet.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>COVER SHEET</h2>
            <br></br>
            <p>DEVELOPED IN SKETCHUP</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projMgrOfficeFloorPlan.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
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
            <img src={require("../../images/projMgrOfficeCeilingPlan.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>REFLECTED CEILING PLAN</h2>
            <br></br>
            <p>DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projMgrOfficeElevation.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>ELEVATIONS</h2>
            <br></br>
            <p>DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projMgrOfficeSection.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>SECTION</h2>
            <br></br>
            <p>DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projMgrOfficeFurniturePlan.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>FURNITURE PLAN</h2>
            <br></br>
            <p>DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projMgrOfficeElectrical.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>ELECTRICAL PLAN</h2>
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