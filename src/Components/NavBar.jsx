import React from 'react';
import logo from '../Img/health-food-logo.png';

function NavBar() {
    return (
        <nav className="nav">
            <img src={logo} width="50px" alt="health-logo" href="/"></img>
            <a href="/" className="site-title">
                green food
            </a>
            <ul>
                <li className="active">
                    <a href="/Sign in" className="site-title">
                        Sign in
                    </a>
                </li>
                <li>
                    <a href="/Log in" className="site-title">
                        Log in
                    </a>
                </li>
                <li>
                    <a href="/About" className="site-title">
                        About
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
