import React from 'react';

function Contact() {
  return (
    <div className="row border content">
      <div className="col-12">
        <h2>Contact Me</h2>
        Name
        <br />
        <input
          className="nameinput w-100 my-1"
          type="text"
          name="FullName"
          placeholder=""
        />
        <br />
        Email
        <br />
        <input
          className="emailinput w-100 my-1"
          type="text"
          name="email"
          placeholder="example@gmail.com"
        />
        <br />
        Message
        <br />
        <textarea
          className="messageinput w-100 my-1"
          rows="10"
          cols="30"
          name="message"
        ></textarea>
        <br />
        <input id="submitbutton" type="submit" name="Submit" />
      </div>
      <br></br>
      <div className="col-12">
        <div className="row content">
          <form class="text-main-color mb-4">
            <br></br>
            <h6 class="about">Connect With Me</h6>
            <hr class="hr-local" />
            <a href="https://www.linkedin.com/in/jolie-guerra-2005b073/">
              <img src="https://jguerra21.github.io/professional-portfolio/images/linkedin2.jpg" />
            </a>
            <a href="https://github.com/jguerra21">
              <img src="https://jguerra21.github.io/professional-portfolio/images/github-35x35.png" />
            </a>
            <br />
            <a href="email">jolie_guerra@yahoo.com</a>
            <br />
            <a href="phone-number">(770) 750-4265</a>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Contact;

