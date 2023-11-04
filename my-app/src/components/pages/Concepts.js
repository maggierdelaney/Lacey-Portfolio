import React from 'react';
import './style.css';

export default function Concepts() {
  return (
    <div>
      <br></br>
      <h1>CONCEPTS</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>TANGO CLUB | NEWPORT BEACH</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
            <p>INT 150 - COLOR AND DESIGN</p>
            <p>JUNE 2022</p>
          </div>
          <div class="col-8">
            <img src={require("../images/conceptTangoClub.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>HOME OFFICE | NEW YORK</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
            <p>INT 175 - CUSTOM DESIGN</p>
            <p>FEBRUARY 2023</p>
          </div>
          <div class="col-8">
            <img src={require("../images/conceptNYHomeOffice.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>LIBRARY  |  ALYS BEACH</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
            <p>INT 175 - CUSTOM DESIGN</p>
            <p>FEBRUARY 2023</p>
          </div>
          <div class="col-8">
            <img src={require("../images/conceptLibraryAlys.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>FIREPLACE  |  ALYS BEACH</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
            <p>INT 175 - CUSTOM DESIGN</p>
            <p>MARCH 2023</p>
          </div>
          <div class="col-8">
            <img src={require("../images/conceptFireplaceAlys.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>URBAN APARTMENT  |  MELROSE HISTORIC DISTRICT</h2>
            <br></br>
            <p>DEVELOPED IN INDESIGN</p>
            <p>INT 190 - SPACE PLANNING</p>
            <p>MARCH 2023</p>
          </div>
          <div class="col-8">
            <img src={require("../images/conceptUrbanAptMelrose.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <br></br>
        <hr class="black-line"></hr>
        <br></br>
        <div class="row">
          <div class="col-4" id="intro-text">
            <br></br>
            <h2>PRIMARY SUITE | SANTA ANA</h2>
            <br></br>
            <p>DEVELOPED IN ILLUSTRATOR</p>
            <p>INT 105 - INTRODUCTION TO INTERIOR DESIGN</p>
            <p>MAY 2022</p>
          </div>
          <div class="col-8">
            <img src={require("../images/conceptPrimarySantaAna.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}