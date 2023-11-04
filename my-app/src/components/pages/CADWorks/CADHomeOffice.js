import React from 'react';
import '../style.css';

export default function CADHomeOffice() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">CAD HOME OFFICE</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p className="paragraph-font" id="cad-text">INT 175 - CUSTOM DESIGN</p>
            <p className="paragraph-font" id="cad-text">ALL PLANS DEVELOPED IN AUTOCAD</p>
            <p className="paragraph-font" id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadHomeOfficeFloorPlan.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">FINAL FLOOR PLAN</h2>
            <br></br>
            <p className="paragraph-font">02.14.2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadHomeOfficeElevation1.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">ELEVATION 1</h2>
            <br></br>
            <p className="paragraph-font">02.16.2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadHomeOfficeElevation2.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">ELEVATION 2</h2>
            <br></br>
            <p className="paragraph-font">02.21.2023</p>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}