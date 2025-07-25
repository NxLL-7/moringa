import React, { useState } from "react";
import "./contact.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  const [result, setResult] = useState("");
  let isFilled;

  const onSubmit = async (event) => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("message").value;
    if (name === "" && email === "" && phone === "" && msg === "") {
      isFilled = false;
    } else {
      isFilled = true;
    }
    if (isFilled) {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "93409f32-1429-4412-b7eb-07732c69eacf");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } else {
      window.alert("Fill The Form !!");
    }
  };

  return (
    <>
      <section class="contact-section">
        <div className="contact-form">
          <div class="contact-intro">
            <h2 class="contact-title">Get in Touch</h2>
            <p class="contact-description">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <form class="contact-form" onSubmit={onSubmit}>
            <div class="form-group-container">
              <div class="form-group">
                <input
                  id="name"
                  name="name"
                  class="form-input"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div class="form-group">
                <input
                  id="email"
                  name="email"
                  class="form-input"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div class="form-group">
                <input
                  id="phone"
                  name="phone"
                  class="form-input"
                  placeholder="(+91) Your Mobile Number"
                  type="text"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-textarea last"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
            <div className="append">
              <button class="form-submit cool-button" type="submit">
                Send Message
              </button>
              <span
                className="result"
                style={{ display: result === "" ? "none" : "block" }}
              >
                {result}
              </span>
            </div>
          </form>
          <div className="center">
            <div className="social">
              <div>
                <Link
                  to="https://www.facebook.com/profile.php?id=61578268003866"
                  target="_blank"
                  className="linkTag fb"
                >
                  <FaFacebookSquare />
                </Link>
              </div>
              <div>
                <Link
                  to="https://www.instagram.com/moringa722/"
                  target="_blank"
                  className="linkTag ig"
                >
                  <FaSquareInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
