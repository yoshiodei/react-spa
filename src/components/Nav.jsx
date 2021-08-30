import React from 'react';
import './../css/nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <h2 className="nav_brand">Yoshi's Spa &amp; Wellness Centre</h2>
            <ul className="nav_menu-list">
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="nav_hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Nav;
