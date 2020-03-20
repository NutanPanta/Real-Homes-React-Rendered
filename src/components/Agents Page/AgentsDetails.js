import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Agents css/style.css";
import axios from "axios";

export default class Agents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/agent")
      .then(response => {
        return response.data;
      })
      .then(data => {
        console.log(data);
        this.setState({
          agent: data.slice(0, 10)
        });
      });
  }
  render() {
    const agent = this.state.agent;
    const agentlist = agent.length ? (
      <>
        {agent.map(agent => (
          <div className="agents-background" key={Math.random()}>
            <div className="agent-title">
              <figure className="agents-image">
                <img src={"img/" + agent.image} alt="..."></img>
              </figure>

              <div className="agents-name">
                <Link to="#">{agent.name}</Link>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-square"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="agent-listed_property">
                <p>Listed Property</p>
                <span>3</span>
              </div>
            </div>
            <div className="agent-description">
              <p>{agent.description}</p>
            </div>

            <div className="agent-contact">
              <p>
                Office:<Link to="#">+54 356 945234</Link>
              </p>
              <p>
                Mobile:<Link to="#">+54 356 945234</Link>
              </p>
              <p>
                Fax:<Link to="#">+54 356 945234</Link>
              </p>
              <p className="whatsapp">
                WhatsApp:<Link to="#">+54 356 945234</Link>
              </p>
              <p>{/* Email:<Link to="#"> {agent.email}</Link> */}</p>
            </div>
          </div>
        ))}
      </>
    ) : (
      <div className="center">No Post to Display</div>
    );
    return (
      <section id="agents">
        <div className="container">
          <h2>Agents</h2>
          <div className="content">
            <div className="content-left">
              <div className="container">
                <div className="owl-carousel">
                  <div className="owl_carousel1">{agentlist}</div>
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
                              to="/merrick"
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
                              <i class="fas fa-shower" style={{ width: "35px" }}></i>
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
                              to="/coralGables"
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
                              <i class="fas fa-shower" style={{ width: "35px" }}></i>
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
//   render() {
//     return (
//       <section id="agents">
//         <div className="container">
//           <h2>Agents</h2>
//           <div className="content">
//             <div className="content-left">
//               <div className="container">
//                 <div className="owl-carousel">
//                   <div className="owl_carousel1">
//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-1.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">Margaret Sotillo Escala</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>
//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#">+54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#">+54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#">+54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#">+54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-2.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">Stiven Spilver Darw</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>

//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-3.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">Emma Toledo Cascada</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>

//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="owl_carousel2">
//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-4.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">Melissa William</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>

//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-5.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">Alice Brian</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>

//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-6.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">John David</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>

//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="owl_carousel3">
//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-7.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">Nathan James</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>

//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-8.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">Julia Robert</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>

//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="agents-background">
//                       <div className="agent-title">
//                         <figure className="agents-image">
//                           <img src="img/agent-9.jpg" alt="..." />
//                         </figure>

//                         <div className="agents-name">
//                           <Link to="#">John Doe</Link>
//                           <ul>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-square"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-linkedin"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>

//                         <div className="agent-listed_property">
//                           <p>Listed Properties</p>
//                           <span>3</span>
//                         </div>
//                       </div>

//                       <div className="agent-description">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Rerum deserunt voluptatum dignissimos quo
//                           impedit vero repellat ab saepe. Possimus quibusdam
//                           odio nam sint eaque cupiditate sunt, ad libero non
//                           earum. Lorem, ipsum dolor sit amet consectetur
//                           adipisicing elit. Consequatur minus quaerat rerum
//                           temporibus vitae optio eos quia sed voluptatibus.
//                           Nihil sed temporibus velit nemo provident neque sunt
//                           distinctio vel excepturi.
//                         </p>
//                       </div>

//                       <div className="agent-contact">
//                         <p>
//                           Office:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Mobile:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Fax:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p className="whatsapp">
//                           WhatsApp:<Link to="#"> +54 356 945234</Link>
//                         </p>
//                         <p>
//                           Email:<Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="content-right">
//               <div className="container">
//                 <div className="agent-right">
//                   <h3>Best Agents</h3>
//                   <div className="agent_right-background">
//                     <figure className="agent_right-image">
//                       <img src="img/agent-1.jpg" alt="..." />
//                     </figure>

//                     <div className="agent_right-detail">
//                       <div className="agent_right-name">
//                         <Link to="#">Margaret Sotillo Escala</Link>
//                       </div>

//                       <div className="agent_right-email">
//                         <p>
//                           <Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>

//                       <div className="agent_right-number">
//                         <p>
//                           <Link to="#"> +54 356 945234</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="agent_right-background">
//                     <figure className="agent_right-image">
//                       <img src="img/agent-2.jpg" alt="..." />
//                     </figure>

//                     <div className="agent_right-detail">
//                       <div className="agent_right-name">
//                         <Link to="#">Stiven Spilver Darw</Link>
//                       </div>

//                       <div className="agent_right-email">
//                         <p>
//                           <Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>

//                       <div className="agent_right-number">
//                         <p>
//                           <Link to="#"> +54 356 945234</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="agent_right-background">
//                     <figure className="agent_right-image">
//                       <img src="img/agent-3.jpg" alt="..." />
//                     </figure>

//                     <div className="agent_right-detail">
//                       <div className="agent_right-name">
//                         <Link to="#">Emma Toledo Cascada</Link>
//                       </div>

//                       <div className="agent_right-email">
//                         <p>
//                           <Link to="#"> agents@example.com</Link>
//                         </p>
//                       </div>

//                       <div className="agent_right-number">
//                         <p>
//                           <Link to="#"> +54 356 945234</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="featured-right">
//                   <h3>Featured Properties</h3>

//                   <div className="row">
//                     <div className="col-md-3">
//                       <div className="card-properties">
//                         <div className="card-image">
//                           <img
//                             className="property-01"
//                             src="img/property-01.jpg"
//                             alt="..."
//                           />
//                           <div className="card-image_hover">
//                             <Link
//                               className="animated fadeInUp"
//                               to="../Property Single/merrick-way.html"
//                             >
//                               View Property
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="properties-detail">
//                           <h3>Home in Merrick Way</h3>
//                           <p>
//                             Enchanting three bedroom, three bath home with
//                             spacious one bedroom, one bath…
//                           </p>
//                           <div className="properties-room">
//                             <span className="bedroom">
//                               Bedroom
//                               <br />
//                               <i
//                                 className="fad fa-bed-alt"
//                                 style={{ width: "35px" }}
//                               ></i>
//                               3
//                             </span>
//                             <span className="bathroom">
//                               Bathroom
//                               <br />
//                               <i
//                                 className="fal fa-shower"
//                                 style={{ width: "35px" }}
//                               ></i>
//                               3
//                             </span>
//                             <span className="area">
//                               Area
//                               <br />
//                               <i
//                                 class="fas fa-layer-group"
//                                 style={{ width: "35px" }}
//                               ></i>
//                               4300
//                               <span className="properties-unit"> Sq Ft</span>
//                             </span>
//                           </div>

//                           <div className="properties-price">
//                             For Sale
//                             <br />
//                             <span>$540,000</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-3">
//                       <div className="card-properties">
//                         <div className="card-image">
//                           <img
//                             className="property-02"
//                             src="img/property-02.jpg"
//                             alt="..."
//                           />
//                           <div className="card-image_hover">
//                             <Link
//                               className="animated fadeInUp"
//                               to="../Property Single/merrick-way.html"
//                             >
//                               View Property
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="properties-detail">
//                           <h3>Villa in Coral Gables</h3>
//                           <p>
//                             Enjoy serenity of Deering Bay whole day from this
//                             spectacular North and…
//                           </p>
//                           <div className="properties-room">
//                             <span className="bedroom">
//                               Bedroom
//                               <br />
//                               <i
//                                 className="fad fa-bed-alt"
//                                 style={{ width: "35px" }}
//                               ></i>
//                               3
//                             </span>
//                             <span className="bathroom">
//                               Bathroom
//                               <br />
//                               <i
//                                 className="fal fa-shower"
//                                 style={{ width: "35px" }}
//                               ></i>
//                               3
//                             </span>
//                             <span className="area">
//                               Area
//                               <br />
//                               <i
//                                 class="fas fa-layer-group"
//                                 style={{ width: "35px" }}
//                               ></i>
//                               4300
//                               <span className="properties-unit"> Sq Ft</span>
//                             </span>
//                           </div>

//                           <div className="properties-price">
//                             For Sale
//                             <br />
//                             <span>$540,000</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }
