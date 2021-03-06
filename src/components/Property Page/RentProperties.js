import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

export default class Property extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       Rent_houses: []
  //     };
  //   }
  //   componentDidMount() {
  //     axios
  //       .get(" http://localhost:8000/Rent_houses")
  //       .then(response => {
  //         return response.data;
  //       })
  //       .then(data => {
  //         console.log(data);
  //         this.setState({
  //           Rent_houses: data.slice(0, 9)
  //         });
  //       });
  //   }
  //   render() {
  //     const Rent_houses = this.state.Rent_houses;
  //     const Rent_houseslist = Rent_houses.length ? (
  //       <>
  //         {Rent_houses.map(Rent_houses => (
  //           <div className="col-md-3" key={Math.random()}>
  //             <div className="card-properties">
  //               <div className="card-image">
  //                 <img src={"img/" + Rent_houses.image} alt="..." />
  //                 <div className="card-image_hover">
  //                   <Link className="animated fadeInUp" to={Rent_houses.path}>
  //                     View Property
  //                   </Link>
  //                 </div>
  //               </div>
  //               <div className="properties-detail">
  //                 <h3>{Rent_houses.title}</h3>
  //                 <p>{Rent_houses.description}</p>
  //                 <div className="properties-room">
  //                   <span className="bedroom">
  //                     Bedroom
  //                     <br />
  //                     <i class="fas fa-bed" style={{ width: "35px" }}></i>
  //                     {Rent_houses.bedroom}
  //                   </span>
  //                   <span className="bathroom">
  //                     Bathroom
  //                     <br />
  //                     <i class="fas fa-shower" style={{ width: "35px" }}></i>
  //                     {Rent_houses.bathroom}
  //                   </span>
  //                   <span className="area">
  //                     Area
  //                     <br />
  //                     <i class="fas fa-layer-group" style={{ width: "35px" }}></i>
  //                     {Rent_houses.area}
  //                     <span className="properties-unit">
  //                       {Rent_houses.area_unit}
  //                     </span>
  //                   </span>
  //                 </div>
  //                 <div className="properties-price">
  //                   For Rent
  //                   <br />
  //                   <span>{Rent_houses.price}</span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </>
  //     ) : (
  //       <div className="center">No Post to Display</div>
  //     );
  //     return (
  //       <section className="recent-properties">
  //         <div className="container">
  //           <h6 className="rp-subtitle">Recent</h6>
  //           <h1 className="rp-title">Properties</h1>
  //           <p className="rp-description">
  //             Check out some of our latest properties to rent.
  //           </p>
  //           <div className="go_property">
  //             <div className="latest_properties">
  //               <h2>Latest Properties</h2>
  //             </div>
  //             <div className="view_property">
  //               <span className="view_all">
  //                 <Link to="/property">All Property></Link>
  //               </span>
  //             </div>
  //           </div>
  //           <div className="row">{Rent_houseslist}</div>
  //         </div>
  //       </section>
  //     );
  //   }
  // }
  render() {
    return (
      <section className="recent-properties">
        <div className="container">
          <h2 className="rp-title">Rent Properties</h2>
          <p className="rp-description">
            Check out all of our latest properties to rent.
          </p>
          <div className="owl-carousel owl-properties row">
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img className="property-01" src="img/1.jpg" alt="..." />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/mountOlive">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>204 Mount Olive Road Two</h3>
                  <p>
                    Enchanting three bedroom, three bath home with spacious one
                    bedroom, one bath…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$12,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img className="property-02" src="img/2.jpg" alt="..." />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/rinoVenda">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>204 Rino Venda Road Five</h3>
                  <p>
                    Luxury Apartment available in an ideal location, with city
                    and ocean views,…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$13,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img className="property-03" src="img/3.jpg" alt="..." />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/aliraRoan">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>204 Alira Roan Road One</h3>
                  <p>
                    A decent 2 bedrooms condo available on rent on an ideal
                    location.…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$14,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img
                    className="property-04"
                    src="img/property-04.jpg"
                    alt="..."
                  />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/biscayneBoulevard">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>Condo on Biscayne Boulevard</h3>
                  <p>
                    Enchanting three bedroom, three bath home with spacious one
                    bedroom, one bath…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$14,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img
                    className="property-05"
                    src="img/property-05.jpg"
                    alt="..."
                  />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/luxuryApartment">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>Luxury Apartment</h3>
                  <p>
                    Luxury Apartment available in an ideal location, with city
                    and ocean views,…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$11,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img
                    className="property-06"
                    src="img/property-06.jpg"
                    alt="..."
                  />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/centralHome">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>204 North Central Home</h3>
                  <p>
                    Enchanting three bedroom, three bath home with spacious one
                    bedroom, one bath…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$9,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img
                    className="property-07"
                    src="img/property-07.jpg"
                    alt="..."
                  />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/nosara">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>Home in Nosara</h3>
                  <p>
                    Enchanting three bedroom, three bath home with spacious one
                    bedroom, one bath…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$3,750</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img
                    className="property-08"
                    src="img/property-08.jpg"
                    alt="..."
                  />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/grandAvenue">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>Villa on Grand Avenue</h3>
                  <p>
                    Enchanting three bedroom, three bath home with spacious one
                    bedroom, one bath…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$4,560</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-properties">
                <div className="card-image">
                  <img
                    className="property-09"
                    src="img/property-09.jpg"
                    alt="..."
                  />
                  <div className="card-image_hover">
                    <Link className="animated fadeInUp" to="/montalBela">
                      View Property
                    </Link>
                  </div>
                </div>
                <div className="properties-detail">
                  <h3>204 Montal South Bela Two</h3>
                  <p>
                    Enchanting three bedroom, three bath home with spacious one
                    bedroom, one bath…
                  </p>
                  <div className="properties-room">
                    <span className="bedroom">
                      Bedroom
                      <br />
                      <i class="fas fa-bed" style={{ width: "35px" }}></i>3
                    </span>
                    <span className="bathroom">
                      Bathroom
                      <br />
                      <i
                        className="fal fa-shower"
                        style={{ width: "35px" }}
                      ></i>
                      3
                    </span>
                    <span className="area">
                      Area
                      <br />
                      <i
                        class="fas fa-layer-group"
                        style={{ width: "35px" }}
                      ></i>
                      4300<span className="properties-unit"> Sq Ft</span>
                    </span>
                  </div>
                  <div className="properties-price">
                    For Rent
                    <br />
                    <span>$7,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
