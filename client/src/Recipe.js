import React, {useState} from "react";
import RecipeDetails from "./RecipeDetails"
import style from './recipe.module.css';
import Favoriting from '../../client/src/FavoriteList'

const Recipe = ({title,calories,image,ingredients,healthLabels,totalNutrients,url,uri, favorites}) =>{
	const [show, setShow] = useState(false)

	const recObj = {
		title,
		calories,
		image,
		ingredients,
		healthLabels,
		totalNutrients,
		url,
		uri,
	}

	return(
		<div className={style.recipe} data-uri={uri}>
			
			<h1>
				{title}
				<Favoriting uri={uri} favorites={favorites} recObj={recObj}/>
			</h1>
			<img className={style.image} src={image} alt=""/>

			<button onClick={()=> setShow(!show)} className={style.recipeDetails}>Details</button>
			{show && <RecipeDetails ingredients={ingredients} healthLabels={healthLabels} calories={calories} totalNutrients={totalNutrients} url={url} uri={uri}/>}			
			
		</div>
	);

}
export default Recipe;



