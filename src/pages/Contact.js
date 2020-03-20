import React, { Component } from "react";
import ContactHeader from "../components/Contact Page/ContactHeader";
import ContactUs from "../components/Contact Page/ContactUs";
export default class Contact extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <ContactHeader />
        <ContactUs />
      </>
    );
  }
}
