import { useState } from 'react';

function LogInForm() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        Email: '',
    });

    const handleFirstNameInputChange = (e) => {
        setValues({ ...values, firstName: e.target.value });
    };
    const handleLastNameInputChange = (e) => {
        setValues({ ...values, lastName: e.target.value });
    };
    const handleEmailInputChange = (e) => {
        setValues({ ...values, Email: e.target.value });
    };
    return (
        <div className="form-container">
            <h1>Please sign in</h1>;
            <form className="register-form">
                <input
                    onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    className="form-field"
                    placeholder="First Name"
                ></input>
                <input
                    onChange={handleLastNameInputChange}
                    value={values.lastName}
                    className="form-field"
                    placeholder="Last Name"
                ></input>
                <input
                    onChange={handleEmailInputChange}
                    value={values.Email}
                    className="form-field"
                    placeholder="email"
                ></input>
            </form>
            <button>Sign in</button>
        </div>
    );
}

export default LogInForm;
