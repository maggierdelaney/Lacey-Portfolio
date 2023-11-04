import React from 'react';
import './style.css';

export default function Materials() {
  return (
    <div>
      <br></br>
      <h1>MATERIALS & FURNISHINGS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>MATERIALS | MICHIGAN & LAKE</h2>
            <br></br>
            <p>DEVELOPED IN ILLUSTRATOR</p>
            <p>INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p>APRIL 2022</p>
          </div>
          <div class="col-8">
            <img src={require("../images/michLakeMaterials.PNG")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>PRIVATE SPACE FURNITURE | MICHIGAN & LAKE</h2>
            <br></br>
            <p>DEVELOPED IN ILLUSTRATOR</p>
            <p>INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p>APRIL 2022</p>
          </div>
          <div class="col-8">
            <img src={require("../images/michLakePrivate.PNG")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>PUBLIC SPACE FURNITURE | MICHIGAN & LAKE</h2>
            <br></br>
            <p>DEVELOPED IN ILLUSTRATOR</p>
            <p>INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p>MAY 2022</p>
          </div>
          <div class="col-8">
            <img src={require("../images/michLakePublic.PNG")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>PRIMARY SUITE FURNITURE | SANTA ANA</h2>
            <br></br>
            <p>DEVELOPED IN ILLUSTRATOR</p>
            <p>INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p>MAY 2022</p>
          </div>
          <div class="col-8">
            <img src={require("../images/santaAnaPrimary.PNG")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>PRIMARY SUITE MATERIALS | SANTA ANA</h2>
            <br></br>
            <p>DEVELOPED IN ILLUSTRATOR</p>
            <p>INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p>MAY 2022</p>
          </div>
          <div class="col-8">
            <img src={require("../images/santaAnaMaterials.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>HOME OFFICE MATERIALS | NEW YORK</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
            <p>INT 175 - CUSTOM DESIGN</p>
            <p>MARCH 2023</p>
          </div>
          <div class="col-8">
            <img src={require("../images/NYHomeOffice.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
      </div>
      <br></br>
      
    </div>
  );
}