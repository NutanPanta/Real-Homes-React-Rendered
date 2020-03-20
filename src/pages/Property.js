import React, { Component } from "react";
import PropertyHeader from "../components/Property Page/PropertyHeader";
import BuyProperties from "../components/Property Page/BuyProperties";
import RentProperties from "../components/Property Page/RentProperties";
export default class Property extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <PropertyHeader />
        <BuyProperties />
        <RentProperties />
      </>
    );
  }
}
