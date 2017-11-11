import React from 'react';
const logo = require('../img/brooksLogo.svg');

const Header = () => (
    <div className="header">
        <div>
            <h2>Brooks Avenue Church of Christ</h2>
            <h3>Food Bank & Clothing Closet</h3>
        </div>
        <div>
            <img className="logo" src={logo}/>
        </div>
    </div>
);

export {Header as default}