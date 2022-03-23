import React, {   useEffect, useState } from 'react';
import './StarRating.css';
import { FaStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const StarRating = () => {
    

    const initialRatings = localStorage.getItem('rating');
    const [rating, setRating] = useState(initialRatings);
    const [hover, setHover] = useState(null);
    
     useEffect(() => {
          localStorage.setItem('rating', (rating));
     }, [rating]);
   
   

   

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
            <p>star is {rating}</p>
        </div>
    )
}

export default StarRating;

