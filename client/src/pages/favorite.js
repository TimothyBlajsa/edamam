import React from 'react';
//import RecipeDetails from '../RecipeDetails';
import {v4 as uuidv4} from 'uuid';
//import Recipe from '../Recipe';
import { useEffect, useState } from 'react'
import '../App.css';
import Recipe from '../Recipe';
import axios from 'axios';
import {FaTrash} from 'react-icons/fa'


const Favorites = (recipe) => {
    // console.log(localStorage.getItem('favoritesArray'));
    // console.log(Recipe);
    function deleteFav(){
        console.log('deleted');
    }

        // const [recipes, setRecipes] = useState([]);
        // //const [search, setSearch] = useState("");
        // const [query, setQuery] = useState("chicken");
        // useEffect(() => {
        //     getRecipes(); // eslint-disable-next-line
        // }, [query])
        // const getRecipes = async () => {
        //     const response = await axios.get(`http://localhost:5000/recipes/${query}`);
        //     setRecipes(response.data);
        //     console.log(response.data)
        // };
    
    let favorites = JSON.parse(localStorage.getItem("favoritesArray"));
    let favs = Object.values(favorites);
    
    return (
    <>
        <div className='App'>
        <div className="recipes">
        
		{favs.map(recipe => (
		<Recipe
			key={uuidv4()}
			title={recipe.title}
			calories={parseFloat(recipe.calories).toFixed(2)}
			image={recipe.image}
			ingredients={recipe.ingredients}
			healthLabels={recipe.healthLabels}
			totalNutrients={recipe.totalNutrients}
			url={recipe.url}
			uri={recipe.uri}
			favorites={favorites}
			
		/>
        
		))}
	</div>
    </div>
    </>
    )
}

export default Favorites;