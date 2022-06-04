import React from 'react';
import Meal from './Meal.jsx';

function MealList({ mealData }) {
    const nutrients = mealData.nutrients;

    return (
        <div>
            <section className="nutrients">
                <h1 style={{ color: '#939b4b' }}>Nutrients</h1>
                <ul className="ul-table">
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
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
