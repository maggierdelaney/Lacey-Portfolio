import React from 'react';
import '../style.css';

export default function ResidentialHome() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">RESIDENTIAL HOME</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p className="paragraph-font" id="cad-text">FINAL PROJECT FOR ARC 141 - INTRODUCTION TO CAD</p>
            <p className="paragraph-font" id="cad-text">COMPLETED NOVEMBER 22, 2022</p>
            <p className="paragraph-font" id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/cadResidentialHomeFinalPlan.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">FINAL ANNOTATED PLAN</h2>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}