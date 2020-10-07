import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navigation></Navigation>
            <div className="search-section">
                <h1>I grow by helping people in need.</h1>
                <input type="text" placeholder="Search"/>
        </div>
        </div>
    );
};

export default Header;