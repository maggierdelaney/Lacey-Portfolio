import React from 'react';
import './style.css';

export default function Renderings() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">RENDERINGS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../images/renderManagerOffice.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">MANAGER’S OFFICE</h2>
            <br></br>
            <p className="paragraph-font">RENDERED IN SKETCHUP</p>
            <p className="paragraph-font">ARC 142 - AUTOCAD 2</p>
            <p className="paragraph-font">MARCH 2023</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col" id="intro-text">
            <br></br>
            <h2 className="title-font">1 POINT PERSPECTIVE</h2>
            <br></br>
            <p className="paragraph-font">RENDERED IN PHOTOSHOP</p>
            <p className="paragraph-font">INT 122 - DIGITAL VISUALIZATION</p>
            <p className="paragraph-font">MARCH 2022</p>
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
            <h2 className="title-font">PROPORTION & SCALE</h2>
            <br></br>
            <p className="paragraph-font">RENDERED IN PHOTOSHOP</p>
            <p className="paragraph-font">INT 150 - COLOR AND DESIGN</p>
            <p className="paragraph-font">JUNE 2022</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">PANTON “S” CHAIRS</h2>
            <br></br>
            <p className="paragraph-font">RENDERED IN PHOTOSHOP</p>
            <p className="paragraph-font">INT 122 - DIGITAL VISULIZATION</p>
            <p className="paragraph-font">FEBRUARY 2022</p>
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
            <h2 className="title-font">COLOR & SYMMETRY</h2>
            <br></br>
            <p className="paragraph-font">RENDERED IN INDESIGN</p>
            <p className="paragraph-font">INT 122 - DIGITAL VISULIZATION</p>
            <p className="paragraph-font">MARCH 2022</p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}