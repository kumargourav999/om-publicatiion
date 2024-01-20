import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import yourImage from './1705149806358.jpg';
import "./App.css";
const Navbar = () => {
  return (
    <div className='navdiv'>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <img className="logo" src={yourImage}></img>
        <Link className="na" to="/">
          OM Publication
        </Link>
        
          
        <div id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/journal">
                Journals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
