import { useState } from 'react';

function LogInForm() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        Email: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (e) => {
        setValues({ ...values, firstName: e.target.value });
    };
    const handleLastNameInputChange = (e) => {
        setValues({ ...values, lastName: e.target.value });
    };
    const handleEmailInputChange = (e) => {
        setValues({ ...values, Email: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (values.firstName && values.lastName && values.Email) {
            setValid(true);
        }
    };
    return (
        <div className="form-container">
            <h1>Please sign in</h1>;
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && valid ? (
                    <div className="succses-message">
                        Success! Thank you for registering
                    </div>
                ) : null}
                <input
                    onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    className="form-field"
                    placeholder="First Name"
                ></input>
                {submitted && !values.firstName ? (
                    <span>Please enter a first name</span>
                ) : null}
                <input
                    onChange={handleLastNameInputChange}
                    value={values.lastName}
                    className="form-field"
                    placeholder="Last Name"
                ></input>
                {submitted && !values.lastName ? (
                    <span>Please enter a last name</span>
                ) : null}
                <input
                    onChange={handleEmailInputChange}
                    value={values.Email}
                    className="form-field"
                    placeholder="E-mail"
                ></input>
                {submitted && !values.Email ? (
                    <span>Please enter an e-mail</span>
                ) : null}
                <button className="btn form-field" type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default LogInForm;
