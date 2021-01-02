import React, { useState } from 'react';

import "./Header.css";
import Navbar from '../Navbar';
import SearchBox from '../SearchBox';
import FilterBox from '../FilterBox';

const Index = (props) => {
    const [filter, setFilter] = useState('movies');
    return (
        <header className="Header">
        	<div className="Header__Top">
        		<strong className="Header__Title">Movie<span className="Header__Title--Danger">flix</span></strong>
        		{/*SearchBox*/}
        		<SearchBox/>
        		{/*Navbar*/}
        		<Navbar/>
        	</div>
        	<div className="Header__Bottom">
                <FilterBox onFilterChanged={filter => setFilter(filter)}/>   
            </div>
        </header>
    )
}

export default Index;