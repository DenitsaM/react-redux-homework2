import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {Router, Route, IndexRoute, hasgHistory} from "react-router";

function Header(props) {
    return (
        <header className="site-header">
            <Link to="/search">Search Rick and Morty characters</Link>
        </header>
    );
}

export default Header;