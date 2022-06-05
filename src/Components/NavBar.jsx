import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../Img/health-food-logo.png';
// import { useState } from 'react';

function NavBar() {
    return (
        <nav className="nav">
            <img
                src={logo}
                width="50px"
                alt="health-logo"
                className="Logo"
                href="/"
            ></img>
            <Link
                to="/"
                className="main-title"
                style={{
                    fontFamily:
                        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                }}
            >
                GREEN FOOD
            </Link>
            <ul>
                <CustomLink to="/Account">Account</CustomLink>
                <CustomLink to="/Calck">BMI</CustomLink>
                <CustomLink to="/About">About</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, enf: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default NavBar;
