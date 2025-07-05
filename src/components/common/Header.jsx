import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <header>
        <div className="container">
          <Navbar expand="lg">
            <Link to={'/'} className="logo">
              <span>UrbanEdge</span> Constructions
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to={'/'} className="nav-link">Home</Link>
                <Link to={'/about'} className="nav-link">About Us</Link>
                <Link to={''} className="nav-link">Services</Link>
                <Link to={''} className="nav-link">Project</Link>
                <Link to={''} className="nav-link">Blog</Link>
                <Link to={''} className="nav-link">Contact Us</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </div>
  )
}

export default Header