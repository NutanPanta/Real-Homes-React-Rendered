import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Agents extends Component {
  userData;
  constructor(props) {
    super(props);
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
    this.openSlideMenu = this.openSlideMenu.bind(this);
    this.closeSlideMenu = this.closeSlideMenu.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.openSlideSearch = this.openSlideSearch.bind(this);
    this.closeSlideSearch = this.closeSlideSearch.bind(this);
  }
  openSlideMenu() {
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("logo").style.display = "none";
  }
  closeSlideMenu() {
    document.getElementById("side-menu").style.display = "none";
    document.getElementById("logo").style.display = "block";
  }
  openRegister() {
    document.getElementById("forma").style.width = "0";
  }
  openSlideSearch() {
    document.getElementById("forma").style.width = "50%";
  }
  closeSlideSearch() {
    document.getElementById("forma").style.width = "0";
    document.getElementById("register").style.display = "none";
    document.getElementById("login-background").style.display = "none";
    document.getElementById("side_nav-login-background").style.display = "none";
  }
  openLogin() {
    document.getElementById("login-background").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("side_nav-login-background").style.display =
      "block";
    document.getElementById("register").style.display = "none";
  }
  openRegister() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login-background").style.display = "none";
  }
  state = {
    search: ""
  };

  onChange = event => {
    this.setState({ search: event.target.value });
  };

  onSearch = () => {
    axios
      .get(`http://localhost:8000/${this.state.search}`)
      .then(response => {
        let data = response.data;
        console.log(data);
        let forma = document.querySelector("#forma");
        let html = "";
        data.forEach(element => {
          html += `
                    <div>
                     <img src="images/${element.image}"/>
                     <h1>${element.title}</h1>
                     <h1>${element.description}</h1>
                    </div>
                    `;
        });
        forma.innerHTML = html;
      })
      .catch(error => {
        let forma = document.querySelector("#forma");
        let html = "";
        html += `
                <h1>The ${this.state.search} was not found. </h1>
                `;
        forma.innerHTML = html;
      });
  };

  // Form Values //
  onChangeusername(e) {
    this.setState({ username: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  // React lifeCycle //
  compoundDidMount() {
    this.userDate = JSON.parse(localStorage.getItem("LoginData"));

    if (localStorage.getItem("LoginData")) {
      this.setState({
        username: this.userData.username,
        password: this.userData.password
      });
    } else {
      this.setState({
        username: "",
        password: ""
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("LoginData", JSON.stringify(nextState));
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.props);
  }
  render() {
    return (
      <header className="agentsheader">
        <div className="container">
          <nav className="nav">
            <span className="open-slide">
              <Link to="" onClick={this.openSlideMenu}>
                <i className="fas fa-bars"></i>
              </Link>
            </span>
            <div id="logo">
              <Link to="../../pages/Home.js">
                <img src="img/logo.png" alt="..." />
              </Link>
            </div>
            <div className="list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/property">Property</Link>
                </li>
                <li>
                  <Link to="/agents" className="active-nav">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <div id="login">
                <div className="login-icon">
                  <button onClick={this.openLogin}>
                    <i className="fas fa-user-circle"></i>
                  </button>
                </div>
                <div id="login-background">
                  <div className="login-flex">
                    <h2>Login</h2>
                    <Link
                      onClick={this.closeSlideSearch}
                      className="times-button"
                    >
                      &times;
                    </Link>
                  </div>
                  <div className="user-password">
                    <input
                      type="text"
                      placeholder="Username"
                      required=""
                      value={this.state.username}
                      onChange={this.onChangeusername}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required=""
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="login-btn">
                    <button onClick="submit">Login</button>
                  </div>
                  <div className="register">
                    <h4>
                      <Link onClick={this.openRegister}>
                        New User?Register Now
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <form id="Register">
                <div id="register">
                  <div id="register-background">
                    <div className="login-flex">
                      <div className="login-flex">
                        <h2>Register</h2>
                        <Link
                          onClick={this.closeSlideSearch}
                          className="times-button"
                        >
                          &times;
                        </Link>
                      </div>
                      <Link
                        onClick={this.closeSlideSearch}
                        className="times-button"
                      >
                        &times;
                      </Link>
                    </div>
                    <div className="user-register">
                      <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        required=""
                      />
                      <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        required=""
                      />
                      <input
                        id="repassword"
                        type="password"
                        placeholder="Re-Password"
                        required=""
                      />
                      <input
                        id="email"
                        type="email"
                        placeholder="Emial"
                        required=""
                      />
                    </div>
                    <div className="register-btn">
                      <button id="local_register">Register</button>
                    </div>
                    <div className="login_page">
                      <h4>
                        <Link to="" onClick={this.openLogin}>
                          Already Have a Account?Login
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </form>

              <div className="search" onClick={this.openSlideSearch}>
                <i className="fa fa-search"></i>
              </div>
            </div>
          </nav>
          <div className="side-navigation">
            <div className="container">
              <div id="side-menu">
                <nav className="side_nav-list">
                  <div className="side_nav-logo">
                    <Link to="/">
                      <img src="img/logo.png" alt="..." />
                    </Link>
                  </div>
                  <div className="login-cross">
                    <div className="side_nav-right">
                      <div
                        id="side_nav-login"
                        className="side_nav-login"
                        onClick={this.openLogin}
                      >
                        <Link to="#">
                          <i
                            className="fas fa-user-circle"
                            style={{ color: "#000" }}
                          ></i>
                        </Link>
                      </div>
                      <div id="side_nav-login-background">
                        <div className="login-flex">
                          <h2>Login</h2>
                          <Link
                            onClick={this.closeSlideSearch}
                            className="times-button"
                          >
                            &times;
                          </Link>
                        </div>
                        <div className="user-password">
                          <input
                            type="text"
                            placeholder="Username"
                            required=""
                            value={this.state.username}
                            onChange={this.onChangeusername}
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            required=""
                            value={this.state.password}
                            onChange={this.onChangePassword}
                          />
                        </div>
                        <div className="login-btn">
                          <button onClick="submit">Login</button>
                        </div>
                        <div className="register">
                          <h4>
                            <Link to="#">New User?Register Now</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="cross">
                      <Link className="btn-close" onClick={this.closeSlideMenu}>
                        &times;
                      </Link>
                    </div>
                  </div>
                  <div className="side_nav-list">
                    <ul>
                      <li className="side_nav-home">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="side_nav-about">
                        <Link to="/about">About</Link>
                      </li>
                      <li className="side_nav-property">
                        <Link to="/property">Property</Link>
                      </li>
                      <li
                        className="side_nav-agents"
                        className="active-side_nav"
                      >
                        <Link to="/agents">Agents</Link>
                      </li>
                      <li className="side_nav-blog">
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li className="side_nav-contact">
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div id="forma">
            <div className="row">
              <div className="col-md-3">
                <div className="search-header">
                  <h2>Search Property</h2>
                  <Link onClick={this.closeSlideSearch}>&times;</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-keyword">
                  <label htmlFor="keyword-input">Keyword</label>
                  <input
                    type="text"
                    onChange={this.onChange}
                    // id="keyword-input"
                    placeholder="Keyword"
                    autoComplete="off"
                    autoFocus=""
                    required
                  ></input>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-details">
                  <div className="type">
                    <label htmlFor="form-type">Type</label>
                    <select id="form-type">
                      <option>All Type</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                  <div className="city">
                    <label htmlFor="form-city">City</label>
                    <select id="form-city">
                      <option>All City</option>
                      <option>Alabama</option>
                      <option>Arizona</option>
                      <option>California</option>
                      <option>Colorado</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-details">
                  <div className="bedrooms">
                    <label htmlFor="form-bedrooms">Bedrooms</label>
                    <select id="form-bedrooms">
                      <option>Any</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="garages">
                    <label htmlFor="form-garages">Garages</label>
                    <select id="form-garages">
                      <option>Any</option>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-details">
                  <div className="bathrooms">
                    <label htmlFor="form-bathrooms">Bathrooms</label>
                    <select id="form-bathrooms">
                      <option>Any</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="min_price">
                    <label htmlFor="form-min_price">Min Price</label>
                    <select id="form-min_price">
                      <option>Any</option>
                      <option>$50,000</option>
                      <option>$100,000</option>
                      <option>$150,000</option>
                      <option>$200,000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-submit">
                  <button
                    onClick={this.onSearch}
                    className="form-button"
                    type="submit"
                  >
                    Search Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
