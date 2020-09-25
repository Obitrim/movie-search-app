import React from "react";
import "../styles/movie.css";

const DEFAULT_PLACEHOLDER_IMAGE = "https://via.placeholder.com/200x180";

export default function Movie({movie}){

	return (
		<li className="c-movie c-movie--shadow">
			<h2 className="c-movie__title">{movie.Title}</h2>
			<img className="c-movie__poster" 
				src={!movie.Poster || movie.Poster === "N/A" 
					? DEFAULT_PLACEHOLDER_IMAGE
					: movie.Poster} 
				alt={movie.Title}
			/>
			<div className="c-movie__year">{`(${movie.Year})`}</div>
		</li>
	)
}