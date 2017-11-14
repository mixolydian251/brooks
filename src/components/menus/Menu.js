import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = (props) => (
        <div className="menu">
            <NavLink to="/" exact={true} className="menuOption" activeClassName="is-active">Home</NavLink>
            <NavLink to="/about" className="menuOption" activeClassName="is-active">About</NavLink>
            <NavLink to="/food" className="menuOption" activeClassName="is-active">Food</NavLink>
            <NavLink to="/clothing" className="menuOption" activeClassName="is-active">Clothing</NavLink>
            <NavLink to="/donations" className="menuOption" activeClassName="is-active">Donations</NavLink>
            <NavLink to="/volunteer" className="menuOption" activeClassName="is-active">Volunteer</NavLink>
            <NavLink to="/contact" className="menuOption" activeClassName="is-active">Contact</NavLink>
        </div>
);

export {Menu as default}