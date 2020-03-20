import React, { Component } from "react";
import BlogHeader from "../components/Blog Page/BlogHeader";
import EstateBlog from "../components/Blog Page/EstateBlog";
export default class Blog extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <BlogHeader />
        <EstateBlog />
      </>
    );
  }
}
