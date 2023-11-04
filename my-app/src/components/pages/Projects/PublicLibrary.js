import React from 'react';
import '../style.css';

export default function PublicLibrary() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">CITY LIBRARY</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p className="paragraph-font" id="cad-text">INT 145 - DRAWING AND SKETCHING</p>
            <p className="paragraph-font" id="cad-text">COMPLETED JULY 11, 2023</p>
            <p className="paragraph-font" id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projLibraryPlanView.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">PLAN VIEW</h2>
            <br></br>
            <p className="paragraph-font">SKETCHUP WIREFRAME</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projLibraryElevation.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">ELEVATIONS</h2>
            <br></br>
            <p className="paragraph-font">SKETCHUP WIREFRAME</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projLibraryPerspective.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">PERSPECTIVE</h2>
            <br></br>
            <p className="paragraph-font">SKETCHUP WIREFRAME</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projLibraryPlanViewFreehand.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">PLAN VIEW</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projLibraryElevationFreehand.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">ELEVATIONS</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projLibraryPerspectiveFreehand.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">PERSPECTIVE</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}