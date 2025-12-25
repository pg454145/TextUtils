import React from 'react'
import logo from './favicon.png (2).png';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-centre" to="/"><img src={logo}alt="logo" width="30" height="30" className="me-2"/>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className='d-flex'>
            <input className='form-control me-2' type="Search" placeholder="Search" aria-label="Search" />
            <button className='btn btn-primary' type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>


        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}


Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};

