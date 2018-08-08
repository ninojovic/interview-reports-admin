import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>
    <nav>
        <div className="nav-wrapper blue-grey darken-4">
            <div className="container">
                <Link to="/" className="brand-logo">Interview Tracker</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">View Reports</Link></li>
                    <li><Link to="/create">Create Report</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    ;

export default Header;