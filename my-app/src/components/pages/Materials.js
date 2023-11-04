import React from 'react';
import './style.css';

export default function Materials() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">MATERIALS & FURNISHINGS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2 className="title-font">MATERIALS | MICHIGAN & LAKE</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN ILLUSTRATOR</p>
            <p className="paragraph-font">INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p className="paragraph-font">APRIL 2022</p>
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
            <h2 className="title-font">PRIVATE SPACE FURNITURE | MICHIGAN & LAKE</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN ILLUSTRATOR</p>
            <p className="paragraph-font">INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p className="paragraph-font">APRIL 2022</p>
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
            <h2 className="title-font">PUBLIC SPACE FURNITURE | MICHIGAN & LAKE</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN ILLUSTRATOR</p>
            <p className="paragraph-font">INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p className="paragraph-font">MAY 2022</p>
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
            <h2 className="title-font">PRIMARY SUITE FURNITURE | SANTA ANA</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN ILLUSTRATOR</p>
            <p className="paragraph-font">INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p className="paragraph-font">MAY 2022</p>
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
            <h2 className="title-font">PRIMARY SUITE MATERIALS | SANTA ANA</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN ILLUSTRATOR</p>
            <p className="paragraph-font">INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p className="paragraph-font">MAY 2022</p>
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
            <h2 className="title-font">HOME OFFICE MATERIALS | NEW YORK</h2>
            <br></br>
            <p className="paragraph-font">DEVELOPED IN INDESIGN</p>
            <p className="paragraph-font">INT 175 - CUSTOM DESIGN</p>
            <p className="paragraph-font">MARCH 2023</p>
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