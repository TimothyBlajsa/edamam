import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import '../App.css';
import Recipe from '../Recipe';
import axios from 'axios';

const App = () => {

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("chicken");
useEffect(() => {
	getRecipes(); // eslint-disable-next-line
}, [query])
const getRecipes = async () => {
	const response = await axios.get(`http://localhost:5000/recipes/${query}`);
	setRecipes(response.data);
	console.log(response.data)
};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}

return (
	<div className="App">
	
	<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>
	<div className="recipes">
		{recipes.map(recipe => (
		<Recipe
			key={uuidv4()}
			title={recipe.recipe.label}
			calories={recipe.recipe.calories.toFixed(2)}
			image={recipe.recipe.image}
			ingredients={recipe.recipe.ingredients}
			healthLabels={recipe.recipe.healthLabels}
			totalNutrients={recipe.recipe.totalNutrients}
			url={recipe.recipe.url}
			uri={recipe.recipe.uri}
		/>

		))}
	</div>
	<div className='footer'>POWERED by EDAMAM</div>

	</div>
);
}

export default App;

