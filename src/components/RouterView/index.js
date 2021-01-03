import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './RouterView.css';
import HomeView from '../../views/Home';
import ProfileView from '../../views/Profile';
import FavoriteView from '../../views/Favorites';

const Index = (props) => {
  return (
    <main className="RouterView">
    	<Switch>
    		<Route path="/" component={HomeView} exact/>
    		<Route path="/favorite" component={FavoriteView}/>
    		<Route path="/profile" component={ProfileView}/>
    	</Switch>
    </main>
  )
}

export default Index;