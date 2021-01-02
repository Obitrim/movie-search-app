import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './RouterView.css';
import HomeView from '../../views/Home';
import ProfileView from '../../views/Profile';
import SearchView from '../../views/Search';
import FavoriteView from '../../views/Favorite';

const Index = (props) => {
  return (
    <main className="RouterView">
    	<Switch>
    		<Route path="/" component={HomeView} exact/>
    		<Route path="/favorite" component={FavoriteView}/>
    		<Route path="/search" component={SearchView}/>
    		<Route path="/profile" component={ProfileView}/>
    	</Switch>
    </main>
  )
}

export default Index;