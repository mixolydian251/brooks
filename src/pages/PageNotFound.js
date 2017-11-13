import React from 'react';
import '../styles/page-content.scss'

const PageNotFound = () => (
    <div className="page-content-wrapper">
        <div><h1>404 - Page not found..</h1></div>
        <div>
            <h3>The URL you have reached does not exist.</h3>
            <h4>Please use the menu to return to one of our pages :)</h4>
        </div>
    </div>
);

export {PageNotFound as default};
