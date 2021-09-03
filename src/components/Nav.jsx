import React from 'react';
import './../css/nav.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Nav = ({ items }) => {
    return (
        <nav className="nav">
            <h2 className="nav_brand">Yoshi's Spa &amp; Wellness Centre</h2>
            <ul className="nav_menu-list">
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Contact</a></li>
                <li className="cart_link" ><span>{items.length}</span><Link to="/cart">Cart</Link></li>
            </ul>
            <div className="nav_hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return { items:state.cart_items }
}

export default connect(mapStateToProps)(Nav);
