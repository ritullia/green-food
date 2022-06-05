import { useEffect, useState } from 'react';
import axios from 'axios';
import MealList from './MealList';

function MealSelector() {
    const [mealData, setMealData] = useState(null);
    const [caloriesValue, setCaloriesValue] = useState(false);

    useEffect(() => {
        axios
            .get(
                `https://api.spoonacular.com/mealplanner/generate?apiKey=72920310c5b046bcb70821a0d20012d2&timeFrame=day&targetCalories=${caloriesValue}`
            )
            .then((res) => {
                console.log(res.data);
                setMealData(res.data);
                return;
            })
            .catch((err) => {
                console.log(err);
            });
    }, [caloriesValue]);

    const handleChange = (e) => {
        setCaloriesValue(e.target.value);
    };

    // const clearCaloriesInput = () => setCaloriesValue(false);

    const getMealPlan = (e) => {
        setMealData(mealData);
    };
    const reload = () => {
        window.location.reload();
    };

    return (
        <>
            <div className="controls">
                <section className="input">
                    <input
                        className="calories form-field"
                        type="number"
                        placeholder="Calories (e.g. 2500)"
                        onChange={handleChange}
                        value={caloriesValue}
                    ></input>
                </section>
                <button onClick={getMealPlan} className="btn form-field">
                    Daily Meal Plan
                </button>
                <button onClick={reload} className="btn form-field">
                    Reload Meal Plan
                </button>
                {mealData && <MealList mealData={mealData}></MealList>}
                <section></section>
            </div>
        </>
    );
}

export default MealSelector;
