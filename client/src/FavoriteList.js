import React, {   createContext, useEffect, useState } from 'react';
import {FaHeart} from 'react-icons/fa';
import '../src/FavoriteList.css';
import {useContext} from 'react';
//import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

function onFav() {
    if (document.querySelector('#accept').checked === true) {
        console.log('favorited-'+'RECIPEID');
        document.querySelector('#heart_button').style.color = 'red';
    }
    else {
        console.log('unfavorited'+'RECIPEID');
        document.querySelector('#heart_button').style.color = 'black';
    }
}
const Favoriting = ({uri}) => {  
    let RecipeID = uri.split('#')[1];
    let userID = 'USER';
    //fav.push('hi');
   // console.log(fav)
   
   //initialize fav value from localstorage
   const favoritesSTR = localStorage.getItem('favorites');
   let fav = false;
   if (favoritesSTR) {
    const favorites = favoritesSTR.JSON.parse();
    fav = favorites.includes(uri)
    console.log(favorites)
   }
  // document.querySelector('#accept').checked = fav;
   
   function toggle(){
    if (document.querySelector('#accept').checked === true) {
        console.log('favorited-'+'RECIPEID');
        document.querySelector('#heart_button').style.color = 'red';
    }
    if (document.getElementById('accept').checked === false) {
        console.log('unfavorited'+'RECIPEID');
        document.querySelector('#heart_button').style.color = 'black';
    }}


        // const [favs, setFavs] = useState([]);
        
        // //console.log(favs);
        // function addFav() {
        //     console.log(favs);
        //     favs.push(RecipeID);
        //     console.log(favs);
        // }
        // const addItem = event => {
        //     console.log(event);
        //     event.preventDefault();
        //     const favoriteID = 'favorite-'+RecipeID+'-'+userID+'-'+event.target.value;
        //     console.log(favoriteID);
        //     setFavs(favs);
        //     favs.push(favoriteID);
            
        //     console.log(favs);
        // };

        
        
    

    return (
        <>
        
        <label >
            <input type='checkbox' name='accept'  onClick={e => onFav(fav)} className='heart__check' id='accept' value='yes'></input>
        <FaHeart id='heart_button'  />
        </label>
        </>
    )
}

export default Favoriting;