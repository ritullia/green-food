import { useState } from 'react';

function Calck() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    const calckBmi = (e) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert('Please enter a valid weight and height');
        } else {
            let bmi = weight / ((height * height) / 10000);
            setBmi(bmi.toFixed(1));

            if (bmi < 18.5) {
                setMessage('You are underweight');
            } else if (bmi >= 18.5 && bmi < 25) {
                setMessage('You are a healthy');
            } else {
                setMessage('You are overweight');
            }
        }
    };

    let imgSrc;

    if (bmi < 1) {
        imgSrc = null;
    } else {
        if (bmi < 18.5) {
            imgSrc = require('../Img/underweight.png');
        } else if (bmi >= 18.5 && bmi < 25) {
            imgSrc = require('../Img/normal.png');
        } else {
            imgSrc = require('../Img/overweight.png');
        }
    }

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className="form-container">
            <form onSubmit={calckBmi}>
                <div className="bmi-form">
                    <label>Weight (kg)</label>
                    <input
                        onChange={(e) => setWeight(e.target.value)}
                        value={weight}
                        className="form-field"
                        placeholder="Weight"
                    ></input>
                </div>
                <div className="bmi-form">
                    <label>Height (cm)</label>
                    <input
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                        className="form-field"
                        placeholder="Height"
                    ></input>
                </div>
                <div className="bmi-form">
                    <button className="btn form-field" type="submit">
                        Submit
                    </button>
                    <button
                        className="btn form-field outline"
                        onClick={reload}
                        type="submit"
                    >
                        Reload
                    </button>
                </div>
            </form>

            <div className="center">
                <h3>Your BMI is: {bmi}</h3>
                <p>{message}</p>
            </div>
            <div>
                {<img src={imgSrc} alt="" className="img-container"></img>}
            </div>
        </div>
    );
}

export default Calck;
