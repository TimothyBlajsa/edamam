import React, {useState} from "react";
import RecipeDetails from "./RecipeDetails"
import style from './recipe.module.css';
//import * as React from 'react';
import Favoriting from '../../client/src/FavoriteList'
import {FaPause, FaTrash} from 'react-icons/fa';
import {v4 as uuidv4} from 'uuid'
//import DeleteRecipe from '../../client/src/DeleteRecipe';

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
	//const el = document.querySelector(`[data="${uri}"]`);
	//console.log(el)
	var timesClicked = 0;
	//var removal;
	// function deleteItem(){
	// 	document.querySelector(`[data-uri="${uri}"]`).style.opacity = .5;
		
		
	// 		setTimeout(()=> {//el.style.fill = 'grey';
    //         // favorites[uri] = undefined;
    //         // delete(favorites[uri]);
	// 		console.log('run first function')
	// 		document.querySelector(`[data-uri="${uri}"]`).style.visibility = 'hidden';
	// 		})
		
	// }
	// function stopDelete(){

			
	// 		//this.cancel(deleteItem());
	// 		console.log('run second function')
	// 		document.querySelector(`[data-uri="${uri}"]`).style.opacity = 1;
	// 		document.querySelector(`[data-uri="${uri}"]`).style.visibility= 'visible';
	// }
	function deleteFav(){
		timesClicked++;

		if (timesClicked%2===0){
			
			
			 console.log('run second function')
			 //el.style.fill = 'grey';
				// favorites[uri] = undefined;
				// delete(favorites[uri]);
				document.querySelector(`[data-uri="${uri}"]`).style.opacity = 1;
				document.querySelector(`[data-uri="${uri}"]`).style.visibility = 'visible';
			
			return
			// document.querySelector(`[data-uri="${uri}"]`).style.opacity = 1;
			// document.querySelector(`[data-uri="${uri}"]`).style.visibility= 'visible';
		} else {
			document.querySelector(`[data-uri="${uri}"]`).style.opacity = .5;
			setTimeout(()=> {//el.style.fill = 'grey';
            // favorites[uri] = undefined;
            // delete(favorites[uri]);
			if (timesClicked%2===0){
				return
			}
			else {
				console.log(timesClicked)
				console.log('run first function')
				document.querySelector(`[data-uri="${uri}"]`).style.visibility = 'hidden';
			}
			
		},5000)
			
			//console.table(favorites[uri])
		}
		// console.log('deleted item')
		// console.log(document.querySelector(`[data-uri="${uri}"]`))
		
		// document.querySelector(`[data-uri="${uri}"]`).style.display = 'none';
		
	}
	//console.log(recObj);
	return(
		<div className={style.recipe} data-uri={uri}>
			
			<h1>
				{title}
				<Favoriting uri={uri} favorites={favorites} recObj={recObj}/>
				<FaTrash onClick={()=>{deleteFav()}}/>
			</h1>
			<img className={style.image} src={image} alt=""/>

			<button onClick={()=> setShow(!show)} className={style.recipeDetails}>Details</button>
			{show && <RecipeDetails ingredients={ingredients} healthLabels={healthLabels} calories={calories} totalNutrients={totalNutrients} url={url} uri={uri}/>}			
			
		</div>
	);

}
export default Recipe;



