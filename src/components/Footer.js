import React from 'react';
const facebook = require('../img/facebook.svg');
const twitter = require('../img/twitter.svg');

const Footer = () => (
    <div className="footer">
        <div className="copyright">
            <p>Brooks Avenue Church of Christ &copy; {new Date().getFullYear()} | Raleigh, NC</p>
        </div>
        <div className="links">
            <a href="https://www.facebook.com/Brooks-Avenue-Church-of-Christ-110726658190/"><img className="socialIcon" src={facebook}/></a>
            <a href="https://twitter.com/BrooksAveCoC"><img className="socialIcon"  src={twitter}/></a>
            <a href="http://www.brooks.org">Brooks.org</a>
        </div>
    </div>
);

export {Footer as default}