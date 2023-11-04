import React from 'react';
import '../style.css';

export default function LibraryWall() {
  return (
    <div>
      <br></br>
      <h1>LIBRARY WALL | ALYS BEACH PROJECT</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p id="cad-text">INT 175 - CUSTOM DESIGN</p>
            <p id="cad-text">ALL PLANS DEVELOPED IN AUTOCAD</p>
            <p id="cad-text">*ALL WORK REPRESENTED IS FOR EDUCATIONAL PURPOSES ONLY</p>
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
            <h2>ELEVATION</h2>
            <br></br>
            <p>03.04.2023</p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}