import React, {   useEffect, useState } from 'react';
import './StarRating.css';
import { FaStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const StarRating = ({uri}) => {
    
    //Step 1: Get recipe's unique ID in datase.
    let recipeID = uri.split("#")[1];
    //Step 2: Get user's unique ID.
    let userID = "USER";
    //Step 3: Query "database" for user rating.
    const ratingID = 'rating-'+recipeID+'-'+userID;
    const initialRatings = localStorage.getItem(ratingID);

    console.log(ratingID,initialRatings);

    const [rating, setRating] = useState(initialRatings);
    const [hover, setHover] = useState(null);
    
     useEffect(() => {
          localStorage.setItem(ratingID, (rating));
     });//, [rating]
   
   

   

    return (
        <div className='star__radio'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                
                return (
                    <label key={uuidv4()}>
                        <input 
                            type='radio' 
                            name='rating' 
                            value={ratingValue} 
                            onClick={()=>setRating(ratingValue)} 
                            key={uuidv4()}/>
                        <FaStar 
                            className='star' 
                            size={25} 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            onMouseEnter={()=>setHover(ratingValue)}
                            onMouseLeave={()=>setHover(null)}
                            key={uuidv4()}
                        />
                    </label>
                );
            })}
           
        </div>
    )
}

export default StarRating;

