import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navbar.css";

const Index = (props) => {
  return (
    <nav className="Navbar">
    	<NavLink to="/" activeClassName="NavLink--Active" className="NavLink" exact>Home</NavLink>
    	<NavLink to="/favorite" activeClassName="NavLink--Active" className="NavLink">Favorite</NavLink>
    	<NavLink to="/search" activeClassName="NavLink--Active" className="NavLink">Search</NavLink>
    	<NavLink to="/profile" activeClassName="NavLink--Active" className="NavLink">Profile</NavLink>
    </nav>
  )
}

export default Index;