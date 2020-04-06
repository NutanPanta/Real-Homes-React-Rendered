import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Slider extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="slider">
          <div className="slider">
            <div className="slide">
              <div className="text">
                <div className="slider-content" id="slider-content-1">
                  <div className="slider-description">
                    <div className="slider-bg">
                      <div className="slider-location">
                        <span className="slider-span">
                          <p>Doral, Florida</p>
                        </span>
                        <span className="slider-span">
                          <p>78345</p>
                        </span>
                      </div>
                      <h1>
                        <span className="color-b">204 </span>
                        Mount
                        <br className="desktop_only" />
                        Olive Road Two
                      </h1>
                      <Link to="/mountOlive">
                        <button>rent | $ 12.000</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="text">
                <div className="slider-content" id="slider-content-1">
                  <div className="slider-description">
                    <div className="slider-bg">
                      <div className="slider-location">
                        <span className="slider-span">
                          <p>Doral, Florida</p>
                        </span>
                        <span className="slider-span">
                          <p>78345</p>
                        </span>
                      </div>
                      <h1>
                        <span className="color-b">204 </span>
                        Rino
                        <br className="desktop_only" />
                        Venda Road Five
                      </h1>
                      <Link to="/rinoVenda">
                        <button>rent | $ 13.000</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="text">
                <div className="slider-content" id="slider-content-1">
                  <div className="slider-description">
                    <div className="slider-bg">
                      <div className="slider-location">
                        <span className="slider-span">
                          <p>Doral, Florida</p>
                        </span>
                        <span className="slider-span">
                          <p>78345</p>
                        </span>
                      </div>
                      <h1>
                        <span className="color-b">204 </span>
                        Alira
                        <br className="desktop_only" />
                        Roan Road One
                      </h1>
                      <Link to="/aliraRoan">
                        <button>rent | $ 14.000</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="text">
                <div className="slider-content" id="slider-content-1">
                  <div className="slider-description">
                    <div className="slider-bg">
                      <div className="slider-location">
                        <span className="slider-span">
                          <p>Doral, Florida</p>
                        </span>
                        <span className="slider-span">
                          <p>78345</p>
                        </span>
                      </div>
                      <h1>
                        <span className="color-b">204 </span>
                        Biscayne
                        <br className="desktop_only" />
                        Boulevard
                      </h1>
                      <Link to="/biscayneBoulevard">
                        <button>rent | $ 14.000</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="text">
                <div className="slider-content" id="slider-content-1">
                  <div className="slider-description">
                    <div className="slider-bg">
                      <div className="slider-location">
                        <span className="slider-span">
                          <p>Doral, Florida</p>
                        </span>
                        <span className="slider-span">
                          <p>78345</p>
                        </span>
                      </div>
                      <h1>
                        <span className="color-b">245 </span>
                        <br className="desktop_only" />
                        Nosara
                      </h1>
                      <Link to="/nosara">
                        <button>rent | $ 3,750</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
