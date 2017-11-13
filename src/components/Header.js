import React from 'react';
import { NavLink } from 'react-router-dom'
const logo = require('../img/brooksLogo.svg');

const Header = () => (
    <div className="header">
        <div>
            <h2>Brooks Avenue Church of Christ</h2>
            <h3>Food Bank & Clothing Closet</h3>
        </div>
        <div>
            <NavLink to="/" exact={true}><img className="logo" src={logo}/></NavLink>
        </div>
    </div>
);

export {Header as default}