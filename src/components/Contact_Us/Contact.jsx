import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
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
  };

  const clearInput = () => {
    document.getElementById("name").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("phone").textContent = "";
    document.getElementById("message").textContent = "";
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
              <button
                class="form-submit cool-button"
                type="submit"
                onClick={clearInput}
              >
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
        </div>
      </section>
    </>
  );
};

export default Contact;
