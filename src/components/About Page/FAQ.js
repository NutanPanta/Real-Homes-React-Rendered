import React, { Component } from "react";

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.closeFaq1 = this.closeFaq1.bind(this);
    this.openFaq1 = this.openFaq1.bind(this);
    this.closeFaq2 = this.closeFaq2.bind(this);
    this.openFaq2 = this.openFaq2.bind(this);
    this.closeFaq3 = this.closeFaq3.bind(this);
    this.openFaq3 = this.openFaq3.bind(this);
  }
  // faq ko lagi (+) (-) js start
  closeFaq1() {
    // when pressed minus pragraph dissapears and plus sign appears while minus sign disappears
    document.getElementById("faq-1").style.display = "none";
    document.getElementById("faq1-minus").style.display = "none";
    document.getElementById("faq1-plus").style.display = "block";
    // when we press it background and sign color of paragraph heading changes
    document.getElementById("up_down-one").style.backgroundColor = " #fff ";
    document.getElementById("one-heading").style.color = " #000 ";
    document.getElementById("faq1-plus").style.color = " #000 ";
  }
  openFaq1() {
    // when pressed plus pragraph comes and minus sign appears while plus sign disappears
    document.getElementById("faq-1").style.display = "block";
    document.getElementById("faq1-minus").style.display = "block";
    document.getElementById("faq1-plus").style.display = "none";
    // when we press it other paragraph if open closes
    document.getElementById("faq-2").style.display = "none";
    document.getElementById("faq-3").style.display = "none";
    // when we press it other sign changes
    document.getElementById("faq2-minus").style.display = "none";
    document.getElementById("faq3-minus").style.display = "none";
    document.getElementById("faq2-plus").style.display = "block";
    document.getElementById("faq3-plus").style.display = "block";
    // when we press the sign the color of heading and sign changes
    document.getElementById("up_down-one").style.backgroundColor = " #24262d ";
    document.getElementById("one-heading").style.color = " #fff ";
    document.getElementById("faq1-plus").style.color = " #fff ";
    // other pragraph backround,color of sign chanages
    // second paragraph ko
    document.getElementById("up_down-two").style.backgroundColor = " #fff ";
    document.getElementById("two-heading").style.color = " #000 ";
    document.getElementById("faq2-plus").style.color = " #000 ";
    // third paragraph ko
    document.getElementById("up_down-three").style.backgroundColor = " #fff ";
    document.getElementById("three-heading").style.color = " #000 ";
    document.getElementById("faq3-plus").style.color = " #000 ";
  }
  openFaq2() {
    // when pressed plus pragraph comes and minus sign appears while plus sign disappears
    document.getElementById("faq-2").style.display = "block";
    document.getElementById("faq2-minus").style.display = "block";
    document.getElementById("faq2-plus").style.display = "none";
    // when we press it other paragraph if open closes
    document.getElementById("faq-1").style.display = "none";
    document.getElementById("faq-3").style.display = "none";
    // when we press it other sign changes
    document.getElementById("faq1-minus").style.display = "none";
    document.getElementById("faq3-minus").style.display = "none";
    document.getElementById("faq1-plus").style.display = "block";
    document.getElementById("faq3-plus").style.display = "block";
    // when pressed sign color of h1,background and sign changes
    document.getElementById("up_down-two").style.backgroundColor = " #24262d ";
    document.getElementById("two-heading").style.color = " #fff ";
    document.getElementById("faq2-minus").style.color = " #fff ";
    // other pragraph backround,color of sign chanages
    // first paragraph ko
    document.getElementById("up_down-one").style.backgroundColor = " #fff ";
    document.getElementById("one-heading").style.color = " #000 ";
    document.getElementById("faq1-plus").style.color = " #000 ";
    // third paragraph ko
    document.getElementById("up_down-three").style.backgroundColor = " #fff ";
    document.getElementById("three-heading").style.color = " #000 ";
    document.getElementById("faq3-plus").style.color = " #000 ";
  }
  closeFaq2() {
    document.getElementById("faq-2").style.display = "none";
    document.getElementById("faq2-plus").style.display = "block";
    document.getElementById("faq2-minus").style.display = "none";
    // when pressed sign color of h1,background and sign changes
    document.getElementById("up_down-two").style.backgroundColor = " #fff ";
    document.getElementById("two-heading").style.color = " #000 ";
    document.getElementById("faq2-minus").style.color = " #000 ";
  }
  openFaq3() {
    // when pressed plus pragraph comes and minus sign appears while plus sign disappears
    document.getElementById("faq-3").style.display = "block";
    document.getElementById("faq3-minus").style.display = "block";
    document.getElementById("faq3-plus").style.display = "none";
    // when we press it other paragraph if open closes
    document.getElementById("faq-1").style.display = "none";
    document.getElementById("faq-2").style.display = "none";
    // when we press it other sign changes
    document.getElementById("faq1-minus").style.display = "none";
    document.getElementById("faq2-minus").style.display = "none";
    document.getElementById("faq1-plus").style.display = "block";
    document.getElementById("faq2-plus").style.display = "block";
    // when pressed sign color of h1,background and sign changes
    document.getElementById("up_down-three").style.backgroundColor = "#24262d";
    document.getElementById("three-heading").style.color = " #fff ";
    document.getElementById("faq3-minus").style.color = " #fff ";
    // other pragraph backround,color of sign chanages
    // first paragraph ko
    document.getElementById("up_down-one").style.backgroundColor = " #fff ";
    document.getElementById("one-heading").style.color = " #000 ";
    document.getElementById("faq1-plus").style.color = " #000 ";
    // second paragraph ko
    document.getElementById("up_down-two").style.backgroundColor = " #fff ";
    document.getElementById("two-heading").style.color = " #000 ";
    document.getElementById("faq2-plus").style.color = " #000 ";
  }
  closeFaq3() {
    document.getElementById("faq-3").style.display = "none";
    document.getElementById("faq3-plus").style.display = "block";
    document.getElementById("faq3-minus").style.display = "none";
    //  when pressed sign color of h1,background and sign changes
    document.getElementById("up_down-three").style.backgroundColor = " #fff ";
    document.getElementById("three-heading").style.color = " #000 ";
    document.getElementById("faq3-minus").style.color = " #000 ";
  }
  //faq ko lagi (+) (-) js end
  render() {
    return (
      <section className="faq">
        <div className="container">
          <div className="faq-flex">
            <div className="faq-left">
              <p>Frequently Asked Questions</p>
              <h2>HAVE ANY QUESTION?</h2>
              <figure className="faq-img">
                <img src="img/faq-img.jpg" alt="..." />
              </figure>
            </div>
            <div className="faq-right">
              <div id="up_down-one">
                <h2 id="one-heading">breathtaking architecture designed</h2>
                <i
                  id="faq1-minus"
                  className="fas fa-minus"
                  onClick={this.closeFaq1}
                ></i>
                <i
                  id="faq1-plus"
                  className="fas fa-plus"
                  onClick={this.openFaq1}
                ></i>
              </div>
              <p id="faq-1">
                We help you find the best architecture designed building.{" "}
              </p>
              <div id="up_down-two">
                <h2 id="two-heading">We are always there for you</h2>
                <i
                  id="faq2-plus"
                  className="fas fa-plus"
                  onClick={this.openFaq2}
                ></i>
                <i
                  id="faq2-minus"
                  className="fas fa-minus"
                  onClick={this.closeFaq2}
                ></i>
              </div>
              <p id="faq-2">
                We give you the best support as poosible form our team.{" "}
              </p>

              <div id="up_down-three">
                <h2 id="three-heading">Everything To Know About Our Website</h2>
                <i
                  id="faq3-plus"
                  className="fas fa-plus"
                  onClick={this.openFaq3}
                ></i>
                <i
                  id="faq3-minus"
                  className="fas fa-minus"
                  onClick={this.closeFaq3}
                ></i>
              </div>
              <p id="faq-3">Our website was formed in 2018 </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
