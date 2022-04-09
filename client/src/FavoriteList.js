import React, {   createContext, useEffect, useState } from 'react';
import '../src/FavoriteList.css';
import {AiFillHeart} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
import {v4 as uuidv4} from 'uuid';

let newArr = [];

const Favoriting = ({uri, favorites, recObj}) => {  
    //For later when integrating USER LOGIN and LOCALSTORAGE
    // let RecipeID = uri.split('#')[1];
    // let userID = 'USER';
    
    function buttonClick(event){
        
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
            favorites[uri] = undefined;
            delete(favorites[uri]);
        }
        else {
            el.style.fill = 'red';
            favorites[uri] = recObj;
        } 
       // console.log(favorites[uri]);

        console.table(favorites,uri);

        //Set favoritesArray in localstorage
        localStorage.setItem('favoritesArray', JSON.stringify(favorites));
    }

    //On click, check the state of the heart
    function checkHeart() {
        if (favorites[uri]) return "red";
        return "gray";
    }

    //For trash icon
    var timesClicked = 0;
	//const recItem = document.querySelector(`[data-uri="${uri}"]`);
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
			setTimeout(()=> {
			if (timesClicked%2===0){
                //favorites[uri] = recObj;
				return
			}
			else {
				console.log(timesClicked)
				console.log('run first function')
				document.querySelector(`[data-uri="${uri}"]`).style.visibility = 'hidden';
                // 
                buttonClick();
                //favorites[uri] = recObj;
			}
			
		},5000)
			console.table(favorites,uri);
			//console.table(favorites[uri])
		}
		// console.log('deleted item')
		// console.log(document.querySelector(`[data-uri="${uri}"]`))
		
		// document.querySelector(`[data-uri="${uri}"]`).style.display = 'none';
		
	}
    
    return (
        <>
            <span className='heart_button_container' >
                <AiFillHeart color={checkHeart()} id='heart_button'  onClick={(event)=>buttonClick(event)} data={uri} name='heart_btn'/>
            </span>
            <span className='trash_button_container'>
                <FaTrash onClick={()=>deleteFav()}/>
            </span>
        </>
    )
}

export default Favoriting;