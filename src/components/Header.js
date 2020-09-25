import React from 'react';
import "../styles/header.css";

function Header({text}){

	return (
		<header className="c-header c-header--center-items">
			<h1 className="c-header__title">{text}</h1>
		</header>
	)
}

export default Header;