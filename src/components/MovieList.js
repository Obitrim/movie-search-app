import React from "react";
import "../styles/movie.css";
import Movie from "./Movie.js";

export default function MovieList({ movies }){
	if(movies.length === 0) return null;
	
	return (
		<>
			<p className="movie-list-title">Sharing a few of our favorite movies</p>
			<ul className="l-movie-list">
				{movies.map((movie, index) => <Movie movie={movie} key={index}/>)}
			</ul>
		</>
	)
}