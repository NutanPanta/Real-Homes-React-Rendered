import React, { Component } from "react";
import AboutHeader from "../components/About Page/AboutHeader";
import FAQ from "../components/About Page/FAQ";
import BestAgents from "../components/Index Page/BestAgents";
import "../css/About css/style.css";
import "../css/About css/responsive.css";
export default class About extends Component {
  render() {
    return (
      <>
        <AboutHeader />
        <FAQ />
        <BestAgents />
      </>
    );
  }
}
