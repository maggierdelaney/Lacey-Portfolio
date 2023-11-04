import React from 'react';
import './style.css';

export default function Renderings() {
  return (
    <div>
      <br></br>
      <h1>RENDERINGS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../images/renderManagerOffice.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>MANAGER’S OFFICE</h2>
            <br></br>
            <p>RENDERED IN SKETCHUP</p>
            <p>ARC 142 - AUTOCAD 2</p>
            <p>MARCH 2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col" id="intro-text">
            <br></br>
            <h2>1 POINT PERSPECTIVE</h2>
            <br></br>
            <p>RENDERED IN PHOTOSHOP</p>
            <p>INT 122 - DIGITAL VISUALIZATION</p>
            <p>MARCH 2022</p>
          </div>
          <div class="col">
            <img src={require("../images/render1Point.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col">
            <img src={require("../images/renderPropScale.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col" id="intro-text">
            <br></br>
            <h2>PROPORTION & SCALE</h2>
            <br></br>
            <p>RENDERED IN PHOTOSHOP</p>
            <p>INT 150 - COLOR AND DESIGN</p>
            <p>JUNE 2022</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>PANTON “S” CHAIRS</h2>
            <br></br>
            <p>RENDERED IN PHOTOSHOP</p>
            <p>INT 122 - DIGITAL VISULIZATION</p>
            <p>FEBRUARY 2022</p>
          </div>
          <div class="col-8">
            <img src={require("../images/renderPantonChair.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-4">
            <img src={require("../images/renderSymmetry.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4">
            <img src={require("../images/renderAsymmetry.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>COLOR & SYMMETRY</h2>
            <br></br>
            <p>RENDERED IN INDESIGN</p>
            <p>INT 122 - DIGITAL VISULIZATION</p>
            <p>MARCH 2022</p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}