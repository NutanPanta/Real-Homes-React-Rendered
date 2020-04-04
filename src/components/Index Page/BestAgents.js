import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

export default class BestAgents extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       agent: []
  //     };
  //   }
  //   componentDidMount() {
  //     axios
  //       .get(" http://localhost:8000/Agent")
  //       .then(response => {
  //         return response.data;
  //       })
  //       .then(data => {
  //         console.log(data);
  //         this.setState({
  //           agent: data.slice(0, 10)
  //         });
  //       });
  //   }
  //   render() {
  //     const agent = this.state.agent;
  //     const agentlist = agent.length ? (
  //       <>
  //         {agent.map(agent => (
  //           <div className="col-md-3" key={Math.random()}>
  //             <div className="card">
  //               <img src={"img/" + agent.image} alt="..."></img>
  //               <div className="card-body">
  //                 <div className=" description title">
  //                   <h2>
  //                     <Link to="#">{agent.name}</Link>
  //                   </h2>
  //                 </div>

  //                 <div className="description about animated fadeInDown">
  //                   <p>{agent.description}</p>
  //                 </div>

  //                 <div className="description detail">
  //                   <p>
  //                     <strong>Phone: </strong> {agent.phone}
  //                   </p>
  //                   <p>
  //                     <strong>Email: </strong> {agent.email}
  //                   </p>
  //                 </div>

  //                 <div className="description social">
  //                   <ul className="animated fadeInUp">
  //                     <li>
  //                       <Link to="#">
  //                         <i className="fab fa-facebook-square"></i>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link to="#">
  //                         <i className="fab fa-twitter"></i>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link to="#">
  //                         <i className="fab fa-linkedin"></i>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link to="#">
  //                         <i className="fab fa-instagram"></i>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link to="#">
  //                         <i className="fab fa-pinterest"></i>
  //                       </Link>
  //                     </li>
  //                   </ul>
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
  //       <section className="best_agents">
  //         <div className="container">
  //           <div className="agent_header">
  //             <h2>Best Agents</h2>
  //             <p>All Agents></p>
  //           </div>
  //           <div className="row">{agentlist}</div>
  //         </div>
  //       </section>
  //     );
  //   }
  // }
  render() {
    return (
      <section className="best_agents">
        <div className="container">
          <div className="agent_header">
            <h2>Best Agents</h2>
            <p>All Agents></p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src="img/agent-1.jpg" alt="..." />
                <div className="card-body">
                  <div className=" description title">
                    <h2>
                      <Link to="#">
                        Margaret Sotillo
                        <br />
                        Escala
                      </Link>
                    </h2>
                  </div>

                  <div className="description about animated fadeInDown">
                    <p>
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                      dictum porta two.
                    </p>
                  </div>

                  <div className="description detail">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>

                  <div className="description social">
                    <ul className="animated fadeInUp">
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
                      <li>
                        <Link to="#">
                          <i className="fab fa-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="img/agent-2.jpg" alt="..." />
                <div className="card-body">
                  <div className="description title">
                    <h2>
                      <Link to="#">
                        Margaret Sotillo
                        <br />
                        Escala
                      </Link>
                    </h2>
                  </div>

                  <div className="description about animated fadeInDown">
                    <p>
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                      dictum porta two.
                    </p>
                  </div>

                  <div className="description detail">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>

                  <div className="description social">
                    <ul className="animated fadeInUp">
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
                      <li>
                        <Link to="#">
                          <i className="fab fa-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="img/agent-3.jpg" alt="..." />
                <div className="card-body">
                  <div className="description title">
                    <h2>
                      <Link to="#">
                        Margaret Sotillo
                        <br />
                        Escala
                      </Link>
                    </h2>
                  </div>

                  <div className="description about animated fadeInDown">
                    <p>
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                      dictum porta two.
                    </p>
                  </div>

                  <div className="description detail">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>

                  <div className="description social">
                    <ul className="animated fadeInUp">
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
                      <li>
                        <Link to="#">
                          <i className="fab fa-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
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
