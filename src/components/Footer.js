import React from "react";
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Salamanca</li>
                <li>Madrid</li>
                <li>Barcelona</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>SCHEDULE</h5>
              <ul>
                <li>Mon - Sun: 12:00AM - 12:00AM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT</h5>
              <ul>
                <li>Plaza Mayor 1, 37001, Salamanca</li>
                <li>Tel: +34 999 999 999</li>
                <li>Email: contact@littlelemonrestaurant.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>©2023 Little Lemon Restaurant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
