import React from 'react';
import './style.css';

export default function About() {
  return (
    <div>
      <br></br>
      <h1 className="title-font">ABOUT ME</h1>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col" id="intro-text">
            <br></br>
            <p className="paragraph-font">I am a second year interior design student at SCC and will be graduating with an Associates degree Fall 2023. In 2014 I graduated from U of A with a Bachelor’s in Accounting.</p>
            <p className="paragraph-font">When 2020 hit, I quit my job, eloped, moved into a van, and traveled around the country with my husband for a year. It was during this time that I realized how unhappy I was in my accounting career. Although I am very business/logic-minded, my inner creative voice was screaming. I decided to take the leap and go back to school for the dream that had always been on the distant horizon - interior design. I’ve never felt happier or more excited about what I am doing!</p>
            <p className="paragraph-font">My true passion lies with hospitality, however, I look forward to learning more about this industry from both a commercial and residential aspect. I am open to opportunity wherever it may arise!</p>
            <p className="paragraph-font">I am based in Chandler, AZ. For inquiries, feel free to contact me below.</p>
          </div>
          <div class="col">
            <img src={require("../images/aboutMePortrait.jpeg")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}