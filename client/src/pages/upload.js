import React from 'react';
import RecipeForm from '../components/form-data';

const Upload = () => {
//    const getInputValue = (event) => {
//     const userValue = event.target.value;
//     console.log(userValue);
//     return userValue;
//    }
   
 
//    localStorage.setItem('message', 'this is a message');
//    console.log(localStorage.getItem('message'));
   
    
    return (
        <>
            <div className='App'>
                <h1>Upload your own recipe</h1>
                <p></p>
                {/*<input type='text' onClick={getInputValue} className='search-bar'/>*/}
                <RecipeForm></RecipeForm>
            </div>
            
        </>
    )
}

export default Upload;