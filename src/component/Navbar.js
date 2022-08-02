import React from "react";
import { Link } from "react-router-dom";
import ModeData from './Mode';
import "./Navbar.scss";
import "./Utils.css";

function Navbar({lMode, dMode, pMode, mode}) {

  return (
    <>
      <div className="topNav flex hc vc" style={{backgroundColor: `${mode.bg}`}} >
        <p style={{color: `${mode.color}`}} >Choose Mode : </p>
        <button className="mode-btn " style={{backgroundColor: `${ModeData.dark.bg}`}} onClick={dMode}></button>
        <button className="mode-btn " style={{backgroundColor: `${ModeData.pink.bg}`}} onClick={pMode}></button>
        <button className="mode-btn " style={{backgroundColor: `${ModeData.default.bg}`}} onClick={lMode}></button>
      </div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: `${mode.bg}`}} >
        <div className="container-fluid cont90">
          <Link className="navbar-brand navLogo" style={{color: `${mode.color}`}} to="/">
            myProjects
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
          <div className="collapse navbar-collapse navMenu" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" style={{color: `${mode.color}`}} aria-current="page" to="/">
                  Text Editor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: `${mode.color}`}} to="meme-generator">
                  MEME Generator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
