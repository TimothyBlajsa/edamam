import React, {   createContext, useEffect, useState } from 'react';
import {FaHeart} from 'react-icons/fa';
import '../src/FavoriteList.css';
import {useContext} from 'react';
//import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';



const newArr = [];
console.log(newArr)
const Favoriting = ({uri, handleFavoritesAdd}, props) => {  
    let RecipeID = uri.split('#')[1];
    let userID = 'USER';
    //fav.push('hi');
   // console.log(fav)
   function onFav() {
    if (document.querySelector('#accept').checked === true) {
        console.log('favorited-'+'RECIPEID');
        document.querySelector('#heart_button').style.color = 'red';
        newArr.push(uri)
        console.log(newArr)
    }
    else {
        console.log('unfavorited'+'RECIPEID');
        document.querySelector('#heart_button').style.color = 'black';
        newArr.pop(uri)
    }
}
//console.log(newArr)
//    //initialize fav value from localstorage
//    const favoritesSTR = localStorage.getItem('favorites');
//    let fav = false;
//    if (favoritesSTR) {
//     const favorites = favoritesSTR.JSON.parse();
//     fav = favorites.includes(uri)
//     console.log(favorites)
//    }
  // document.querySelector('#accept').checked = fav;
    const favoriteID = 'favorite-'+RecipeID;
    //console.log(favoriteID);
    const initialFavorite = localStorage.getItem(favoriteID);
    //console.log(initialFavorite);

    const [favorite, setFavorite] = useState(initialFavorite);

    useEffect(()=> {
        localStorage.setItem(favoriteID, [(favorite)]);
    })
   
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
            
            <input type='checkbox' name='accept'  onClick={()=> {setFavorite('yes'); onFav(); console.log(favorite)}} className='heart__check' id='accept' value='yes'></input>
        <FaHeart id='heart_button'  />
        </label>
        </>
    )
}

export default Favoriting;