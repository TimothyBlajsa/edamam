import React from 'react';
import {v4 as uuidv4} from 'uuid';
import '../App.css';
import Recipe from '../Recipe';

const Favorites = (recipe) => {
    
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