import React from 'react';
import '../style.css';

export default function LibraryWall() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">LIBRARY WALL | ALYS BEACH PROJECT</h1>
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
            <img src={require("../../images/cadLibraryWallElevation.png")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">ELEVATION</h2>
            <br></br>
            <p className="paragraph-font">03.04.2023</p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}