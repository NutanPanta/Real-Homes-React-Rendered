import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer_top">
            <div className="footer_logo">
              <img src="img/logo.png" alt="..." />
              <p>/ &nbsp;&nbsp;Simply #1 Real Estate Theme</p>
            </div>
            <div className="list_media">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-skype"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-rss"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_middle">
            <div className="list_navbar">
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer_address">
              <div className="footer_location">
                <p>3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</p>
              </div>
              <div className="footer_number">
                <p>+123-456-789</p>
              </div>
              <div className="footer_sales">
                <p>sales@yourwebsite.com</p>
              </div>
            </div>
            <div className="footer_newsletter">
              <h2>Subscribe to Our Newsletter</h2>
              <form
                name="Newsletter"
                method="POST"
                data-netlify="true"
                type="file"
                netlify-honeypot="bot-field"
                netlify
              >
                <input
                  className="email_address"
                  type="email"
                  name="form-name"
                  placeholder="Your email address"
                  required=""
                />
                <div className="button_one">
                  <input type="submit" value="Sign Up" />
                </div>
              </form>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="footer_copyright">
              <span>© 2019. All rights reserved. </span>
            </div>
            <div className="footer_designed">
              <span>Designed by Nutan Raj Panta</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
