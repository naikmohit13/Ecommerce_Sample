import React from "react";
import './style.css'
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom';
import Home from "./Home";
import Usersignin from "./Usersignin";
import Usersignup from "./Usersignup";

export default function Navbar() {
  return (
    <>
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg Navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            E-commerce
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
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" to="#">
                      1st Product
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                    2nd Product
                    </a>
                  </li>
                  <li>
                    {/* <hr className="dropdown-divider" /> */}
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                    3rd Product
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Order Form
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Gallery</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/signin'>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/signup'>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       <Routes> 
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signin' element={<Usersignin/>}/>
        <Route exact path='/signup' element={<Usersignup/>}/>
      </Routes> 
      </BrowserRouter>
    </>
  );
}
