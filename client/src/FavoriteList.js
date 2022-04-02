import React, {   createContext, useEffect, useState } from 'react';
import {FaHeart} from 'react-icons/fa';
import '../src/FavoriteList.css';
//import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
//import { v4 as uuidv4 } from 'uuid';

let favoritesList = [];
console.log(favoritesList);



const Favoriting = ({uri}) => {

    // let RecipeID = uri.split('#')[1];
    // let userID = 'USER';
    // const favoriteID = 'favorite-'+RecipeID+'-'+userID;

    // const initialFavorite = localStorage.getItem(favoriteID)
    // let [favorite, setFavorite] = useState(initialFavorite);
    // useEffect(() => {
    //     localStorage.setItem(favoriteID, (favorite));
    // })
    
    // function addToFavorites() {
    //     favoritesList.push(favoriteID);
    // }
        
        
        // let favoritesList = [];
        // 
        // //console.log(favoriteID, initialFavorite);
    
        // 
        
        
        // useEffect(() => {
        //     localStorage.setItem(favoriteID, (favorite));
        //     favoritesList.push(favorite);
        //     console.log(favoriteID)
    //console.log(favoriteID);
    function toggle(){
        console.log('toggled');
    }
    
    


    return (
        <>
        <label>
            <input type='radio' name='favorite' onClick={()=>toggle()} className='heart__radio'></input>
        <FaHeart id='heart_button' color='red' />
        </label>
        </>
    )
}

export default Favoriting;