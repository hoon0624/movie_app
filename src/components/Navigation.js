import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "./movie.png";

function Navigation() {
    return ( 
    <div className="nav">
        <img src={logo} alt="logo" class="logo"></img>
        <ul className="navv">
            <li>SORT BY: </li>
            <li><Link to="/">Downloads</Link></li>
            <li><Link to="/rating">Rating</Link></li>
            <li><Link to="/likes">Likes</Link></li>
        </ul>
    </div>
    );
}

export default Navigation;