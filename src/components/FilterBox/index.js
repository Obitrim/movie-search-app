import React, { useState, useEffect } from 'react';
import './FilterBar.css';
import PropTypes from 'prop-types';

const Index = ({ onFilterChanged }) => {
	const [activeFilter, setActiveFilter] = useState('movies');

	useEffect(() => {
		onFilterChanged(activeFilter);
	}, [activeFilter]);

	return (
		<div className="FilterBar">
			<button 
				type="button" 
				onClick={() => setActiveFilter('movies')}
				className={`FilterBar__Btn ${activeFilter === 'movies' && 'FilterBar__Btn--Active'}`} 
				> Movies
			</button>
			<button 
				type="button" 
				onClick={() => setActiveFilter('series')}
				className={`FilterBar__Btn ${activeFilter === 'series' && 'FilterBar__Btn--Active'}`} 
				> Series
			</button>
			<button 
				type="button" 
				onClick={() => setActiveFilter('episodes')}
				className={`FilterBar__Btn ${activeFilter === 'episodes' && 'FilterBar__Btn--Active'}`} 
				> Episode
			</button>
		</div>
	)
}

Index.propTypes = {
	onFilterChanged: PropTypes.func
};

Index.defaultProps = {
	onFilterChanged: () => {
		alert('Provide callback to execute when filter changes');
	}
}

export default Index;