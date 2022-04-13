import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CvgLogo } from "../../assets/crown.svg";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link to="/" className='logo-container'>
                    <CvgLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link to="/shop">Shop</Link>
                    <Link to="/sign-in">Sign In</Link>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>
             <Outlet/>
        </>
    );
};

export default Navigation;