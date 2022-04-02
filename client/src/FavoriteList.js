import React, {   createContext, useEffect, useState } from 'react';
import {FaHeart} from 'react-icons/fa';
import '../src/FavoriteList.css';
import {useContext} from 'react';
//import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
//import { v4 as uuidv4 } from 'uuid';
//import recipes from '../src/pages/recipes'
//let favoritesList = [];
//console.log(favoritesList);
//console.log(document.querySelector('#accept'));

// function toggle(uri){
        
        
//     if (document.querySelector('#accept').checked === true) {
//         console.log('favorited-'+'RECIPEID');
//         document.querySelector('#heart_button').style.color = 'red';
//     }
//     else {
//         console.log('unfavorited'+'RECIPEID');
//         document.querySelector('#heart_button').style.color = 'none';
//     }
//     //put array in localStorage using json.stringify
//     //setItem after stringify
//     //take array out using json.parse
const array = [];
console.log(array);

console.log(array.filter(checkFav));

function checkFav(){
    return document.querySelector('#accept').checked === true;
}
// }

const Favoriting = ({uri, fav}) => {
  //const favoriteList = useContext(userContext);  
    let RecipeID = uri.split('#')[1];
    let userID = 'USER';
    //fav.push('hi');
   // console.log(fav)
   array.push(uri)
  
//    array.map(e => {
//        if (document.querySelector('#accept').checked === true){
//            console.log('checked');
//        }
//        else {
//            console.log('not checked');
//        }
//        return console.log('hi')
//    })
    
    

    // const favoritesList = localStorage.getItem('favoritesList').JSON.parse()
    // console.log(favoritesList);
    // let [favorite, setFavorite] = useState(favoritesList);
    // useEffect(() => {
    //     localStorage.setItem('favoritesList', (favorite));
    // })
    
    // function addToFavorites() {
    //     favoritesList.push(favoriteID);
    // }
    
        const [favs, setFavs] = useState([]);
        

        const addItem = event => {
            console.log(event);
            event.preventDefault();
            const favoriteID = 'favorite-'+RecipeID+'-'+userID+'-'+event.target.value;
            console.log(favoriteID);
            favs.push(favoriteID);
            setFavs(favs);
            console.log(favs);
        };
    
        
        
        // let favoritesList = [];
        
        //console.log(favoriteID, initialFavorite);
    
        
        
        
        // useEffect(() => {
        //     localStorage.setItem(favoriteID, (favorite));
        //     favoritesList.push(favorite);
        //     console.log(favoriteID)
        // })
    //console.log(favoriteID);
    //const fav = document.querySelector('#accept').checked;
    //console.log(RecipeID)
    // let array = [];
    
    // array.push(RecipeID);
    // console.log(array)
    
    
    


    return (
        <>
        <label >
            <input type='checkbox' name='accept' onClick={(e)=>addItem(e)} className='heart__check' id='accept' value='yes'></input>
        <FaHeart id='heart_button'  />
        </label>
        </>
    )
}

export default Favoriting;