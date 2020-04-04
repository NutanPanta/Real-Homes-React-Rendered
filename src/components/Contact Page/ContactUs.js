import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

export default class ContactUs extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   };
  // }

  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // submitHandler = (e) => {
  //   console.log(this.state);
  //   e.preventDefault();
  //   console.log(this.state);
  //   axios
  //     .post("http://localhost:8000/contact", this.state)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  render() {
    // const { name, email, phone, message } = this.state;
    return (
      <section className="contact">
        <div className="container">
          <div className="contact_us">
            <div className="contact-input">
              <form
                name="Contact"
                method="POST"
                data-netlify="true"
                type="file"
                netlify-honeypot="bot-field"
                netlify
              >
                <p className="Contact-input_area">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    aria-required="true"
                    autocomplete="off"
                    autofocus=""
                    // value={name}
                    // onChange={this.changeHandler}
                  />
                </p>
                <p className="Contact-input_area">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    aria-required="true"
                    autocomplete="off"
                    autofocus=""
                    // value={email}
                    // onChange={this.changeHandler}
                  />
                </p>
                <p className="Contact-input_area">
                  <label for="number">Phone Number</label>
                  <input
                    id="number"
                    name="number"
                    type="text"
                    placeholder="Your Phone"
                    aria-required="true"
                    autocomplete="off"
                    autofocus=""
                    // value={phone}
                    // onChange={this.changeHandler}
                  />
                </p>
                <p className="Contact-input_textarea">
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    cols="40"
                    rows="6"
                    aria-required="true"
                    autocomplete="off"
                    autofocus=""
                    // value={message}
                    // onChange={this.changeHandler}
                  ></textarea>
                </p>
                <div className="send_message">
                  <button onclick="">Send Message</button>
                </div>
              </form>
            </div>
            <div className="contact-information">
              <p className="contact-details">
                <span className="label phone">
                  <i className="fas fa-phone-alt contact-i"></i>
                  Phone
                </span>
                <Link to="#">+977 9840354391</Link>
              </p>
              <p className="contact-details">
                <span className="label mphone">
                  <i className="fas fa-mobile-alt contact-i"></i>
                  Mobile
                </span>
                <Link to="#">+977 9840354391</Link>
              </p>
              <p className="contact-details">
                <span className="label fax">
                  <i className="fas fa-fax fax contact-i"></i>
                  Fax
                </span>
                <Link to="#">+977 9840354391</Link>
              </p>
              <p className="contact-details">
                <span className="label email">
                  <i className="fas fa-envelope contact-i"></i>
                  Email
                </span>
                <Link to="#">nutanrajpanta@gmail.com</Link>
              </p>
              <p className="contact-details">
                <span className="label address">
                  <i className="fas fa-map-marker-alt contact-i"></i>
                  Address
                </span>
                <Link to="#">Banasthali,Kathmandu,Nepal</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
