import React, {useState, useRef} from "react";
import "../styles/search-box.css";

export default function SearchBox({search}){
	const searchForm = useRef(null);
	const [searchValue, setSearchValue] = useState("");

	function resetInputField(){
		searchForm.current.reset();
	}

	function handleChangeInSearchValue(evt){
		setSearchValue(evt.target.value);
	}

	function callSearchFunction(evt){
		evt.preventDefault();
		search(searchValue);
		resetInputField();
	}

	return (
		<form action="#" className="c-search-form" ref={searchForm}>
			<input 
				className="c-search-form__input" 
				type="search" 
				name="key" 
				placeholder="Search for movies here" 
				required
				onChange={handleChangeInSearchValue}
				/>
			<button 
				type="submit" 
				className="c-search-form__submit-btn"
				onClick={callSearchFunction}
				>
				Search
			</button>
		</form>
	)
}