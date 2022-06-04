import React from 'react';
import { useState, useEffect } from 'react';

function Meal({ meal }) {
    const [imgUrl, setImgUrl] = useState('');
    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imgUrl} alt="recipe" />
            <ul>
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl}>Go to recipe</a>
        </article>
    );
}

export default Meal;
