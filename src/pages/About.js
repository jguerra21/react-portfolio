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
          My name is Jolie Guerra and I am a highly motivated Full-Stack Web
          Developer and recent graduate of Georgia Institute of Technology. 
          <br></br>
          My time with Georgia Tech full stack coding boot camp, I was able to be
          acquired skills in HTML, CSS3, JavaScript, Bootstrap, ES6, jQuery,
          Express, NodeJS, OOP, Handlebars, MySQL, MVC, Sequelize, MongoDB,
          Mongoose ODM, React, Progressive Web Applications, and much more.
        </p>

        <p>
          Prior to this new career path, I served as a Sr. Human Resources
          Partner for 3 years. I have over 10 years of experience in Human
          Resources and Business Management, Including Employee Relations,
          Performance Management, Project Management, HRIS, Worker's
          Compensation, Technical Aptitude and Teamwork and Collaboration.
          <br></br>
          <br></br>
          Technology have always been one of my passions for a very long time
          and so I am excited to start this new chapter in my career and looking
          forward to being able to work with a fast growing company to apply all
          the technical skills that I have learned, and I am looking forward to
          a challenging position in Full Stack Web Development.
        </p>
      </div>
    </div>
  );
}

export default About;
