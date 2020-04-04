import React, { Component } from "react";
// import axios from "axios";

export default class Testimonials extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       testimonial: []
  //     };
  //   }
  //   componentWillMount() {
  //     axios
  //       .get("http://localhost:8000/testimonial")
  //       .then(response => {
  //         return response.data;
  //       })
  //       .then(data => {
  //         console.log(data);
  //         this.setState({
  //           testimonial: data.slice(0, 2)
  //         });
  //       });
  //   }
  //   render() {
  //     const testimonial = this.state.testimonial;
  //     const testimoniallist = testimonial.length ? (
  //       <>
  //         {testimonial.map(testimonial => (
  //           <div className="testimonial_one" key={Math.random()}>
  //             <div className="img-3">
  //               <img src={"img/" + testimonial.image} alt="..."></img>
  //             </div>

  //             <div className="description_one-3">
  //               <span>
  //                 <i className="fas fa-quote-right"></i>
  //               </span>
  //               <p>{testimonial.comment}</p>
  //               <img src={"img/" + testimonial.mini_image} alt="..."></img>
  //               <h2 className="testimonials_name1">{testimonial.name}</h2>
  //             </div>
  //           </div>
  //         ))}
  //       </>
  //     ) : (
  //       <div className="center">No Post to Display</div>
  //     );
  //     return (
  //       <section className="testimonials">
  //         <div className="container">
  //           <h1>Testimonials</h1>
  //           <div className="owl-carousel">{testimoniallist}</div>
  //         </div>
  //       </section>
  //     );
  //   }
  // }
  render() {
    return (
      <section className="testimonials">
        <div className="container">
          <h1>Testimonials</h1>
          <div className="owl-carousel">
            <div className="testimonial_one">
              <div className="img-3">
                <img src="img/testimonial-1.jpg" alt="..." />
              </div>

              <div className="description_one-3">
                <span>
                  <i className="fas fa-quote-right"></i>
                </span>
                <p>Were very pleased with the house we got from Real Homes</p>
                <img src="img/mini-testimonial-1.jpg" alt="..." />
                <h2 className="testimonials_name1">Pablo & Emma</h2>
              </div>
            </div>
            <div className="testimonial_two">
              <div className="img-3">
                <img src="img/testimonial-2.jpg" alt="..." />
              </div>

              <div className="description_two-3">
                <span>
                  <i className="fas fa-quote-right"></i>
                </span>
                <p>
                  We would like to thank Real Homes for helping us find the
                  perfect home.
                </p>
                <img src="img/mini-testimonial-2.jpg" alt="..." />
                <h2 className="testimonials_name1">Patson & Angelina</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
