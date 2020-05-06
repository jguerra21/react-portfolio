import React from "react";
import MyPic from "../assets/images/main.jpeg";

function About() {
  return (
    <div className="row border content">
      <div className="col-12">
        <h2>About Me</h2>

        <div className="col-md-5 col-12 p-0 mr-3 mb-3 mb-md-0 float-left">
          <img src={MyPic} className="img-fluid w-100" alt="Jolie" />
        </div>

        <p>Example 1</p>

        <p>Example 2</p>

        <p>Example 3</p>
      </div>
    </div>
  );
}

export default About;
