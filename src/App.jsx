import './App.scss';
// import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import SignInForm from './Components/SignInForm';
import Calck from './Components/Calck';
import Account from './Components/Account';
import { Route, Routes } from 'react-router-dom';
import MealSelector from './Components/MealSelector';
import MealList from './Components/MealList';

function App() {
    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route
                        path="/sign in"
                        element={<SignInForm></SignInForm>}
                    ></Route>
                    <Route
                        path="/account"
                        element={<Account></Account>}
                    ></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route
                        path="/calck"
                        element={
                            <Calck>
                                <MealSelector></MealSelector>
                            </Calck>
                        }
                    ></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
