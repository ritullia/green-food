import React from 'react';
import Meal from './Meal.jsx';

function MealList({ mealData }) {
    const nutrients = mealData.nutrients;

    return (
        <div>
            <section className="nutrients">
                <h1>Nutrients</h1>
                <ul>
                    <li>Calories: {nutrients.calories}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates}</li>
                    <li>Fat: {nutrients.fat}</li>
                    <li>Protein: {nutrients.protein}</li>
                </ul>
            </section>
            <section className="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal}></Meal>;
                })}
            </section>
        </div>
    );
}

export default MealList;
