import React from "react";
import MyPic from "../assets/images/main1.jpeg";

function About() {
  return (
    <div className="row border content">
      <div className="col-12">
        <h2>About Me</h2>

        <div className="col-md-5 col-12 p-0 mr-3 mb-3 mb-md-0 float-left">
          <img src={MyPic} className="img-fluid w-100" alt="Jolie" />
        </div>

        <p>
          My name is Jolie Guerra and i am excited about starting a new career
          path with Georgia Tech in full-stack software development. Currently i
          am attending a Bootcamp program with Georgia Tech and i am learning
          alot of new technologies.
        </p>

        <p>
          My background is in Human Resources/ Business Development and i have
          worked in the field for the past 13 years. <br></br>
          <br></br>Technology have always been one of my passions for a very
          long time that I am excited to start this new chapter in my career and
          looking forward to being able to work with a fast growing company to
          apply all the technical skills that i have learned and i am looking
          foward to a challenging position in Software Development.
        </p>
      </div>
    </div>
  );
}

export default About;
