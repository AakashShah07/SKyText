import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li> */}
            </ul>

            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "dark" : "light"
              }`}
            >
              <input
                type="checkbox"
                className="form-check-input"
                onClick={props.toggleMode}
                id="customSwitch1"
              />
              <label
                className="form-check-label"
                htmlFor="customSwitch1"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
              >
                Enable Dark mode
              </label>
            </div>
            {/* Pink*/}
            {/* <div className={`form-check form-switch text-${props.mode==='dark'?'dark':'light'}`}>
              <input
                type="checkbox"
                className="form-check-input"
                onClick={props.togglePinkMode}
                id="customSwitch1"
              />
              <label className="form-check-label" style={{color: props.mode === "dark" ? "white" : "#865592"}} htmlFor="customSwitch1">
                Enable Pink mode
              </label>
            </div> */}

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.prototype = {
  title: PropTypes.string,
};
