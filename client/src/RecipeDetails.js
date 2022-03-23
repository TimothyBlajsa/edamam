//import React from 'react';
import style from './recipe.module.css';
import {v4 as uuidv4} from "uuid";
import { useState } from 'react';
//import StarRatingComponent from 'react-star-rating-component';
import {Rating} from 'react-simple-star-rating';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RecipeDetails = ({ingredients, healthLabels, calories, totalNutrients, url}) => {
    //console.log(totalNutrients.CA);
    //console.log(typeof(totalNutrients));
    //const NutrientArray = Object.values(totalNutrients);
    const nutriKeys = Object.keys(totalNutrients);
    //console.log(NutrientArray);
    console.log(healthLabels);
    
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate)
    }

    console.log({rating});
    
    return (
        <>
        <div key={uuidv4()}>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
                >
                    <Typography sx={{fontFamily:'Museo-Sans',}}>Ingredients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'} sx={{fontFamily:'Lato',}}>
                        <ul key={uuidv4()} className={style.ingredientList}>
                            {ingredients.map(ingredient => (
                                <li key={uuidv4()}className={style.ingredientText}>{ingredient.text}</li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
                >
                    <Typography sx={{fontFamily:'Museo-Sans',}}>Health Labels</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'} sx={{fontFamily:'Lato',}}>
                        <ul key ={uuidv4()} className={style.healthLabelsList}>
                            {healthLabels.map(healthLabels=>(
                                <li key={uuidv4()}>{healthLabels}</li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
            
                >
                    <Typography sx={{fontFamily:'Museo-Sans',}}>Calories</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'} sx={{fontFamily:'Lato',}}>
                        <p className={style.calorieText}>Total Calories: {calories}</p>
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
                >
                    <Typography sx={{fontFamily:'Museo-Sans',}}>Link</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontFamily:'Lato',}}>
                            <a href={url} target="_blank" rel="noopener noreferrer">Full Recipe</a>
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
                >
                    <Typography sx={{fontFamily:'Museo-Sans',}}>Nutrients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'} sx={{fontFamily:'Lato',}}>
                    <ul key ={uuidv4()} className={style.healthLabelsList}>
                            {nutriKeys.map(key=>(
                                <li key={uuidv4()}>{totalNutrients[key].label} ({totalNutrients[key].quantity.toFixed(2)} {totalNutrients[key].unit})</li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
        </Accordion>
        </div>
        
        
        <div className={style.StarBox}>
            <Rating onClick={handleRating} ratingValue={rating}></Rating>
        </div>
        
            </>
    )
};

export default RecipeDetails;

