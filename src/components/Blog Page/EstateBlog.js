import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/Blogcss/style.css";
import "../../css/Blogcss/responsive.css";

export default class Blog extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     blog: []
  //   };
  // }
  // componentDidMount() {
  //   axios
  //     .get(" http://localhost:8000/Blog")
  //     .then(response => {
  //       return response.data;
  //     })
  //     .then(data => {
  //       console.log(data);
  //       this.setState({
  //         blog: data.slice(0, 10)
  //       });
  //     });
  // }
  // render() {
  //   const blog = this.state.blog;
  //   const bloglist = blog.length ? (
  //     <>
  //       {blog.map(blog => (
  //         <div className="news" key={Math.random()}>
  //           <figure className="news-image-title1">
  //             <img src={"img/" + blog.image} alt="..."></img>
  //           </figure>
  //           <article className="news-description">{blog.description}</article>
  //         </div>
  //       ))}
  //     </>
  //   ) : (
  //     <div className="center">No Post to Display</div>
  //   );
  //   return (
  //     <section id="blog">
  //       <div className="container">
  //         <h2>Blog</h2>
  //         <div className="content">
  //           <div className="content-left">
  //             <div className="container">{bloglist}</div>
  //           </div>
  //           <div className="content-right">
  //             <div className="container">
  //               <div className="agent-right">
  //                 <h3>Best Agents</h3>
  //                 <div className="agent_right-background">
  //                   <figure className="agent_right-image">
  //                     <img src="img/agent-1.jpg" alt="..." />
  //                   </figure>

  //                   <div className="agent_right-detail">
  //                     <div className="agent_right-name">
  //                       <Link to="#">Margaret Sotillo Escala</Link>
  //                     </div>

  //                     <div className="agent_right-email">
  //                       <p>
  //                         <Link to="#"> agents@example.com</Link>
  //                       </p>
  //                     </div>

  //                     <div className="agent_right-number">
  //                       <p>
  //                         <Link to="#"> +54 356 945234</Link>
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 <div className="agent_right-background">
  //                   <figure className="agent_right-image">
  //                     <img src="img/agent-2.jpg" alt="..." />
  //                   </figure>

  //                   <div className="agent_right-detail">
  //                     <div className="agent_right-name">
  //                       <Link to="#">Stiven Spilver Darw</Link>
  //                     </div>

  //                     <div className="agent_right-email">
  //                       <p>
  //                         <Link to="#"> agents@example.com</Link>
  //                       </p>
  //                     </div>

  //                     <div className="agent_right-number">
  //                       <p>
  //                         <Link to="#"> +54 356 945234</Link>
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 <div className="agent_right-background">
  //                   <figure className="agent_right-image">
  //                     <img src="img/agent-3.jpg" alt="..." />
  //                   </figure>

  //                   <div className="agent_right-detail">
  //                     <div className="agent_right-name">
  //                       <Link to="#">Emma Toledo Cascada</Link>
  //                     </div>

  //                     <div className="agent_right-email">
  //                       <p>
  //                         <Link to="#"> agents@example.com</Link>
  //                       </p>
  //                     </div>

  //                     <div className="agent_right-number">
  //                       <p>
  //                         <Link to="#"> +54 356 945234</Link>
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="featured-right">
  //                 <h3>Featured Properties</h3>

  //                 <div className="row">
  //                   <div className="col-md-3">
  //                     <div className="card-properties">
  //                       <div className="card-image">
  //                         <img
  //                           className="property-01"
  //                           src="img/property-01.jpg"
  //                           alt="..."
  //                         />
  //                         <div className="card-image_hover">
  //                           <Link className="animated fadeInUp" to="/merrick">
  //                             View Property
  //                           </Link>
  //                         </div>
  //                       </div>
  //                       <div className="properties-detail">
  //                         <h3>Home in Merrick Way</h3>
  //                         <p>
  //                           Enchanting three bedroom, three bath home with
  //                           spacious one bedroom, one bath…
  //                         </p>
  //                         <div className="properties-room">
  //                           <span className="bedroom">
  //                             Bedroom
  //                             <br />
  //                             <i
  //                               class="fas fa-bed"
  //                               style={{ width: "35px" }}
  //                             ></i>
  //                             3
  //                           </span>
  //                           <span className="bathroom">
  //                             Bathroom
  //                             <br />
  //                             <i
  //                               class="fas fa-shower"
  //                               style={{ width: "35px" }}
  //                             ></i>
  //                             3
  //                           </span>
  //                           <span className="area">
  //                             Area
  //                             <br />
  //                             <i
  //                               class="fas fa-layer-group"
  //                               style={{ width: "35px" }}
  //                             ></i>
  //                             4300
  //                             <span className="properties-unit"> Sq Ft</span>
  //                           </span>
  //                         </div>

  //                         <div className="properties-price">
  //                           For Sale
  //                           <br />
  //                           <span>$540,000</span>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-md-3">
  //                     <div className="card-properties">
  //                       <div className="card-image">
  //                         <img
  //                           className="property-02"
  //                           src="img/property-02.jpg"
  //                           alt="..."
  //                         />
  //                         <div className="card-image_hover">
  //                           <Link
  //                             className="animated fadeInUp"
  //                             to="/coralGables"
  //                           >
  //                             View Property
  //                           </Link>
  //                         </div>
  //                       </div>
  //                       <div className="properties-detail">
  //                         <h3>Villa in Coral Gables</h3>
  //                         <p>
  //                           Enjoy serenity of Deering Bay whole day from this
  //                           spectacular North and…
  //                         </p>
  //                         <div className="properties-room">
  //                           <span className="bedroom">
  //                             Bedroom
  //                             <br />
  //                             <i
  //                               class="fas fa-bed"
  //                               style={{ width: "35px" }}
  //                             ></i>
  //                             3
  //                           </span>
  //                           <span className="bathroom">
  //                             Bathroom
  //                             <br />
  //                             <i
  //                               class="fas fa-shower"
  //                               style={{ width: "35px" }}
  //                             ></i>
  //                             3
  //                           </span>
  //                           <span className="area">
  //                             Area
  //                             <br />
  //                             <i
  //                               class="fas fa-layer-group"
  //                               style={{ width: "35px" }}
  //                             ></i>
  //                             4300
  //                             <span className="properties-unit"> Sq Ft</span>
  //                           </span>
  //                         </div>

  //                         <div className="properties-price">
  //                           For Sale
  //                           <br />
  //                           <span>$540,000</span>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );

  render() {
    return (
      <section id="blog">
        <div className="container">
          <h2>Blog</h2>
          <div className="content">
            <div className="content-left">
              <div className="container">
                <div className="news">
                  <figure className="news-image-title1">
                    <img src="img/property-01.jpg" alt="" />
                  </figure>
                  <div className="news-description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa atque itaque dolor, ut architecto praesentium tenetur
                      consectetur saepe? Deserunt cum similique, modi quo
                      quibusdam iusto error. Quos, mollitia ea. Obcaecati. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                      consequatur officiis magnam veritatis velit quis libero
                      consequuntur explicabo fugit quibusdam nisi eligendi
                      distinctio commodi est quo quaerat esse? Ab, dicta.
                    </p>
                  </div>
                </div>
                <div className="news">
                  <figure className="news-image-title2">
                    <img src="img/property-02.jpg" alt="" />
                  </figure>
                  <div className="news-description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa atque itaque dolor, ut architecto praesentium tenetur
                      consectetur saepe? Deserunt cum similique, modi quo
                      quibusdam iusto error. Quos, mollitia ea. Obcaecati. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                      consequatur officiis magnam veritatis velit quis libero
                      consequuntur explicabo fugit quibusdam nisi eligendi
                      distinctio commodi est quo quaerat esse? Ab, dicta.
                    </p>
                  </div>
                </div>
                <div className="news">
                  <figure className="news-image-title3">
                    <img src="img/property-01.jpg" alt="" />
                  </figure>
                  <div className="news-description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa atque itaque dolor, ut architecto praesentium tenetur
                      consectetur saepe? Deserunt cum similique, modi quo
                      quibusdam iusto error. Quos, mollitia ea. Obcaecati. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                      consequatur officiis magnam veritatis velit quis libero
                      consequuntur explicabo fugit quibusdam nisi eligendi
                      distinctio commodi est quo quaerat esse? Ab, dicta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-right">
              <div className="container">
                <div className="agent-right">
                  <h3>Best Agents</h3>
                  <div className="agent_right-background">
                    <figure className="agent_right-image">
                      <img src="img/agent-1.jpg" alt="..." />
                    </figure>

                    <div className="agent_right-detail">
                      <div className="agent_right-name">
                        <Link to="#">Margaret Sotillo Escala</Link>
                      </div>

                      <div className="agent_right-email">
                        <p>
                          <Link to="#"> agents@example.com</Link>
                        </p>
                      </div>

                      <div className="agent_right-number">
                        <p>
                          <Link to="#"> +54 356 945234</Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="agent_right-background">
                    <figure className="agent_right-image">
                      <img src="img/agent-2.jpg" alt="..." />
                    </figure>

                    <div className="agent_right-detail">
                      <div className="agent_right-name">
                        <Link to="#">Stiven Spilver Darw</Link>
                      </div>

                      <div className="agent_right-email">
                        <p>
                          <Link to="#"> agents@example.com</Link>
                        </p>
                      </div>

                      <div className="agent_right-number">
                        <p>
                          <Link to="#"> +54 356 945234</Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="agent_right-background">
                    <figure className="agent_right-image">
                      <img src="img/agent-3.jpg" alt="..." />
                    </figure>

                    <div className="agent_right-detail">
                      <div className="agent_right-name">
                        <Link to="#">Emma Toledo Cascada</Link>
                      </div>

                      <div className="agent_right-email">
                        <p>
                          <Link to="#"> agents@example.com</Link>
                        </p>
                      </div>

                      <div className="agent_right-number">
                        <p>
                          <Link to="#"> +54 356 945234</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured-right">
                  <h3>Featured Properties</h3>

                  <div className="row">
                    <div className="col-md-3">
                      <div className="card-properties">
                        <div className="card-image">
                          <img
                            className="property-01"
                            src="img/property-01.jpg"
                            alt="..."
                          />
                          <div className="card-image_hover">
                            <Link
                              className="animated fadeInUp"
                              to="../Property Single/merrick-way.html"
                            >
                              View Property
                            </Link>
                          </div>
                        </div>
                        <div className="properties-detail">
                          <h3>Home in Merrick Way</h3>
                          <p>
                            Enchanting three bedroom, three bath home with
                            spacious one bedroom, one bath…
                          </p>
                          <div className="properties-room">
                            <span className="bedroom">
                              Bedroom
                              <br />
                              <i
                                class="fas fa-bed"
                                style={{ width: "35px" }}
                              ></i>
                              3
                            </span>
                            <span className="bathroom">
                              Bathroom
                              <br />
                              <i
                                class="fas fa-layer-group"
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
                              4300
                              <span className="properties-unit"> Sq Ft</span>
                            </span>
                          </div>

                          <div className="properties-price">
                            For Sale
                            <br />
                            <span>$540,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card-properties">
                        <div className="card-image">
                          <img
                            className="property-02"
                            src="img/property-02.jpg"
                            alt="..."
                          />
                          <div className="card-image_hover">
                            <Link
                              className="animated fadeInUp"
                              to="../Property Single/merrick-way.html"
                            >
                              View Property
                            </Link>
                          </div>
                        </div>
                        <div className="properties-detail">
                          <h3>Villa in Coral Gables</h3>
                          <p>
                            Enjoy serenity of Deering Bay whole day from this
                            spectacular North and…
                          </p>
                          <div className="properties-room">
                            <span className="bedroom">
                              Bedroom
                              <br />
                              <i
                                class="fas fa-bed"
                                style={{ width: "35px" }}
                              ></i>
                              3
                            </span>
                            <span className="bathroom">
                              Bathroom
                              <br />
                              <i
                                class="fas fa-layer-group"
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
                              4300
                              <span className="properties-unit"> Sq Ft</span>
                            </span>
                          </div>

                          <div className="properties-price">
                            For Sale
                            <br />
                            <span>$540,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
