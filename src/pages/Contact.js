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
          placeholder="Jolie Guerra"
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
    </div>
  )
}

export default Contact;
