import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">HOME</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={require("../images/homePortrait.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
          <div class="col" id="intro-text">
            <br></br>
            <h2 className="title-font">COMPLETED PROJECTS AND COURSEWORK  FOR INTERIOR DESIGN PROGRAM</h2>
            <br></br>
            <p className="paragraph-font">Hi, I’m Lacey Marsh, second year student at Scottsdale Community College completing my Associate’s Degree in Interior Design - Fall 2023. My ultimate goal is to earn a professional certificate and one day become NCIDQ certified.</p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}