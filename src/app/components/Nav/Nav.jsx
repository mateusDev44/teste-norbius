import React, { Component } from "react";
import "./Nav.scss";
import logo from "../../../assets/images/logo/logo.png";
import perfil from "../../../assets/images/faces/natalina.jpg";
import brazil from "../../../assets/images/icones/bandeira-do-brasil.png";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} className="img-fluid" alt="" />
            </a>
            <div className="container-fluid">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link home" aria-current="page" href="/">
                    <i className="bi bi-house-door-fill"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link clock" href="/">
                    <i className="bi bi-clock"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Mananger
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                    src={brazil}
                    className="rounded-circle"
                    id="bandeira"
                    alt=""
                  />
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-flex">
                  <p
                    className="text-white mt-2"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    Natalina
                  </p>
                  <img
                    src={perfil}
                    className="rounded-circle"
                    id="perfil"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
