import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#home">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
     
            <li className="nav-item">
              <Link className="nav-link" to='/contact'>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/user/Ned Navigator'>User</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/login'>Login</Link>
            </li>

          </ul>
        </div>
      </nav>  
    );
}


export default NavBar;