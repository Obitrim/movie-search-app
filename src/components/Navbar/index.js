import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import "./Navbar.css";

const Index = (props) => {
  return (
    <nav className="Navbar">
    	<NavLink to="/" activeClassName="NavLink--Active" className="NavLink" exact>
    		<HomeIcon/>
    		Home
    	</NavLink>
    	<NavLink to="/favorite" activeClassName="NavLink--Active" className="NavLink">
    		<FavoriteIcon/>
    		Favorites
    	</NavLink>
    	<NavLink to="/profile" activeClassName="NavLink--Active" className="NavLink NavLink--Profile">
    		<AccountCircleIcon/>
    	</NavLink>
    </nav>
  )
}

export default Index;