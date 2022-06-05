import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Meal({ meal }) {
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=72920310c5b046bcb70821a0d20012d2&vegetarian`
            )
            .then((res) => {
                console.log(res.data);
                setImgUrl(res.data.image);
                return [];
            })
            .catch(() => {
                console.log('err');
            });
    }, [meal.id]);
    return (
        <article className="article">
            <h1>{meal.title}</h1>
            <img src={imgUrl} alt="recipes" />
            <ul>
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl} className="btn form-field">
                Go to recipe
            </a>
        </article>
    );
}

export default Meal;
