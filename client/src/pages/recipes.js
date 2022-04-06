import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import '../App.css';
import Recipe from '../Recipe';
import axios from 'axios';
//import { createContext, useContext } from 'react';
import Favoriting from '../FavoriteList';

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

// const [favorites, setFavorites] = useState([]);
// //console.log(setFavorites);

//         useEffect(() => {
//             const recipeFavorites = (
//                 localStorage.getItem('app-favorites')
//             );
        
//             if (recipeFavorites){
//                 setFavorites(recipeFavorites);
//             }
//         }, []);
        
//         const saveToLocalStorage = (items) => {
//             localStorage.setItem('app-favorites', (items));
//         };
        
//         const addFavoriteRecipe = (uri) => {
//             const newFavoriteList = [...favorites, uri];
//             setFavorites(newFavoriteList);
//             saveToLocalStorage(newFavoriteList);
//         };
        
//         const removeFavoriteRecipe = (recipe) => {
//             const newFavoriteList = favorites.filter(
//                 (favorite) => favorite.recipe.id !== recipe.id
//             );
        
//             setFavorites(newFavoriteList);
//             saveToLocalStorage(newFavoriteList);
//         };
        
		//Create object to be passed as prop to FavoriteList
		//Object will store URI's and boolean value indicating whether it is a favorite or not
		//Store URI's as object's property
		//Favorites is a LOOKUP TABLE
        const favorites = JSON.parse(localStorage.getItem('favoritesArray'));
		

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
			favorites={favorites}
			
		/>
		))}
	</div>
	<div className='footer'>POWERED by EDAMAM</div>

	</div>
);
}

export default App;

