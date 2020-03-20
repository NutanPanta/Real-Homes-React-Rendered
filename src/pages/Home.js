import React, { Component } from "react";
import Header from "../components/Index Page/Header";
import Slider from "../components/Index Page/Slider";
import BuyProperties from "../components/Index Page/BuyProperties";
import RentProperties from "../components/Index Page/RentProperties";
import BestAgents from "../components/Index Page/BestAgents";
import Testimonials from "../components/Index Page/Testimonials";
import "../css/Index css/style.css";
import "../css/Index css/responsive.css";
import "../css/All css/animate.min.css";
export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <Header />
        <Slider />
        <BuyProperties />
        <RentProperties />
        <BestAgents />
        <Testimonials />
      </>
    );
  }
}
