import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div class="container-fluid" id="nav-container">
      <nav className="container-fluid navbar navbar-expand-lg Navbar shadow px-2">
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
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Products
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {/* <a className="dropdown-item" to="#">
                      1st Product
                    </a> */}
                    <Link className="dropdown-item" aria-current="page" to="/men">Men</Link>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" to="#">
                    2nd Product
                    </a> */}
                    <Link className="dropdown-item" aria-current="page" to="/women">Women</Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                  <li>
                    {/* <a className="dropdown-item" to="#">
                    3rd Product
                    </a> */}
                    <Link className="dropdown-item" aria-current="page" to="/">Kids</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Order Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Gallery</Link>
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
      </div>
  )
}
