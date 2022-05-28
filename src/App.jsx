import './App.scss';
// import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import SignInForm from './Components/SignInForm';
import Account from './Components/Account';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route
                        path="/Sign in"
                        element={<SignInForm></SignInForm>}
                    ></Route>
                    <Route path="/About" element={<About></About>}></Route>
                    <Route
                        path="/Account"
                        element={<Account></Account>}
                    ></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
