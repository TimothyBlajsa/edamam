import React, {   createContext, useEffect, useState } from 'react';
import {FaHeart} from 'react-icons/fa';
import '../src/FavoriteList.css';
import {useContext} from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {v4 as uuidv4} from 'uuid';



const newArr = [];
console.log(newArr)
const Favoriting = ({uri}) => {  
    let RecipeID = uri.split('#')[1];
    let userID = 'USER';
    //fav.push('hi');
   // console.log(fav)

   //ATTEMPT 1 currently being used
//    function onFav() {
//     if (document.querySelector('#accept').checked === true) {
//         console.log('favorited-'+'RECIPEID');
//         document.querySelector('#heart_button').style.color = 'red';
//         newArr.push(uri)
//         console.log(newArr)
//     }
//     else {
//         console.log('unfavorited'+'RECIPEID');
//         document.querySelector('#heart_button').style.color = 'black';
//     }
// }

//ATTEMPT 2.5 commented out for now

//    //initialize fav value from localstorage
//    const favoritesSTR = localStorage.getItem('favorites');
//    let fav = false;
//    if (favoritesSTR) {
//     const favorites = favoritesSTR.JSON.parse();
//     fav = favorites.includes(uri)
//     console.log(favorites)
//    }
  // document.querySelector('#accept').checked = fav;

  //ATTEMPT 2

    // const favoriteID = 'favorite-'+RecipeID;
    // //console.log(favoriteID);
    // const initialFavorite = localStorage.getItem(favoriteID);
    // //console.log(initialFavorite);

    // const [favorite, setFavorite] = useState(initialFavorite);

    // useEffect(()=> {
    //     localStorage.setItem(favoriteID, [(favorite)]);
    // })
   
//    function toggle(){
//     if (document.querySelector('#accept').checked === true) {
//         console.log('favorited-'+'RECIPEID');
//         document.querySelector('#heart_button').style.color = 'red';
//     }
//     if (document.getElementById('accept').checked === false) {
//         console.log('unfavorited'+'RECIPEID');
//         document.querySelector('#heart_button').style.color = 'black';
//     }}

//var btnHrt= document.getElementById('heart_button');
const favorites = {};
    function buttonClick(event){
        console.log(uri);
        var myIndex = newArr.indexOf(uri)
        var btn_list = document.getElementsByName('heart_btn');
        //console.log(btn_list);
        //const buttons = [...btn_list].map(i => {uuidv4()});
        //console.log(buttons)
        //console.log(myIndex)
        // if (document.getElementsByName('heart_btn')[1].style.color === 'red'){
        //             document.getElementsByName('heart_btn')[1].style.color = 'grey'
        //             console.log('item removed from favorites')
        //             //newArr.filter(uri)
        //             if (myIndex !== -1){
        //                 newArr.splice(myIndex, 1)
        //             }
        //         }
        //         else {
        //             document.getElementsByName('heart_btn')[1].style.color = 'red'
        //             console.log('item added to favorites');
        //             newArr.push(uri)
        //         }



        //Working Code : DO NOT DELETE
        const el = document.querySelector(`[data="${uri}"]`);
        //console.log(el);
        //console.log(favorites[uri]);
        // const el = document.querySelector(uri);
        if (favorites[uri]){
            el.style.fill = 'grey';
            favorites[uri] = false;
        }
        else {
            el.style.fill = 'red';
            favorites[uri] = true;
        } 
       // console.log(favorites[uri]);






        
        // buttons.map(i => {
        //     if (document.getElementsByName('heart_btn')[i].style.color === 'red'){
        //         document.getElementsByName('heart_btn')[i].style.color = 'grey'
        //         console.log('item removed from favorites')
        //         //newArr.filter(uri)
        //         if (myIndex !== -1){
        //             newArr.splice(myIndex, 1)
        //         }
        //     }
        //     else {
        //         document.getElementsByName('heart_btn')[i].style.color = 'red'
        //         console.log('item added to favorites');
        //         newArr.push(uri)
        //     }
        //     return 'hi'
        //})
        // //document.querySelector('#heart_button').style.color ='red';
        // document.querySelector('heart_button').toggle(AiOutlineHeart)
        // newArr.push(uri)
        // console.log(newArr)
        
        //console.log(newArr)
    }

    var hrt = document.getElementsByName('heart_btn');
    
    //console.log(hrt)
    //hrt[0].style.color = 'red';
    function testing(){
        console.log(document.getElementsByName('heart_btn'));
        document.getElementsByName('heart_btn')[0].style.color = 'red';
    }
    //ATTEMPT 3 commented out for now

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
        
    // <input type='checkbox' name='accept'  onClick={()=> {setFavorite('yes'); onFav(); console.log(favorite)}} className='heart__check' id='accept' value='yes'></input>


    return (
        <>
        
        
            
            <span className='heart_button_container' >
        <AiFillHeart color='grey' id='heart_button'  onClick={(event)=>buttonClick(event)} data={uri} name='heart_btn'/>
        </span>
        
        </>
    )
}

export default Favoriting;