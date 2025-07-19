import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section>
        <div className="main">
          <div className="left">
            <div className="num">123456789</div>
            <div className="email">123@gmail.com</div>
          </div>
          <div className="right">
            <h1>Contact Us</h1>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="EMAIL ID" required />
            <button>Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
