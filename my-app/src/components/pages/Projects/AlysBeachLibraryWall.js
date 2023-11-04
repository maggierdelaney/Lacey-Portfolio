import React from 'react';
import '../style.css';

export default function AlysBeachLibraryWall() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">ALYS BEACH | LIBRARY WALL</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p className="paragraph-font" id="cad-text">INT 175 - CUSTOM DESIGN</p>
            <p className="paragraph-font" id="cad-text">COMPLETED MARCH, 2023</p>
            <p className="paragraph-font" id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={require("../../images/projAlysBeachLibraryWall.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projAlysBeachLibraryWallConcept.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
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
            <img src={require("../../images/projAlysBeachLibraryWallSketches.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">PRELIMINARY SKETCHES</h2>
            <br></br>
            <p className="paragraph-font">FREEHAND DRAWING</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projAlysBeachLibraryWallFloorPlan.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">FLOOR PLAN</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projAlysBeachLibraryWallElevation.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">ELEVATION</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN AUTOCAD</p>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-8">
            <img src={require("../../images/projAlysBeachLibraryWallMaterials.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">MATERIALS</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN INDESIGN</p>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}