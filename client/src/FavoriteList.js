import React, {   createContext, useEffect, useState } from 'react';
import '../src/FavoriteList.css';
import {AiFillHeart} from 'react-icons/ai';
import {v4 as uuidv4} from 'uuid';

let newArr = [];

const Favoriting = ({uri, favorites}) => {  
    //For later when integrating USER LOGIN and LOCALSTORAGE
    // let RecipeID = uri.split('#')[1];
    // let userID = 'USER';
    
    function buttonClick(event){
        console.log(uri);
        
        //Working Code : DO NOT DELETE

        //Make sure URI is saved for each heart icon
        //Find element that has unique URI and click is true
        const el = document.querySelector(`[data="${uri}"]`);

        /*
            For testing logs only
            console.log(el);
            console.log(favorites[uri]);
            const el = document.querySelector(uri);
        */

        //If uri is property of favorites and value is true, then toggle red to grey and make value false
        //Else toggle grey to red and make value true
        if (favorites[uri]){
            el.style.fill = 'grey';
            favorites[uri] = false;
        }
        else {
            el.style.fill = 'red';
            favorites[uri] = true;
        } 
       // console.log(favorites[uri]);

       //Make new array from the properties of the object
       newArr = Object.keys(favorites);
       //console.table(newArr)

       //TREAT AS MASTERLIST FOR LATER REFERENCE
       //Filter based on what is considered 'favorite'
       const favoritesArray = newArr.filter((uri)=>{
        return favorites[uri]
    })        
        console.table(favoritesArray);      
    }

    
    return (
        <>
            <span className='heart_button_container' >
                <AiFillHeart color='grey' id='heart_button'  onClick={(event)=>buttonClick(event)} data={uri} name='heart_btn'/>
            </span>
        </>
    )
}

export default Favoriting;