import React from "react";
import { useState } from "react";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";

//STYLES
import "./contact.styles.scss";

const contact = () => {
  return (
    <div>
      <section className="main_heading--layout">
        <div className="container">
          <div className="row">
            <div className="col-12-sm">
              <p>Get In Touch</p>
              <h1>CONTACT</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-3 pb-3 reach_out">
        <div className="container">
          <div className="row">
            <div className="col-12-sm">
              <h2 className="mt-2 title">Do not hesitate to reach out.</h2>
            </div>

            <p className="strapline">
              Just fill out the contact form here and we will reply as fast as
              possible
            </p>
          </div>
        </div>
      </section>

      <section className="contact_form">
        <div className="container">
          <div className="row gap-2">
            <div className="col-12-sm col-6-lg">
              <form>
                <label>Name:</label>
                <input
                  type="text"
                  //   value={name}
                  //   onchange={(e) => setName(e.target.value)}
                />
                <label>Subject</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Message</label>
                <textarea type="text-field"></textarea>
                <input type="submit" />
              </form>
            </div>

            <div className="contact_details--right col-12-sm col-6-lg">
              <h3>Contact Details</h3>
              <p>
                If you'd prefer to e-mail us or call us our details are below
              </p>
              <ul className="contact_details">
                <li className="pt-2 pb-2">
                  <FaTelegramPlane className="mail" /> info@opspartan.com
                </li>
              </ul>
              <h3>We’re social too</h3>
              <p>You can reach out via our social media channels below</p>
              <ul className="contact_social--icons">
                <li>
                  <BsFacebook />
                </li>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <BsInstagram />
                </li>
                <li>
                  <BsTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
