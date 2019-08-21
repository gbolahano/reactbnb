import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const style = {
    color: '#fd5c63',
    fontWeight: 'bold'
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" style={style}>Airbnb</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to="/user" className="nav-link bold-text">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/user/listing/create" className="nav-link bold-text">Add Listing</Link>
            </li>
            <li className="nav-item">
              <Link to="/user/listings/all" className="nav-link bold-text">Your Listings</Link>
            </li>
            <li className="nav-item">
              <Link to="/user/profile" className="nav-link bold-text">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link bold-text">logout</Link>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;