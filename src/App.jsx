import './App.scss';

// import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import SignInForm from './Components/SignInForm';
import LogInForm from './Components/LogInForm';

function App() {
    let component;
    switch (window.location.pathname) {
        case '/':
            component = <Home></Home>;
            break;
        case '/About':
            component = <About></About>;
            break;
        case '/Sign in':
            component = <SignInForm></SignInForm>;
            break;
        case '/Log in':
            component = <LogInForm></LogInForm>;
            break;
        default:
    }
    return (
        <>
            <NavBar></NavBar>
            <div>{component}</div>
        </>
    );
}

export default App;
