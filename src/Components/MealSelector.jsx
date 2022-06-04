import { useEffect, useState } from 'react';
import axios from 'axios';
import MealList from './MealList';

function MealSelector() {
    const [mealData, setMealData] = useState(null);
    const [caloriesValue, setCaloriesValue] = useState(2500);

    useEffect(() => {
        axios
            .get(
                `https://api.spoonacular.com/mealplanner/generate?apiKey=6bfec5629ef040a99ea07c1a7cb12c7e&timeFrame=day&targetCalories=${caloriesValue}`
            )
            .then((res) => {
                console.log(res.data);
                // setMealData(res.data);
            });
    }, [caloriesValue]);

    const handleChange = (e) => {
        setCaloriesValue(e.target.value);
    };

    const getMealPlan = (e) => {
        setMealData(mealData);
    };

    return (
        <>
            <div>
                <section className="control">
                    <input
                        className="form-field"
                        type="number"
                        placeholder="Calories (e.g. 2500)"
                        onChange={handleChange}
                        value={caloriesValue}
                    ></input>
                </section>
                <button onClick={getMealPlan} className="btn form-field">
                    Daily Meal Plan
                    {mealData && <MealList mealData={mealData}></MealList>}
                </button>
                <section></section>
            </div>
        </>
    );
}

export default MealSelector;
