import React, { Component } from "react";
import AgentsHeader from "../components/Agents Page/AgentsHeader";
import AgentsDetails from "../components/Agents Page/AgentsDetails";
import "../css/Agents css/responsive.css";
import "../css/Agents css/style.css";
export default class Agents extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <AgentsHeader />
        <AgentsDetails />
      </>
    );
  }
}
