import React from 'react';
import '../style.css';

export default function GeorgianHome() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">GEORGIAN HOUSE</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p className="paragraph-font" id="cad-text">ARC 141 - INTRODUCTION TO CAD </p>
            <p className="paragraph-font" id="cad-text">COMPLETED NOVEMBER 01, 2022</p>
            <p className="paragraph-font" id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadGeorgianFloorPlan.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">FINAL ANNOTATED PLAN</h2>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadGeorgianExterior.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">EXTERIOR ELEVATION</h2>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}