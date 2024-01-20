import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import yourImage from './1705149806358.jpg';
import "./App.css";
const Navbar = () => {
  return (
    <div className='navdiv'>
       <Link className="na" to="/">
          OM Publication Services
        </Link>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <img className="logo" src={yourImage}></img>
       
        
          
        <div id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-l" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-l" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-l" to="/contact">
                Contact
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-l" to="/journal">
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
